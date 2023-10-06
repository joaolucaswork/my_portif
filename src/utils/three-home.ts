// @ts-nocheck
import * as THREE from 'three'; // Import the three.js library
import * as CANNON from 'cannon-es' // Import the cannon-es library
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js"; // Import the RoundedBoxGeometry addon from three.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; // Import the OrbitControls addon from three.js

export const threeHome = () => {

/**
 * Base
 */

// Canvas
const canvasEl = document.querySelector("canvas.webgl");
const containerEl = document.querySelector(".container");

let renderer, scene, camera, orbit, physicsWorld, eyeMaterial, dummy, eyeGeometry, pupilGeometry, instancedEyesMesh, eyesBodies = [];

const params = {
  eyesNumber: 100,
  eyeRadius: 0.03,
  pupilRadius: 0.08,
  containerSize: 1,
  gravity: 10
};

initPhysics();
initSceneForEyes();
throwEyes();
eyeMaterial.visible = true;
render();

window.addEventListener("resize", updateSceneSize);


containerEl.addEventListener("dblclick", throwEyes);

function initSceneForEyes() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvasEl
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, containerEl.clientWidth / containerEl.clientHeight, .1, 100)
  camera.position.set(0, 1, .5).multiplyScalar(5);
  updateSceneSize();

  dummy = new THREE.Object3D();

  orbit = new OrbitControls(camera, canvasEl);
  orbit.enableZoom = false;
  orbit.enablePan = false;
  orbit.minPolarAngle = .1 * Math.PI;
  orbit.maxPolarAngle = .9 * Math.PI;
  orbit.autoRotate = true;
  orbit.autoRotateSpeed = 19;
  orbit.enableDamping = true;

  for (let i = 0; i < 6; i++) {
    const body = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
    });
    physicsWorld.addBody(body);

    const posSign = i % 2 ? 1 : (-1);
    if (i < 2) {
      body.position.x = posSign * .5 * params.containerSize;
      body.quaternion.setFromEuler(0, -posSign * Math.PI / 2, 0);
    } else if (i < 4) {
      body.position.y = posSign * .5 * params.containerSize;
      body.quaternion.setFromEuler(posSign * Math.PI / 2, 0, 0);
    } else {
      body.position.z = posSign * .5 * params.containerSize;
      if (i > 4) {
        body.quaternion.setFromEuler(0, Math.PI, 0);
      }
    }
  }

  eyeMaterial = new THREE.MeshBasicMaterial({
    color: 0xE5221B, // Set the eye color to white
    visible: true
  });

  eyeGeometry = new THREE.SphereGeometry(params.eyeRadius, 32, 32);
  pupilGeometry = new THREE.SphereGeometry(params.pupilRadius, 32, 32);

  instancedEyesMesh = new THREE.InstancedMesh(eyeGeometry, eyeMaterial, params.eyesNumber);
  scene.add(instancedEyesMesh);

  for (let i = 0; i < params.eyesNumber; i++) {
    eyesBodies[i] = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(params.eyeRadius),
    });
    physicsWorld.addBody(eyesBodies[i]);

    // Create the pupils
    const pupilMaterial = new THREE.MeshBasicMaterial({
      color: 0xE5221B, // Set the pupil color to black
      visible: true
    });

    // Create the pupil mesh and position it inside the eye
    const pupilMesh = new THREE.Mesh(pupilGeometry, pupilMaterial);
    const pupilPosition = new THREE.Vector3(
      (Math.random() - 0.5) * params.eyeRadius * 0.5,
      (Math.random() - 0.5) * params.eyeRadius * 0.5,
      (params.eyeRadius - params.pupilRadius) * -0.5
    );
    pupilMesh.position.copy(pupilPosition);

    // Create a group to hold the eye and pupil meshes
    const eyeGroup = new THREE.Group();
    eyeGroup.add(instancedEyesMesh);
    eyeGroup.add(pupilMesh);

    // Position the eye group based on the body's position
    eyeGroup.position.copy(eyesBodies[i].position);

    // Add the eye group to the scene
    scene.add(eyeGroup);
  }

  const wallGeometry = new THREE.BoxGeometry(params.containerSize, params.containerSize, params.containerSize);
  
  // Create a new material for the lines with the desired line color
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xE5221B }); // Adjust the color as needed
  const wallEdges = new THREE.EdgesGeometry(wallGeometry);
  
  // Create a new line object with custom width
  const customLine = new THREE.LineSegments(wallEdges, lineMaterial);
  customLine.scale.set(1, 1, 1); // Adjust the scale for line width

  scene.add(customLine);
}



function initPhysics() {
  physicsWorld = new CANNON.World({
    allowSleep: true,
    gravity: new CANNON.Vec3(0, -params.gravity, 0),
  });
  physicsWorld.defaultContactMaterial.friction = .1;
  physicsWorld.defaultContactMaterial.restitution = .9;
}

function render() {
  orbit.update();
  physicsWorld.step(1 / 60);

  for (let i = 0; i < params.eyesNumber; i++) {
    dummy.position.copy(eyesBodies[i].position);
    dummy.quaternion.copy(eyesBodies[i].quaternion);
    dummy.updateMatrix();
    instancedEyesMesh.setMatrixAt(i, dummy.matrix);
  }

  instancedEyesMesh.instanceMatrix.needsUpdate = true;

  const gravity = new THREE.Vector3(0, -params.gravity, 0);
  gravity.applyQuaternion(camera.quaternion);
  physicsWorld.gravity.set(gravity.x, gravity.y, gravity.z);

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function throwEyes() {
  eyesBodies.forEach(body => {
    const force = 7;
    body.applyImpulse(
      new CANNON.Vec3(
        Math.random() > .5 ? -force : force,
        Math.random() > .5 ? -force : force,
        Math.random() > .5 ? -force : force
      ),
      new CANNON.Vec3(0, 0, 0)
    );
  });
}

function updateSceneSize() {
  camera.aspect = containerEl.clientWidth / containerEl.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
}

function updateSceneForEyes() {
  // Add code to update the scene for eyes here
}

}