"use strict";(()=>{function Hr(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function za(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wr(r,t,e){return t&&za(r.prototype,t),e&&za(r,e),r}function Mh(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&zr(r,t)}function wn(r){return wn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},wn(r)}function zr(r,t){return zr=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},zr(r,t)}function bh(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wh(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sh(r,t){return t&&(typeof t=="object"||typeof t=="function")?t:wh(r)}function Eh(r){var t=bh();return function(){var n=wn(r),i;if(t){var s=wn(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return Sh(this,i)}}function Th(r,t){for(;!Object.prototype.hasOwnProperty.call(r,t)&&(r=wn(r),r!==null););return r}function oi(r,t,e){return typeof Reflect!="undefined"&&Reflect.get?oi=Reflect.get:oi=function(i,s,o){var a=Th(i,s);if(a){var c=Object.getOwnPropertyDescriptor(a,s);return c.get?c.get.call(o):c.value}},oi(r,t,e||r)}function kr(r,t){return Ah(r)||Rh(r,t)||Ch(r,t)||Ph()}function Ah(r){if(Array.isArray(r))return r}function Rh(r,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));n=!0);}catch(c){i=!0,s=c}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return e}}function Ch(r,t){if(r){if(typeof r=="string")return ka(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ka(r,t)}}function ka(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Ph(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ai={el:document.querySelector("body"),wrapper:window,name:"scroll",offset:[0,0],repeat:!1,smooth:!0,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!0,class:"is-inview",scrollingClass:"has-scroll-scrolling",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",duration:1.2,easing:function(t){return t===1?1:1-Math.pow(2,-10*t)},scrollToEasing:function(t){return t===1?1:1-Math.pow(2,-10*t)},scrollFromAnywhere:!1,touchMultiplier:3,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"horizontal",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},Lh=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Hr(this,r),Object.assign(this,ai,t),this.smartphone=ai.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=ai.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.isMobile&&(this.smooth=this.smartphone.smooth),this.isTablet&&(this.smooth=this.tablet.smooth),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.onScroll=this.onScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},delta:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.isMobile&&(this.gestureDirection=this[this.context].gestureDirection),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.instance.direction=null,this.instance.speed=0,this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return Wr(r,[{key:"init",value:function(){this.initEvents()}},{key:"onScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var e=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){e.resize(),e.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var e=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",e!=this.context){var n=e=="desktop"?this.smooth:this[e].smooth,i=this.context=="desktop"?this.smooth:this[this.context].smooth;n!=i&&window.location.reload()}}}},{key:"initEvents",value:function(){var e=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(n){n.addEventListener("click",e.setScrollTo,!1)})}},{key:"setScrollTo",value:function(e){e.preventDefault(),this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name,"-href"))||e.currentTarget.getAttribute("href"),{offset:e.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(e){var n=this,i=this.instance.scroll.y,s=i+this.windowHeight,o=this.instance.scroll.x,a=o+this.windowWidth;Object.entries(this.els).forEach(function(c){var l=kr(c,2),h=l[0],d=l[1];if(d&&(!d.inView||e)&&(n.direction==="horizontal"?a>=d.left&&o<d.right&&n.setInView(d,h):s>=d.top&&i<d.bottom&&n.setInView(d,h)),d&&d.inView)if(n.direction==="horizontal"){var u=d.right-d.left;d.progress=(n.instance.scroll.x-(d.left-n.windowWidth))/(u+n.windowWidth),(a<d.left||o>d.right)&&n.setOutOfView(d,h)}else{var f=d.bottom-d.top;d.progress=(n.instance.scroll.y-(d.top-n.windowHeight))/(f+n.windowHeight),(s<d.top||i>d.bottom)&&n.setOutOfView(d,h)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(e,n){this.els[n].inView=!0,e.el.classList.add(e.class),this.currentElements[n]=e,e.call&&this.hasCallEventSet&&(this.dispatchCall(e,"enter"),e.repeat||(this.els[n].call=!1))}},{key:"setOutOfView",value:function(e,n){var i=this;this.els[n].inView=!1,Object.keys(this.currentElements).forEach(function(s){s===n&&delete i.currentElements[s]}),e.call&&this.hasCallEventSet&&this.dispatchCall(e,"exit"),e.repeat&&e.el.classList.remove(e.class)}},{key:"dispatchCall",value:function(e,n){this.callWay=n,this.callValue=e.call.split(",").map(function(s){return s.trim()}),this.callObj=e,this.callValue.length==1&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var e=new Event(this.namespace+"scroll");this.el.dispatchEvent(e)}},{key:"setEvents",value:function(e,n){this.listeners[e]||(this.listeners[e]=[]);var i=this.listeners[e];i.push(n),i.length===1&&this.el.addEventListener(this.namespace+e,this.checkEvent,!1),e==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(e,n){if(this.listeners[e]){var i=this.listeners[e],s=i.indexOf(n);s<0||(i.splice(s,1),i.index===0&&this.el.removeEventListener(this.namespace+e,this.checkEvent,!1))}}},{key:"checkEvent",value:function(e){var n=this,i=e.type.replace(this.namespace,""),s=this.listeners[i];!s||s.length===0||s.forEach(function(o){switch(i){case"scroll":return o(n.instance);case"call":return o(n.callValue,n.callWay,n.callObj);default:return o()}})}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(e,n){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var e=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(n){e.el.removeEventListener(e.namespace+n,e.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(n){n.removeEventListener("click",e.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),r}(),Ih=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wa(r,t){return t={exports:{}},r(t,t.exports),t.exports}var Ga=Wa(function(r,t){(function(){function e(){var n=window,i=document;if("scrollBehavior"in i.documentElement.style&&n.__forceSmoothScrollPolyfill__!==!0)return;var s=n.HTMLElement||n.Element,o=468,a={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:s.prototype.scroll||d,scrollIntoView:s.prototype.scrollIntoView},c=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now;function l(x){var M=["MSIE ","Trident/","Edge/"];return new RegExp(M.join("|")).test(x)}var h=l(n.navigator.userAgent)?1:0;function d(x,M){this.scrollLeft=x,this.scrollTop=M}function u(x){return .5*(1-Math.cos(Math.PI*x))}function f(x){if(x===null||typeof x!="object"||x.behavior===void 0||x.behavior==="auto"||x.behavior==="instant")return!0;if(typeof x=="object"&&x.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+x.behavior+" is not a valid value for enumeration ScrollBehavior.")}function g(x,M){if(M==="Y")return x.clientHeight+h<x.scrollHeight;if(M==="X")return x.clientWidth+h<x.scrollWidth}function v(x,M){var T=n.getComputedStyle(x,null)["overflow"+M];return T==="auto"||T==="scroll"}function m(x){var M=g(x,"Y")&&v(x,"Y"),T=g(x,"X")&&v(x,"X");return M||T}function p(x){for(;x!==i.body&&m(x)===!1;)x=x.parentNode||x.host;return x}function y(x){var M=c(),T,E,U,b=(M-x.startTime)/o;b=b>1?1:b,T=u(b),E=x.startX+(x.x-x.startX)*T,U=x.startY+(x.y-x.startY)*T,x.method.call(x.scrollable,E,U),(E!==x.x||U!==x.y)&&n.requestAnimationFrame(y.bind(n,x))}function _(x,M,T){var E,U,b,A,B=c();x===i.body?(E=n,U=n.scrollX||n.pageXOffset,b=n.scrollY||n.pageYOffset,A=a.scroll):(E=x,U=x.scrollLeft,b=x.scrollTop,A=d),y({scrollable:E,method:A,startTime:B,startX:U,startY:b,x:M,y:T})}n.scroll=n.scrollTo=function(){if(arguments[0]!==void 0){if(f(arguments[0])===!0){a.scroll.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:n.scrollY||n.pageYOffset);return}_.call(n,i.body,arguments[0].left!==void 0?~~arguments[0].left:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:n.scrollY||n.pageYOffset)}},n.scrollBy=function(){if(arguments[0]!==void 0){if(f(arguments[0])){a.scrollBy.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}_.call(n,i.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(f(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var x=arguments[0].left,M=arguments[0].top;_.call(this,this,typeof x=="undefined"?this.scrollLeft:~~x,typeof M=="undefined"?this.scrollTop:~~M)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(f(arguments[0])===!0){a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(f(arguments[0])===!0){a.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var x=p(this),M=x.getBoundingClientRect(),T=this.getBoundingClientRect();x!==i.body?(_.call(this,x,x.scrollLeft+T.left-M.left,x.scrollTop+T.top-M.top),n.getComputedStyle(x).position!=="fixed"&&n.scrollBy({left:M.left,top:M.top,behavior:"smooth"})):n.scrollBy({left:T.left,top:T.top,behavior:"smooth"})}}r.exports={polyfill:e}})()}),xy=Ga.polyfill;function Br(r){var t={};if(window.getComputedStyle){var e=getComputedStyle(r),n=e.transform||e.webkitTransform||e.mozTransform,i=n.match(/^matrix3d\((.+)\)$/);return i?(t.x=i?parseFloat(i[1].split(", ")[12]):0,t.y=i?parseFloat(i[1].split(", ")[13]):0):(i=n.match(/^matrix\((.+)\)$/),t.x=i?parseFloat(i[1].split(", ")[4]):0,t.y=i?parseFloat(i[1].split(", ")[5]):0),t}}function Va(r,t,e){return(1-e)*r+e*t}function Gr(){}Gr.prototype={on:function(r,t,e){var n=this.e||(this.e={});return(n[r]||(n[r]=[])).push({fn:t,ctx:e}),this},once:function(r,t,e){var n=this;function i(){n.off(r,i),t.apply(e,arguments)}return i._=t,this.on(r,i,e)},emit:function(r){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[r]||[]).slice(),n=0,i=e.length;for(n;n<i;n++)e[n].fn.apply(e[n].ctx,t);return this},off:function(r,t){var e=this.e||(this.e={}),n=e[r],i=[];if(n&&t)for(var s=0,o=n.length;s<o;s++)n[s].fn!==t&&n[s].fn._!==t&&i.push(n[s]);return i.length?e[r]=i:delete e[r],this}};var qa=Gr,Nh=Gr;qa.TinyEmitter=Nh;var Dh=Wa(function(r,t){(function(e,n){r.exports=n()})(Ih,function(){var e=0;function n(v){return"__private_"+e+++"_"+v}function i(v,m){if(!Object.prototype.hasOwnProperty.call(v,m))throw new TypeError("attempted to use private field on non-instance");return v}function s(){}s.prototype={on:function(v,m,p){var y=this.e||(this.e={});return(y[v]||(y[v]=[])).push({fn:m,ctx:p}),this},once:function(v,m,p){var y=this;function _(){y.off(v,_),m.apply(p,arguments)}return _._=m,this.on(v,_,p)},emit:function(v){for(var m=[].slice.call(arguments,1),p=((this.e||(this.e={}))[v]||[]).slice(),y=0,_=p.length;y<_;y++)p[y].fn.apply(p[y].ctx,m);return this},off:function(v,m){var p=this.e||(this.e={}),y=p[v],_=[];if(y&&m)for(var x=0,M=y.length;x<M;x++)y[x].fn!==m&&y[x].fn._!==m&&_.push(y[x]);return _.length?p[v]=_:delete p[v],this}};var o=s;o.TinyEmitter=s;var a,c="virtualscroll",l=n("options"),h=n("el"),d=n("emitter"),u=n("event"),f=n("touchStart"),g=n("bodyTouchAction");return function(){function v(p){var y=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),this._onWheel=function(_){var x=i(y,l)[l],M=i(y,u)[u];M.deltaX=_.wheelDeltaX||-1*_.deltaX,M.deltaY=_.wheelDeltaY||-1*_.deltaY,a.isFirefox&&_.deltaMode===1&&(M.deltaX*=x.firefoxMultiplier,M.deltaY*=x.firefoxMultiplier),M.deltaX*=x.mouseMultiplier,M.deltaY*=x.mouseMultiplier,y._notify(_)},this._onMouseWheel=function(_){var x=i(y,u)[u];x.deltaX=_.wheelDeltaX?_.wheelDeltaX:0,x.deltaY=_.wheelDeltaY?_.wheelDeltaY:_.wheelDelta,y._notify(_)},this._onTouchStart=function(_){var x=_.targetTouches?_.targetTouches[0]:_;i(y,f)[f].x=x.pageX,i(y,f)[f].y=x.pageY},this._onTouchMove=function(_){var x=i(y,l)[l];x.preventTouch&&!_.target.classList.contains(x.unpreventTouchClass)&&_.preventDefault();var M=i(y,u)[u],T=_.targetTouches?_.targetTouches[0]:_;M.deltaX=(T.pageX-i(y,f)[f].x)*x.touchMultiplier,M.deltaY=(T.pageY-i(y,f)[f].y)*x.touchMultiplier,i(y,f)[f].x=T.pageX,i(y,f)[f].y=T.pageY,y._notify(_)},this._onKeyDown=function(_){var x=i(y,u)[u];x.deltaX=x.deltaY=0;var M=window.innerHeight-40;switch(_.keyCode){case 37:case 38:x.deltaY=i(y,l)[l].keyStep;break;case 39:case 40:x.deltaY=-i(y,l)[l].keyStep;break;case 32:x.deltaY=M*(_.shiftKey?1:-1);break;default:return}y._notify(_)},i(this,h)[h]=window,p&&p.el&&(i(this,h)[h]=p.el,delete p.el),a||(a={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),i(this,l)[l]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},p),i(this,d)[d]=new o,i(this,u)[u]={y:0,x:0,deltaX:0,deltaY:0},i(this,f)[f]={x:null,y:null},i(this,g)[g]=null,i(this,l)[l].passive!==void 0&&(this.listenerOptions={passive:i(this,l)[l].passive})}var m=v.prototype;return m._notify=function(p){var y=i(this,u)[u];y.x+=y.deltaX,y.y+=y.deltaY,i(this,d)[d].emit(c,{x:y.x,y:y.y,deltaX:y.deltaX,deltaY:y.deltaY,originalEvent:p})},m._bind=function(){a.hasWheelEvent&&i(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),a.hasMouseWheelEvent&&i(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),a.hasTouch&&i(this,l)[l].useTouch&&(i(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),i(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),a.hasPointer&&a.hasTouchWin&&(i(this,g)[g]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&i(this,l)[l].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},m._unbind=function(){a.hasWheelEvent&&i(this,h)[h].removeEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&i(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(i(this,h)[h].removeEventListener("touchstart",this._onTouchStart),i(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(document.body.style.msTouchAction=i(this,g)[g],i(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),i(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&i(this,l)[l].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},m.on=function(p,y){i(this,d)[d].on(c,p,y);var _=i(this,d)[d].e;_&&_[c]&&_[c].length===1&&this._bind()},m.off=function(p,y){i(this,d)[d].off(c,p,y);var _=i(this,d)[d].e;(!_[c]||_[c].length<=0)&&this._unbind()},m.destroy=function(){i(this,d)[d].off(),this._unbind()},v}()})});function Ha(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Xa(r,t,e){return t&&Ha(r.prototype,t),e&&Ha(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Gi(){return Gi=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},Gi.apply(this,arguments)}function Vr(r,t){return Vr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},Vr(r,t)}var Uh=["duration","easing"],Fh=function(){function r(){}var t=r.prototype;return t.to=function(e,n){var i=this,s=n===void 0?{}:n,o=s.duration,a=o===void 0?1:o,c=s.easing,l=c===void 0?function(d){return d}:c,h=function(d,u){if(d==null)return{};var f,g,v={},m=Object.keys(d);for(g=0;g<m.length;g++)u.indexOf(f=m[g])>=0||(v[f]=d[f]);return v}(s,Uh);this.target=e,this.fromKeys=Gi({},h),this.toKeys=Gi({},h),this.keys=Object.keys(Gi({},h)),this.keys.forEach(function(d){i.fromKeys[d]=e[d]}),this.duration=a,this.easing=l,this.currentTime=0,this.isRunning=!0},t.stop=function(){this.isRunning=!1},t.raf=function(e){var n=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+.001*e,this.duration);var i=this.easing(this.progress);this.keys.forEach(function(s){var o=n.fromKeys[s];n.target[s]=o+(n.toKeys[s]-o)*i}),i===1&&(this.isRunning=!1)}},Xa(r,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),r}(),Oh=function(r){var t,e;function n(s){var o,a,c,l,h=s===void 0?{}:s,d=h.duration,u=d===void 0?1.2:d,f=h.easing,g=f===void 0?function(C){return C===1?1:1-Math.pow(2,-10*C)}:f,v=h.smooth,m=v===void 0||v,p=h.smoothTouch,y=p!==void 0&&p,_=h.touchMultiplier,x=_===void 0?2:_,M=h.direction,T=M===void 0?"vertical":M,E=h.gestureDirection,U=E===void 0?"vertical":E,b=h.wrapper,A=b===void 0?window:b,B=h.content,Y=B===void 0?document.body:B;(l=r.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(C){var I=C[0];if(I){var N=I.contentRect;l.wrapperWidth=N.width,l.wrapperHeight=N.height}},l.onContentResize=function(C){var I=C[0];if(I){var N=I.contentRect;l.contentWidth=N.width,l.contentHeight=N.height}},l.onVirtualScroll=function(C){var I=C.deltaY,N=C.deltaX,G=C.originalEvent;G.ctrlKey||(l.smooth=G.changedTouches?l.smoothTouch:l.options.smooth,l.stopped?G.preventDefault():l.smooth&&G.buttons!==4&&(l.smooth&&G.preventDefault(),l.targetScroll-=l.gestureDirection==="both"?N+I:l.gestureDirection==="horizontal"?N:I,l.targetScroll=Math.max(0,Math.min(l.targetScroll,l.limit)),l.scrollTo(l.targetScroll)))},l.onScroll=function(C){l.isScrolling&&l.smooth||(l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.notify())},window.lenisVersion="0.2.9",l.options={duration:u,easing:g,smooth:m,smoothTouch:y,touchMultiplier:x,direction:T,gestureDirection:U,wrapper:A,content:Y},l.duration=u,l.easing=g,l.smooth=m,l.smoothTouch=y,l.touchMultiplier=x,l.direction=T,l.gestureDirection=U,l.wrapperNode=A,l.contentNode=Y,l.wrapperNode.addEventListener("scroll",l.onScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.lastScroll=l.wrapperNode[l.scrollProperty],l.animate=new Fh;var F=((o=navigator)==null||(a=o.userAgentData)==null?void 0:a.platform)||((c=navigator)==null?void 0:c.platform)||"unknown";return l.virtualScroll=new Dh({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:F.includes("Win")?1:.4,useKeyboard:!1,touchMultiplier:l.touchMultiplier,useTouch:!0,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l}e=r,(t=n).prototype=Object.create(e.prototype),t.prototype.constructor=t,Vr(t,e);var i=n.prototype;return i.start=function(){this.stopped=!1},i.stop=function(){this.stopped=!0,this.animate.stop()},i.destroy=function(){var s;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),(s=this.wrapperObserver)==null||s.disconnect(),this.contentObserver.disconnect()},i.raf=function(s){var o=s-(this.now||0);this.now=s,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(o),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},i.setScroll=function(s){this.direction==="horizontal"?this.wrapperNode.scrollTo(s,0):this.wrapperNode.scrollTo(0,s)},i.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},i.scrollTo=function(s,o){var a=o===void 0?{}:o,c=a.offset,l=c===void 0?0:c,h=a.immediate,d=h!==void 0&&h,u=a.duration,f=u===void 0?this.duration:u,g=a.easing,v=g===void 0?this.easing:g;if(s!=null){var m;if(typeof s=="number")m=s;else if(s==="top"||s==="#top")m=0;else if(s==="bottom")m=this.limit;else{var p;if(typeof s=="string")p=document.querySelector(s);else{if(s==null||!s.nodeType)return;p=s}if(!p)return;var y=0;if(this.wrapperNode!==window){var _=this.wrapperNode.getBoundingClientRect();y=this.direction==="horizontal"?_.left:_.top}var x=p.getBoundingClientRect();m=(this.direction==="horizontal"?x.left:x.top)+this.scroll-y}this.targetScroll=m+=l,!this.smooth||d?this.setScroll(this.targetScroll):this.animate.to(this,{duration:f,easing:v,scroll:this.targetScroll})}},Xa(n,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?this.direction==="horizontal"?"scrollX":"scrollY":this.direction==="horizontal"?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return this.direction==="horizontal"?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),n}(qa),Bh=function(r){Mh(e,r);var t=Eh(e);function e(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hr(this,e),n=t.call(this,i),n.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=Ga,window.smoothscrollPolyfill.polyfill()),n}return Wr(e,[{key:"init",value:function(){this.smooth&&(this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction)),this.addElements(),this.detectElements(),this.transformElements(!0,!0),this.initContainerSize(),this.lenis=new Oh({wrapper:this.wrapper,content:this.el,duration:this.duration,easing:this.easing,direction:this.direction,gestureDirection:this.gestureDirection,smooth:this.smooth,smoothTouch:this.smooth,touchMultiplier:this.touchMultiplier}),this.bindOnScroll=this.onScroll.bind(this),this.lenis.on("scroll",this.bindOnScroll),this.lenis.on("scroll",function(i){var s=i.scroll,o=i.limit,a=i.velocity,c=i.direction,l=i.progress}),this.raf(0),oi(wn(e.prototype),"init",this).call(this)}},{key:"raf",value:function(i){var s=this;this.lenis.raf(i),this.rafInstance=requestAnimationFrame(function(){return s.raf(Date.now())})}},{key:"onScroll",value:function(i){var s=this,o=i.scroll,a=i.velocity;o>this.instance.scroll[this.directionAxis]?this.instance.direction!=="down"&&(this.instance.direction="down"):o<this.instance.scroll[this.directionAxis]&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.scroll[this.directionAxis]=o,this.instance.speed=a,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){s.detectElements()}),this.hasScrollTicking=!0)),oi(wn(e.prototype),"onScroll",this).call(this),this.transformElements()}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.checkContext(),this.initContainerSize(),Object.entries(this.els).length&&this.update()}},{key:"initContainerSize",value:function(){if(this.direction==="horizontal"){for(var i=0,s=0;s<this.el.children.length;s++){var o=this.el.children[s];i+=o.getBoundingClientRect().width}this.el.style.setProperty("--scrollContainerWidth",i+"px")}}},{key:"addElements",value:function(){var i=this;this.els={},this.parallaxElements={};var s=this.el.querySelectorAll("[data-"+this.name+"]");s.forEach(function(o,a){var c=o.getBoundingClientRect(),l=o.dataset[i.name+"Class"]||i.class,h=typeof o.dataset[i.name+"Id"]=="string"?o.dataset[i.name+"Id"]:a,d,u,f=typeof o.dataset[i.name+"Offset"]=="string"?o.dataset[i.name+"Offset"].split(","):i.offset,g=o.dataset[i.name+"Repeat"],v=o.dataset[i.name+"Call"],m=o.dataset[i.name+"Position"],p=o.dataset[i.name+"Delay"],y=o.dataset[i.name+"Direction"],_=typeof o.dataset[i.name+"Sticky"]=="string";_&&console.warn("You use data-scroll-sticky, it's not recommended for performances. Please adapt your code and play with position:sticky.");var x=o.dataset[i.name+"Target"],M;x!==void 0?M=document.querySelector("".concat(x)):M=o;var T=M.getBoundingClientRect();d=T.top+i.instance.scroll.y-Br(M).y,u=T.left+i.instance.scroll.x-Br(M).x;var E=d+M.offsetHeight,U=u+M.offsetWidth,b={x:(U-u)/2+u,y:(E-d)/2+d};if(_){var A=o.getBoundingClientRect(),B=A.top,Y=A.left,F={x:Y-u,y:B-d};d+=window.innerHeight,u+=window.innerWidth,E=B+M.offsetHeight-o.offsetHeight-F[i.directionAxis],U=Y+M.offsetWidth-o.offsetWidth-F[i.directionAxis],b={x:(U-u)/2+u,y:(E-d)/2+d}}g=="false"?g=!1:g!=null?g=!0:g=i.repeat;var C=o.dataset[i.name+"Speed"]?parseFloat(o.dataset[i.name+"Speed"])/10:!1;C&&(f=0);var I=[0,0];if(f)if(i.direction==="horizontal"){for(var N=0;N<f.length;N++)typeof f[N]=="string"?f[N].includes("%")?I[N]=parseInt(f[N].replace("%","")*i.windowWidth/100):I[N]=parseInt(f[N]):I[N]=f[N];u=u+I[0],U=U-I[1]}else{for(var N=0;N<f.length;N++)typeof f[N]=="string"?f[N].includes("%")?I[N]=parseInt(f[N].replace("%","")*i.windowHeight/100):I[N]=parseInt(f[N]):I[N]=f[N];d=d+I[0],E=E-I[1]}var G={el:o,targetEl:M,id:h,class:l,top:d,bottom:E,middle:b,left:u,right:U,position:m,delay:p,direction:y,offset:f,progress:0,repeat:g,inView:!1,call:v,speed:C,sticky:_};i.els[h]=G,o.classList.contains(l)&&i.setInView(i.els[h],h),(C!==!1||_)&&(i.parallaxElements[h]=G)})}},{key:"updateElements",value:function(){var i=this;Object.entries(this.els).forEach(function(s){var o=kr(s,2),a=o[0],c=o[1],l=c.targetEl.getBoundingClientRect().top+i.instance.scroll.y,h=l+c.targetEl.offsetHeight,d=i.getRelativeOffset(c.offset);i.els[a].top=l+d[0],i.els[a].bottom=h-d[1]}),this.hasScrollTicking=!1}},{key:"transform",value:function(i,s,o,a){var c;if(!a)c="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s,",").concat(o,",0,1)");else{var l=Br(i),h=Va(l.x,s,a),d=Va(l.y,o,a);c="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(h,",").concat(d,",0,1)")}i.style.webkitTransform=c,i.style.msTransform=c,i.style.transform=c}},{key:"transformElements",value:function(i){var s=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this.smooth){var a=this.instance.scroll.x+this.windowWidth,c=this.instance.scroll.y+this.windowHeight,l={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(h){var d=kr(h,2),u=d[0],f=d[1],g=!1;if(i&&(g=0),f.inView||o)switch(f.position){case"top":g=s.instance.scroll[s.directionAxis]*-f.speed;break;case"elementTop":g=(c-f.top)*-f.speed;break;case"bottom":g=(s.instance.limit[s.directionAxis]-c+s.windowHeight)*f.speed;break;case"left":g=s.instance.scroll[s.directionAxis]*-f.speed;break;case"elementLeft":g=(a-f.left)*-f.speed;break;case"right":g=(s.instance.limit[s.directionAxis]-a+s.windowHeight)*f.speed;break;default:g=(l[s.directionAxis]-f.middle[s.directionAxis])*-f.speed;break}f.sticky&&(f.inView?s.direction==="horizontal"?g=s.instance.scroll.x-f.left+s.windowWidth:g=s.instance.scroll.y-f.top+s.windowHeight:s.direction==="horizontal"?s.instance.scroll.x<f.left-s.windowWidth&&s.instance.scroll.x<f.left-s.windowWidth/2?g=0:s.instance.scroll.x>f.right&&s.instance.scroll.x>f.right+100?g=f.right-f.left+s.windowWidth:g=!1:s.instance.scroll.y<f.top-s.windowHeight&&s.instance.scroll.y<f.top-s.windowHeight/2?g=0:s.instance.scroll.y>f.bottom&&s.instance.scroll.y>f.bottom+100?g=f.bottom-f.top+s.windowHeight:g=!1),g!==!1&&(f.direction==="horizontal"||s.direction==="horizontal"&&f.direction!=="vertical"?s.transform(f.el,g,0,i?!1:f.delay):s.transform(f.el,0,g,i?!1:f.delay))})}}},{key:"getRelativeOffset",value:function(i){var s=[0,0];if(i)for(var o=0;o<i.length;o++)typeof i[o]=="string"?i[o].includes("%")?s[o]=parseInt(i[o].replace("%","")*this.windowHeight/100):s[o]=parseInt(i[o]):s[o]=i[o];return s}},{key:"scrollTo",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=parseInt(s.offset)||0,a=s.duration||1,c=this.scrollToEasing;this.lenis.scrollTo(i,{offset:o,immediate:s.immediate,duration:a,easing:c})}},{key:"update",value:function(){this.addElements(),this.detectElements(),this.transformElements(!0)}},{key:"startScroll",value:function(){this.lenis!=null&&this.lenis.start()}},{key:"stopScroll",value:function(){this.lenis!=null&&this.lenis.stop()}},{key:"destroy",value:function(){oi(wn(e.prototype),"destroy",this).call(this),cancelAnimationFrame(this.rafInstance)}}]),e}(Lh),zh=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Hr(this,r),this.options=t,Object.assign(this,ai,t),this.smartphone=ai.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=ai.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return Wr(r,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.smooth=!0:this.smooth=!1,this.scroll=new Bh(this.options),this.scroll.init(),window.location.hash){var e=window.location.hash.slice(1,window.location.hash.length),n=document.getElementById(e);n&&this.scroll.scrollTo(n)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(e,n){this.scroll.scrollTo(e,n)}},{key:"setScroll",value:function(e,n){this.scroll.setScroll(e,n)}},{key:"on",value:function(e,n){this.scroll.setEvents(e,n)}},{key:"off",value:function(e,n){this.scroll.unsetEvents(e,n)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),r}(),Ya=zh;var ja=()=>{new Ya({smooth:!0})};var sa="157",ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kh=0,Za=1,Vh=2;var wc=1,Hh=2,un=3,Un=0,Re=1,dn=2;var In=0,Ri=1,$a=2,Ka=3,Ja=4,Wh=5,Ei=100,Gh=101,qh=102,Qa=103,tl=104,Xh=200,Yh=201,jh=202,Zh=203,Sc=204,Ec=205,$h=206,Kh=207,Jh=208,Qh=209,tu=210,eu=0,nu=1,iu=2,bo=3,su=4,ru=5,ou=6,au=7,Tc=0,lu=1,cu=2,Nn=0,hu=1,uu=2,du=3,fu=4,pu=5,Ac=300,Ii=301,Ni=302,wo=303,So=304,fr=306,Eo=1e3,Ge=1001,To=1002,we=1003,el=1004;var qr=1005;var Be=1006,mu=1007;var es=1008;var Dn=1009,gu=1010,vu=1011,ra=1012,Rc=1013,Cn=1014,Pn=1015,ns=1016,Cc=1017,Pc=1018,jn=1020,yu=1021,qe=1023,_u=1024,xu=1025,Zn=1026,Di=1027,Mu=1028,Lc=1029,bu=1030,Ic=1031,Nc=1033,Xr=33776,Yr=33777,jr=33778,Zr=33779,nl=35840,il=35841,sl=35842,rl=35843,wu=36196,ol=37492,al=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,vl=37817,yl=37818,_l=37819,xl=37820,Ml=37821,$r=36492,bl=36494,wl=36495,Su=36283,Sl=36284,El=36285,Tl=36286;var Ws=2300,Gs=2301,Kr=2302,Al=2400,Rl=2401,Cl=2402;var Dc=3e3,$n=3001,Eu=3200,Tu=3201,Au=0,Ru=1,ze="",pe="srgb",pn="srgb-linear",oa="display-p3",pr="display-p3-linear",qs="linear",$t="srgb",Xs="rec709",Ys="p3";var Jr=7680;var Cu=519,Pu=512,Lu=513,Iu=514,Nu=515,Du=516,Uu=517,Fu=518,Ou=519,Pl=35044;var Ll="300 es",Ao=1035,fn=2e3,js=2001,Je=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=1234567,Ci=Math.PI/180,is=180/Math.PI;function Bi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[r&255]+ge[r>>8&255]+ge[r>>16&255]+ge[r>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function ye(r,t,e){return Math.max(t,Math.min(e,r))}function aa(r,t){return(r%t+t)%t}function Bu(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function zu(r,t,e){return r!==t?(e-r)/(t-r):0}function Ji(r,t,e){return(1-e)*r+e*t}function ku(r,t,e,n){return Ji(r,t,1-Math.exp(-e*n))}function Vu(r,t=1){return t-Math.abs(aa(r,t*2)-t)}function Hu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Wu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Gu(r,t){return r+Math.floor(Math.random()*(t-r+1))}function qu(r,t){return r+Math.random()*(t-r)}function Xu(r){return r*(.5-Math.random())}function Yu(r){r!==void 0&&(Il=r);let t=Il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ju(r){return r*Ci}function Zu(r){return r*is}function Ro(r){return(r&r-1)===0&&r!==0}function $u(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Zs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ku(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*d,c*u,a*l);break;case"YZY":r.set(c*u,a*h,c*d,a*l);break;case"ZXZ":r.set(c*d,c*u,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Me(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Uc={DEG2RAD:Ci,RAD2DEG:is,generateUUID:Bi,clamp:ye,euclideanModulo:aa,mapLinear:Bu,inverseLerp:zu,lerp:Ji,damp:ku,pingpong:Vu,smoothstep:Hu,smootherstep:Wu,randInt:Gu,randFloat:qu,randFloatSpread:Xu,seededRandom:Yu,degToRad:ju,radToDeg:Zu,isPowerOfTwo:Ro,ceilPowerOfTwo:$u,floorPowerOfTwo:Zs,setQuaternionFromProperEuler:Ku,normalize:Me,denormalize:Ti},Ot=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class r{constructor(t,e,n,i,s,o,a,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],x=i[7],M=i[2],T=i[5],E=i[8];return s[0]=o*v+a*y+c*M,s[3]=o*m+a*_+c*T,s[6]=o*p+a*x+c*E,s[1]=l*v+h*y+d*M,s[4]=l*m+h*_+d*T,s[7]=l*p+h*x+d*E,s[2]=u*v+f*y+g*M,s[5]=u*m+f*_+g*T,s[8]=u*p+f*x+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,f=l*s-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qr=new kt;function Fc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ju(){let r=$s("canvas");return r.style.display="block",r}var Nl={};function Qi(r){r in Nl||(Nl[r]=!0,console.warn(r))}var Dl=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ul=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[pn]:{transfer:qs,primaries:Xs,toReference:r=>r,fromReference:r=>r},[pe]:{transfer:$t,primaries:Xs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pr]:{transfer:qs,primaries:Ys,toReference:r=>r.applyMatrix3(Ul),fromReference:r=>r.applyMatrix3(Dl)},[oa]:{transfer:$t,primaries:Ys,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ul),fromReference:r=>r.applyMatrix3(Dl).convertLinearToSRGB()}},Qu=new Set([pn,pr]),Xt={enabled:!0,_workingColorSpace:pn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let n=gs[t].toReference,i=gs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return gs[r].primaries},getTransfer:function(r){return r===ze?qs:gs[r].transfer}};function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var li,Ks=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=$s("canvas")),li.width=t.width,li.height=t.height;let n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,Js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(eo(i[o].image)):s.push(eo(i[o]))}else s=eo(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function eo(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ks.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ed=0,Xe=class r extends Je{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ge,i=Ge,s=Be,o=es,a=qe,c=Dn,l=r.DEFAULT_ANISOTROPY,h=ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Bi(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$n?pe:ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?$n:Dc}set encoding(t){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$n?pe:ze}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Ac;Xe.DEFAULT_ANISOTROPY=1;var me=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,x=(f+1)/2,M=(p+1)/2,T=(h+u)/4,E=(d+v)/4,U=(g+m)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=E/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=U/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=U/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends Je{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?pe:ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Js(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let M=Math.sqrt(_),T=Math.atan2(M,p*y);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}let x=a*y;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-a){let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-s*i,d=c*i+s*n-o*e,u=-s*e-o*n-a*i;return this.x=l*c+u*-s+h*-a-d*-o,this.y=h*c+u*-o+d*-s-l*-a,this.z=d*c+u*-a+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},no=new z,Fl=new Ye,gn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ci.copy(t.boundingBox),ci.applyMatrix4(t.matrixWorld),this.union(ci);else{let i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)on.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(on)}else i.boundingBox===null&&i.computeBoundingBox(),ci.copy(i.boundingBox),ci.applyMatrix4(t.matrixWorld),this.union(ci)}let n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),vs.subVectors(this.max,qi),hi.subVectors(t.a,qi),ui.subVectors(t.b,qi),di.subVectors(t.c,qi),Sn.subVectors(ui,hi),En.subVectors(di,ui),Vn.subVectors(hi,di);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Vn.z,Vn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Vn.z,0,-Vn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Vn.y,Vn.x,0];return!io(e,hi,ui,di,vs)||(e=[1,0,0,0,1,0,0,0,1],!io(e,hi,ui,di,vs))?!1:(ys.crossVectors(Sn,En),e=[ys.x,ys.y,ys.z],io(e,hi,ui,di,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},rn=[new z,new z,new z,new z,new z,new z,new z,new z],on=new z,ci=new gn,hi=new z,ui=new z,di=new z,Sn=new z,En=new z,Vn=new z,qi=new z,vs=new z,ys=new z,Hn=new z;function io(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Hn.fromArray(r,s);let a=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),c=t.dot(Hn),l=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var nd=new gn,Xi=new z,so=new z,Fn=class{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);let e=Xi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(so)),this.expandByPoint(Xi.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},an=new z,ro=new z,_s=new z,Tn=new z,oo=new z,xs=new z,ao=new z,Ui=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ro.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(ro);let s=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=Tn.dot(this.direction),c=-Tn.dot(_s),l=Tn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ro).addScaledVector(_s,u),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);let n=an.dot(this.direction),i=an.dot(an)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,s){oo.subVectors(e,t),xs.subVectors(n,t),ao.crossVectors(oo,xs);let o=this.direction.dot(ao),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);let c=a*this.direction.dot(xs.crossVectors(Tn,xs));if(c<0)return null;let l=a*this.direction.dot(oo.cross(Tn));if(l<0||c+l>o)return null;let h=-a*Tn.dot(ao);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class r{constructor(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,a,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/fi.setFromMatrixColumn(t,0).length(),s=1/fi.setFromMatrixColumn(t,1).length(),o=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){let i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),An.crossVectors(n,Ie),An.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),An.crossVectors(n,Ie)),An.normalize(),Ms.crossVectors(Ie,An),i[0]=An.x,i[4]=Ms.x,i[8]=Ie.x,i[1]=An.y,i[5]=Ms.y,i[9]=Ie.y,i[2]=An.z,i[6]=Ms.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],M=n[15],T=i[0],E=i[4],U=i[8],b=i[12],A=i[1],B=i[5],Y=i[9],F=i[13],C=i[2],I=i[6],N=i[10],G=i[14],j=i[3],q=i[7],K=i[11],O=i[15];return s[0]=o*T+a*A+c*C+l*j,s[4]=o*E+a*B+c*I+l*q,s[8]=o*U+a*Y+c*N+l*K,s[12]=o*b+a*F+c*G+l*O,s[1]=h*T+d*A+u*C+f*j,s[5]=h*E+d*B+u*I+f*q,s[9]=h*U+d*Y+u*N+f*K,s[13]=h*b+d*F+u*G+f*O,s[2]=g*T+v*A+m*C+p*j,s[6]=g*E+v*B+m*I+p*q,s[10]=g*U+v*Y+m*N+p*K,s[14]=g*b+v*F+m*G+p*O,s[3]=y*T+_*A+x*C+M*j,s[7]=y*E+_*B+x*I+M*q,s[11]=y*U+_*Y+x*N+M*K,s[15]=y*b+_*F+x*G+M*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*f-n*c*f)+v*(+e*c*f-e*l*u+s*o*u-i*o*f+i*l*h-s*c*h)+m*(+e*l*d-e*a*f-s*o*d+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=d*m*l-v*u*l+v*c*f-a*m*f-d*c*p+a*u*p,_=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*v*l-g*d*l+g*a*f-o*v*f-h*a*p+o*d*p,M=g*d*c-h*v*c-g*a*u+o*v*u+h*a*m-o*d*m,T=e*y+n*_+i*x+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=y*E,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*E,t[2]=(a*m*s-v*c*s+v*i*l-n*m*l-a*i*p+n*c*p)*E,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*f-n*c*f)*E,t[4]=_*E,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*E,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*E,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*f+e*c*f)*E,t[8]=x*E,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*E,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*f-e*a*f)*E,t[12]=M*E,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*E,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*E,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,f=s*h,g=s*d,v=o*h,m=o*d,p=a*d,y=c*l,_=c*h,x=c*d,M=n.x,T=n.y,E=n.z;return i[0]=(1-(v+p))*M,i[1]=(f+x)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+_)*E,i[9]=(m-y)*E,i[10]=(1-(u+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=fi.set(i[0],i[1],i[2]).length(),o=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);let l=1/s,h=1/o,d=1/a;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=fn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(a===fn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===js)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=fn){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,f=(n+i)*h,g,v;if(a===fn)g=(o+s)*d,v=-2*d;else if(a===js)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fi=new z,Ve=new re,id=new z(0,0,0),sd=new z(1,1,1),An=new z,Ms=new z,Ie=new z,Ol=new re,Bl=new Ye,tr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tr.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rd=0,zl=new z,pi=new Ye,ln=new re,bs=new z,Yi=new z,od=new z,ad=new Ye,kl=new z(1,0,0),Vl=new z(0,1,0),Hl=new z(0,0,1),ld={type:"added"},cd={type:"removed"},Ce=class r extends Je{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new z,e=new tr,n=new Ye,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new kt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Yi,bs,this.up):ln.lookAt(bs,Yi,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(ln),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ce.DEFAULT_UP=new z(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=new z,cn=new z,lo=new z,hn=new z,mi=new z,gi=new z,Wl=new z,co=new z,ho=new z,uo=new z,ws=!1,Yn=class r{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){He.subVectors(i,e),cn.subVectors(n,e),lo.subVectors(t,e);let o=He.dot(He),a=He.dot(cn),c=He.dot(lo),l=cn.dot(cn),h=cn.dot(lo),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn),hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,n,i,s,o,a,c){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,hn),c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(a,hn.z),c}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),cn.subVectors(t,e),He.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),He.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ws===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ws=!0),r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;mi.subVectors(i,n),gi.subVectors(s,n),co.subVectors(t,n);let c=mi.dot(co),l=gi.dot(co);if(c<=0&&l<=0)return e.copy(n);ho.subVectors(t,i);let h=mi.dot(ho),d=gi.dot(ho);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(mi,o);uo.subVectors(t,s);let f=mi.dot(uo),g=gi.dot(uo);if(g>=0&&f<=g)return e.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(gi,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Wl.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Wl,a);let p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hd=0,Kn=class extends Je{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Ri,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Ec,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function fo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=aa(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fo(o,s,t+1/3),this.g=fo(o,s,t),this.b=fo(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Xt.fromWorkingColorSpace(ve.copy(this),t),Math.round(ye(ve.r*255,0,255))*65536+Math.round(ye(ve.g*255,0,255))*256+Math.round(ye(ve.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ve.copy(this),e);let n=ve.r,i=ve.g,s=ve.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=pe){Xt.fromWorkingColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,i=ve.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ss);let n=Ji(Rn.h,Ss.h,e),i=Ji(Rn.s,Ss.s,e),s=Ji(Rn.l,Ss.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Yt;Yt.NAMES=Oc;var Jn=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var se=new z,Es=new Ot,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pl,this.updateRange={offset:0,count:-1},this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}};var nr=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ud=0,Oe=new re,po=new Ce,vi=new z,Ne=new gn,ji=new gn,de=new z,Qe=class r extends Je{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?ir:nr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Ne.min,ji.min),Ne.expandByPoint(de),de.addVectors(Ne.max,ji.max),Ne.expandByPoint(de)):(Ne.expandByPoint(ji.min),Ne.expandByPoint(ji.max))}Ne.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)de.fromBufferAttribute(a,l),c&&(vi.fromBufferAttribute(t,l),de.add(vi)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new z,h[A]=new z;let d=new z,u=new z,f=new z,g=new Ot,v=new Ot,m=new Ot,p=new z,y=new z;function _(A,B,Y){d.fromArray(i,A*3),u.fromArray(i,B*3),f.fromArray(i,Y*3),g.fromArray(o,A*2),v.fromArray(o,B*2),m.fromArray(o,Y*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);let F=1/(v.x*m.y-m.x*v.y);isFinite(F)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(F),y.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(F),l[A].add(p),l[B].add(p),l[Y].add(p),h[A].add(y),h[B].add(y),h[Y].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,B=x.length;A<B;++A){let Y=x[A],F=Y.start,C=Y.count;for(let I=F,N=F+C;I<N;I+=3)_(n[I+0],n[I+1],n[I+2])}let M=new z,T=new z,E=new z,U=new z;function b(A){E.fromArray(s,A*3),U.copy(E);let B=l[A];M.copy(B),M.sub(E.multiplyScalar(E.dot(B))).normalize(),T.crossVectors(U,B);let F=T.dot(h[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=F}for(let A=0,B=x.length;A<B;++A){let Y=x[A],F=Y.start,C=Y.count;for(let I=F,N=F+C;I<N;I+=3)b(n[I+0]),b(n[I+1]),b(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new z,s=new z,o=new z,a=new z,c=new z,l=new z,h=new z,d=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new De(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=new re,Wn=new Ui,Ts=new Fn,ql=new z,yi=new z,_i=new z,xi=new z,mo=new z,As=new z,Rs=new Ot,Cs=new Ot,Ps=new Ot,Xl=new z,Yl=new z,jl=new z,Ls=new z,Is=new z,Ae=class extends Ce{constructor(t=new Qe,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){As.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],d=s[c];h!==0&&(mo.fromBufferAttribute(d,t),o?As.addScaledVector(mo,h):As.addScaledVector(mo.sub(e),h))}e.add(As)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Wn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ts,ql)===null||Wn.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Gl.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){let T=a.getX(x),E=a.getX(x+1),U=a.getX(x+2);i=Ns(this,p,t,n,l,h,d,T,E,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);i=Ns(this,o,t,n,l,h,d,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,M=_;x<M;x+=3){let T=x,E=x+1,U=x+2;i=Ns(this,p,t,n,l,h,d,T,E,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,_=m+1,x=m+2;i=Ns(this,o,t,n,l,h,d,y,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function dd(r,t,e,n,i,s,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Un,a),c===null)return null;Is.copy(a),Is.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Is);return l<e.near||l>e.far?null:{distance:l,point:Is.clone(),object:r}}function Ns(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,yi),r.getVertexPosition(c,_i),r.getVertexPosition(l,xi);let h=dd(r,t,e,n,yi,_i,xi,Ls);if(h){i&&(Rs.fromBufferAttribute(i,a),Cs.fromBufferAttribute(i,c),Ps.fromBufferAttribute(i,l),h.uv=Yn.getInterpolation(Ls,yi,_i,xi,Rs,Cs,Ps,new Ot)),s&&(Rs.fromBufferAttribute(s,a),Cs.fromBufferAttribute(s,c),Ps.fromBufferAttribute(s,l),h.uv1=Yn.getInterpolation(Ls,yi,_i,xi,Rs,Cs,Ps,new Ot),h.uv2=h.uv1),o&&(Xl.fromBufferAttribute(o,a),Yl.fromBufferAttribute(o,c),jl.fromBufferAttribute(o,l),h.normal=Yn.getInterpolation(Ls,yi,_i,xi,Xl,Yl,jl,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new z,materialIndex:0};Yn.getNormal(yi,_i,xi,d.normal),h.face=d}return h}var Qn=class r extends Qe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2));function g(v,m,p,y,_,x,M,T,E,U,b){let A=x/E,B=M/U,Y=x/2,F=M/2,C=T/2,I=E+1,N=U+1,G=0,j=0,q=new z;for(let K=0;K<N;K++){let O=K*B-F;for(let k=0;k<I;k++){let lt=k*A-Y;q[v]=lt*y,q[m]=O*_,q[p]=C,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(k/E),d.push(1-K/U),G+=1}}for(let K=0;K<U;K++)for(let O=0;O<E;O++){let k=u+O+I*K,lt=u+O+I*(K+1),ut=u+(O+1)+I*(K+1),ft=u+(O+1)+I*K;c.push(k,lt,ft),c.push(lt,ut,ft),j+=6}a.addGroup(f,j,b),f+=j,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fi(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(r){let t={};for(let e=0;e<r.length;e++){let n=Fi(r[e]);for(let i in n)t[i]=n[i]}return t}function fd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Bc(r){return r.getRenderTarget()===null?r.outputColorSpace:Xt.workingColorSpace}var pd={clone:Fi,merge:be},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Se=class extends sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mi=-90,bi=1,Lo=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Se(Mi,bi,t,e);i.layers=this.layers,this.add(i);let s=new Se(Mi,bi,t,e);s.layers=this.layers,this.add(s);let o=new Se(Mi,bi,t,e);o.layers=this.layers,this.add(o);let a=new Se(Mi,bi,t,e);a.layers=this.layers,this.add(a);let c=new Se(Mi,bi,t,e);c.layers=this.layers,this.add(c);let l=new Se(Mi,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rr=class extends Xe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Io=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$n?pe:ze),this.texture=new rr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qn(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:In});s.uniforms.tEquirect.value=e;let o=new Ae(i,s),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Be),new Lo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},go=new z,vd=new z,yd=new kt,We=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=go.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yd.getNormalMatrix(t),i=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new Fn,Ds=new z,or=class{constructor(t=new We,e=new We,n=new We,i=new We,s=new We,o=new We){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-s,u-l,m-f,x-p).normalize(),n[1].setComponents(c+s,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+g,x+y).normalize(),n[3].setComponents(c-o,u-h,m-g,x-y).normalize(),n[4].setComponents(c-a,u-d,m-v,x-_).normalize(),e===fn)n[5].setComponents(c+a,u+d,m+v,x+_).normalize();else if(e===js)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ds.x=i.normal.x>0?t.max.x:t.min.x,Ds.y=i.normal.y>0?t.max.y:t.min.y,Ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _d(r,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let d=l.array,u=l.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){let u=h.array,f=h.updateRange;r.bindBuffer(d,l),f.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}var No=class r extends Qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let _=0;_<l;_++){let x=_*d-s;g.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,x=y+l*(p+1),M=y+1+l*(p+1),T=y+1+l*p;f.push(_,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_f=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:xd,alphahash_pars_fragment:Md,alphamap_fragment:bd,alphamap_pars_fragment:wd,alphatest_fragment:Sd,alphatest_pars_fragment:Ed,aomap_fragment:Td,aomap_pars_fragment:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Ld,bumpmap_pars_fragment:Id,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Vd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Gd,displacementmap_vertex:qd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Yd,colorspace_fragment:jd,colorspace_pars_fragment:Zd,envmap_fragment:$d,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:df,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:of,lightmap_fragment:af,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:vf,lights_physical_pars_fragment:yf,lights_fragment_begin:_f,lights_fragment_maps:xf,lights_fragment_end:Mf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Lf,morphcolor_vertex:If,morphnormal_vertex:Nf,morphtarget_pars_vertex:Df,morphtarget_vertex:Uf,normal_fragment_begin:Ff,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:qf,opaque_fragment:Xf,packing:Yf,premultiplied_alpha_fragment:jf,project_vertex:Zf,dithering_fragment:$f,dithering_pars_fragment:Kf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:vp,background_vert:yp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:wp,depth_vert:Sp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Np,meshlambert_vert:Dp,meshlambert_frag:Up,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Vp,meshphysical_vert:Hp,meshphysical_frag:Wp,meshtoon_vert:Gp,meshtoon_frag:qp,points_vert:Xp,points_frag:Yp,shadow_vert:jp,shadow_frag:Zp,sprite_vert:$p,sprite_frag:Kp},ct={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ke={basic:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:be([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:be([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:be([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:be([ct.points,ct.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:be([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:be([ct.common,ct.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:be([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:be([ct.sprite,ct.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:be([ct.common,ct.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:be([ct.lights,ct.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ke.physical={uniforms:be([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Us={r:0,b:0,g:0};function Jp(r,t,e,n,i,s,o){let a=new Yt(0),c=s===!0?0:1,l,h,d=null,u=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),y=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fr)?(h===void 0&&(h=new Ae(new Qn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Fi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(_.colorSpace)!==$t,(d!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ae(new No(2,2),new vn({name:"BackgroundMaterial",uniforms:Fi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(_.colorSpace)!==$t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Us,Bc(r)),n.buffers.color.setClear(Us.r,Us.g,Us.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function Qp(r,t,e,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null),l=c,h=!1;function d(C,I,N,G,j){let q=!1;if(o){let K=v(G,N,I);l!==K&&(l=K,f(l.object)),q=p(C,G,N,j),q&&y(C,G,N,j)}else{let K=I.wireframe===!0;(l.geometry!==G.id||l.program!==N.id||l.wireframe!==K)&&(l.geometry=G.id,l.program=N.id,l.wireframe=K,q=!0)}j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,U(C,I,N,G),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function v(C,I,N){let G=N.wireframe===!0,j=a[C.id];j===void 0&&(j={},a[C.id]=j);let q=j[I.id];q===void 0&&(q={},j[I.id]=q);let K=q[G];return K===void 0&&(K=m(u()),q[G]=K),K}function m(C){let I=[],N=[],G=[];for(let j=0;j<i;j++)I[j]=0,N[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:G,object:C,attributes:{},index:null}}function p(C,I,N,G){let j=l.attributes,q=I.attributes,K=0,O=N.getAttributes();for(let k in O)if(O[k].location>=0){let ut=j[k],ft=q[k];if(ft===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;K++}return l.attributesNum!==K||l.index!==G}function y(C,I,N,G){let j={},q=I.attributes,K=0,O=N.getAttributes();for(let k in O)if(O[k].location>=0){let ut=q[k];ut===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor));let ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),j[k]=ft,K++}l.attributes=j,l.attributesNum=K,l.index=G}function _(){let C=l.newAttributes;for(let I=0,N=C.length;I<N;I++)C[I]=0}function x(C){M(C,0)}function M(C,I){let N=l.newAttributes,G=l.enabledAttributes,j=l.attributeDivisors;N[C]=1,G[C]===0&&(r.enableVertexAttribArray(C),G[C]=1),j[C]!==I&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,I),j[C]=I)}function T(){let C=l.newAttributes,I=l.enabledAttributes;for(let N=0,G=I.length;N<G;N++)I[N]!==C[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function E(C,I,N,G,j,q,K){K===!0?r.vertexAttribIPointer(C,I,N,j,q):r.vertexAttribPointer(C,I,N,G,j,q)}function U(C,I,N,G){if(n.isWebGL2===!1&&(C.isInstancedMesh||G.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let j=G.attributes,q=N.getAttributes(),K=I.defaultAttributeValues;for(let O in q){let k=q[O];if(k.location>=0){let lt=j[O];if(lt===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),lt!==void 0){let ut=lt.normalized,ft=lt.itemSize,xt=e.get(lt);if(xt===void 0)continue;let Tt=xt.buffer,bt=xt.type,Wt=xt.bytesPerElement,fe=n.isWebGL2===!0&&(bt===r.INT||bt===r.UNSIGNED_INT||lt.gpuType===Rc);if(lt.isInterleavedBufferAttribute){let Dt=lt.data,H=Dt.stride,oe=lt.offset;if(Dt.isInstancedInterleavedBuffer){for(let wt=0;wt<k.locationSize;wt++)M(k.location+wt,Dt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let wt=0;wt<k.locationSize;wt++)x(k.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let wt=0;wt<k.locationSize;wt++)E(k.location+wt,ft/k.locationSize,bt,ut,H*Wt,(oe+ft/k.locationSize*wt)*Wt,fe)}else{if(lt.isInstancedBufferAttribute){for(let Dt=0;Dt<k.locationSize;Dt++)M(k.location+Dt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<k.locationSize;Dt++)x(k.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let Dt=0;Dt<k.locationSize;Dt++)E(k.location+Dt,ft/k.locationSize,bt,ut,ft*Wt,ft/k.locationSize*Dt*Wt,fe)}}else if(K!==void 0){let ut=K[O];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(k.location,ut);break;case 3:r.vertexAttrib3fv(k.location,ut);break;case 4:r.vertexAttrib4fv(k.location,ut);break;default:r.vertexAttrib1fv(k.location,ut)}}}}T()}function b(){Y();for(let C in a){let I=a[C];for(let N in I){let G=I[N];for(let j in G)g(G[j].object),delete G[j];delete I[N]}delete a[C]}}function A(C){if(a[C.id]===void 0)return;let I=a[C.id];for(let N in I){let G=I[N];for(let j in G)g(G[j].object),delete G[j];delete I[N]}delete a[C.id]}function B(C){for(let I in a){let N=a[I];if(N[C.id]===void 0)continue;let G=N[C.id];for(let j in G)g(G[j].object),delete G[j];delete N[C.id]}}function Y(){F(),h=!0,l!==c&&(l=c,f(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:x,disableUnusedAttributes:T}}function tm(r,t,e,n){let i=n.isWebGL2,s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,l,h,d),e.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function em(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,x=o||t.has("OES_texture_float"),M=_&&x,T=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:T}}function nm(r){let t=this,e=null,n=0,i=!1,s=!1,o=new We,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let y=s?0:n,_=y*4,x=p.clippingState||null;c.value=x,x=h(g,u,_,f);for(let M=0;M!==_;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function im(r){let t=new WeakMap;function e(o,a){return a===wo?o.mapping=Ii:a===So&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===wo||a===So)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Io(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Do=class extends sr{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ai=4,Zl=[.125,.215,.35,.446,.526,.582],Xn=20,vo=new Do,$l=new Yt,yo=null,qn=(1+Math.sqrt(5))/2,wi=1/qn,Kl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,qn,wi),new z(0,qn,-wi),new z(wi,0,qn),new z(-wi,0,qn),new z(qn,wi,0),new z(-qn,wi,0)],ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yo=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo),t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:ns,format:qe,colorSpace:pn,depthBuffer:!1},i=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=rm(s,t,e)}return i}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,n,i){let a=new Se(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor($l),h.toneMapping=Nn,h.autoClear=!1;let f=new Jn({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Ae(new Qn,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy($l),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Fs(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ii||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Kl[(i-1)%Kl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ae(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Xn;m>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);let p=[],y=0;for(let E=0;E<Xn;++E){let U=E/v,b=Math.exp(-U*U/2);p.push(b),E===0?y+=b:E<m&&(y+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let x=this._sizeLods[i],M=3*x*(i>_-Ai?i-_+Ai:0),T=4*(this._cubeSize-x);Fs(e,M,T,3*x,2*x),c.setRenderTarget(e),c.render(d,vo)}};function sm(r){let t=[],e=[],n=[],i=r,s=r-Ai+1+Zl.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Ai?c=Zl[o-r+Ai-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,U=T>2?0:-1,b=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];y.set(b,v*g*T),_.set(u,m*g*T);let A=[T,T,T,T,T,T];x.set(A,p*g*T)}let M=new Qe;M.setAttribute("position",new De(y,v)),M.setAttribute("uv",new De(_,m)),M.setAttribute("faceIndex",new De(x,p)),t.push(M),i>Ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(r,t,e){let n=new mn(r,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rm(r,t,e){let n=new Float32Array(Xn),i=new z(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ql(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function tc(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function om(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wo||c===So,h=c===Ii||c===Ni;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new ar(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new ar(r));let u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function am(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){let M=y[_+0],T=y[_+1],E=y[_+2];u.push(M,T,T,E,E,M)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let M=_+0,T=_+1,E=_+2;u.push(M,T,T,E,E,M)}}else return;let m=new(Fc(u)?ir:nr)(u,1);m.version=v;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function cm(r,t,e,n){let i=n.isWebGL2,s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function h(u,f){r.drawElements(s,f,a,u*c),e.update(f,s,1)}function d(u,f,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,f,a,u*c,g),e.update(f,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function hm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function um(r,t){return r[0]-t[0]}function dm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function fm(r,t,e){let n={},i=new Float32Array(8),s=new WeakMap,o=new me,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let u=l.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,v=s.get(h);if(v===void 0||v.count!==g){let C=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],U=0;y===!0&&(U=1),_===!0&&(U=2),x===!0&&(U=3);let b=h.attributes.position.count*U,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let B=new Float32Array(b*A*4*g),Y=new Qs(B,b,A,g);Y.type=Pn,Y.needsUpdate=!0;let F=U*4;for(let I=0;I<g;I++){let N=M[I],G=T[I],j=E[I],q=b*A*4*I;for(let K=0;K<N.count;K++){let O=K*F;y===!0&&(o.fromBufferAttribute(N,K),B[q+O+0]=o.x,B[q+O+1]=o.y,B[q+O+2]=o.z,B[q+O+3]=0),_===!0&&(o.fromBufferAttribute(G,K),B[q+O+4]=o.x,B[q+O+5]=o.y,B[q+O+6]=o.z,B[q+O+7]=0),x===!0&&(o.fromBufferAttribute(j,K),B[q+O+8]=o.x,B[q+O+9]=o.y,B[q+O+10]=o.z,B[q+O+11]=j.itemSize===4?o.w:1)}}v={count:g,texture:Y,size:new Ot(b,A)},s.set(h,v),h.addEventListener("dispose",C)}let m=0;for(let y=0;y<u.length;y++)m+=u[y];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let f=u===void 0?0:u.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let x=g[_];x[0]=_,x[1]=u[_]}g.sort(dm);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(um);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let x=a[_],M=x[0],T=x[1];M!==Number.MAX_SAFE_INTEGER&&T?(v&&h.getAttribute("morphTarget"+_)!==v[M]&&h.setAttribute("morphTarget"+_,v[M]),m&&h.getAttribute("morphNormal"+_)!==m[M]&&h.setAttribute("morphNormal"+_,m[M]),i[_]=T,p+=T):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let y=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function pm(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var kc=new Xe,Vc=new Qs,Hc=new Po,Wc=new rr,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function zi(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=ec[i];if(s===void 0&&(s=new Float32Array(i),ec[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ce(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function mr(r,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function mm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2fv(this.addr,t),ce(e,t)}}function vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;r.uniform3fv(this.addr,t),ce(e,t)}}function ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4fv(this.addr,t),ce(e,t)}}function _m(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;rc.set(n),r.uniformMatrix2fv(this.addr,!1,rc),ce(e,n)}}function xm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;sc.set(n),r.uniformMatrix3fv(this.addr,!1,sc),ce(e,n)}}function Mm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ic.set(n),r.uniformMatrix4fv(this.addr,!1,ic),ce(e,n)}}function bm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2iv(this.addr,t),ce(e,t)}}function Sm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;r.uniform3iv(this.addr,t),ce(e,t)}}function Em(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4iv(this.addr,t),ce(e,t)}}function Tm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Am(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;r.uniform2uiv(this.addr,t),ce(e,t)}}function Rm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;r.uniform3uiv(this.addr,t),ce(e,t)}}function Cm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;r.uniform4uiv(this.addr,t),ce(e,t)}}function Pm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||kc,i)}function Lm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hc,i)}function Im(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wc,i)}function Nm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Dm(r){switch(r){case 5126:return mm;case 35664:return gm;case 35665:return vm;case 35666:return ym;case 35674:return _m;case 35675:return xm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Nm}}function Um(r,t){r.uniform1fv(this.addr,t)}function Fm(r,t){let e=zi(t,this.size,2);r.uniform2fv(this.addr,e)}function Om(r,t){let e=zi(t,this.size,3);r.uniform3fv(this.addr,e)}function Bm(r,t){let e=zi(t,this.size,4);r.uniform4fv(this.addr,e)}function zm(r,t){let e=zi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function km(r,t){let e=zi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Vm(r,t){let e=zi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Hm(r,t){r.uniform1iv(this.addr,t)}function Wm(r,t){r.uniform2iv(this.addr,t)}function Gm(r,t){r.uniform3iv(this.addr,t)}function qm(r,t){r.uniform4iv(this.addr,t)}function Xm(r,t){r.uniform1uiv(this.addr,t)}function Ym(r,t){r.uniform2uiv(this.addr,t)}function jm(r,t){r.uniform3uiv(this.addr,t)}function Zm(r,t){r.uniform4uiv(this.addr,t)}function $m(r,t,e){let n=this.cache,i=t.length,s=mr(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kc,s[o])}function Km(r,t,e){let n=this.cache,i=t.length,s=mr(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hc,s[o])}function Jm(r,t,e){let n=this.cache,i=t.length,s=mr(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wc,s[o])}function Qm(r,t,e){let n=this.cache,i=t.length,s=mr(e,i);le(n,s)||(r.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Vc,s[o])}function tg(r){switch(r){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return km;case 35676:return Vm;case 5124:case 35670:return Hm;case 35667:case 35671:return Wm;case 35668:case 35672:return Gm;case 35669:case 35673:return qm;case 5125:return Xm;case 36294:return Ym;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}var Uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Dm(e.type)}},Fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=tg(e.type)}},Oo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},_o=/(\w+)(\])?(\[|\.)?/g;function oc(r,t){r.seq.push(t),r.map[t.id]=t}function eg(r,t,e){let n=r.name,i=n.length;for(_o.lastIndex=0;;){let s=_o.exec(n),o=_o.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){oc(e,l===void 0?new Uo(a,r,t):new Fo(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Oo(a),oc(e,d)),e=d}}}var Li=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);eg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ac(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ng=0;function ig(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function sg(r){let t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(r),n;switch(t===e?n="":t===Ys&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),r){case pn:case pr:return[n,"LinearTransferOETF"];case pe:case oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function lc(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ig(r.getShaderSource(t),o)}else return i}function rg(r,t){let e=sg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function og(r,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case du:e="OptimizedCineon";break;case fu:e="ACESFilmic";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ag(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function lg(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ki(r){return r!==""}function cc(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(r){return r.replace(hg,dg)}var ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dg(r,t){let e=Ft[t];if(e===void 0){let n=ug.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(r){return r.replace(fg,pg)}function pg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ii:case Ni:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function yg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tc:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function _g(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=mg(e),l=gg(e),h=vg(e),d=yg(e),u=_g(e),f=e.isWebGL2?"":ag(e),g=lg(s),v=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ki).join(`
`),p.length>0&&(p+=`
`)):(m=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),p=[f,dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Nn?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,rg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),o=Bo(o),o=cc(o,e),o=hc(o,e),a=Bo(a),a=cc(a,e),a=hc(a,e),o=uc(o),a=uc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+o,x=y+p+a,M=ac(i,i.VERTEX_SHADER,_),T=ac(i,i.FRAGMENT_SHADER,x);if(i.attachShader(v,M),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){let b=i.getProgramInfoLog(v).trim(),A=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(T).trim(),Y=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,M,T);else{let C=lc(i,M,"vertex"),I=lc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+C+`
`+I)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(A===""||B==="")&&(F=!1);F&&(this.diagnostics={runnable:Y,programLog:b,vertexShader:{log:A,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(M),i.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Li(i,v)),E};let U;return this.getAttributes=function(){return U===void 0&&(U=cg(i,v)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}var Mg=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ko(t),e.set(t,n)),n}},ko=class{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}};function bg(r,t,e,n,i,s,o){let a=new er,c=new zo,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,A,B,Y,F){let C=Y.fog,I=F.geometry,N=b.isMeshStandardMaterial?Y.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),j=G&&G.mapping===fr?G.image.height:null,q=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,O=K!==void 0?K.length:0,k=0;I.morphAttributes.position!==void 0&&(k=1),I.morphAttributes.normal!==void 0&&(k=2),I.morphAttributes.color!==void 0&&(k=3);let lt,ut,ft,xt;if(q){let Zt=Ke[q];lt=Zt.vertexShader,ut=Zt.fragmentShader}else lt=b.vertexShader,ut=b.fragmentShader,c.update(b),ft=c.getVertexShaderID(b),xt=c.getFragmentShaderID(b);let Tt=r.getRenderTarget(),bt=F.isInstancedMesh===!0,Wt=!!b.map,fe=!!b.matcap,Dt=!!G,H=!!b.aoMap,oe=!!b.lightMap,wt=!!b.bumpMap,It=!!b.normalMap,Ct=!!b.displacementMap,jt=!!b.emissiveMap,zt=!!b.metalnessMap,Nt=!!b.roughnessMap,Gt=b.anisotropy>0,ae=b.clearcoat>0,ue=b.iridescence>0,P=b.sheen>0,S=b.transmission>0,X=Gt&&!!b.anisotropyMap,et=ae&&!!b.clearcoatMap,tt=ae&&!!b.clearcoatNormalMap,nt=ae&&!!b.clearcoatRoughnessMap,yt=ue&&!!b.iridescenceMap,rt=ue&&!!b.iridescenceThicknessMap,dt=P&&!!b.sheenColorMap,D=P&&!!b.sheenRoughnessMap,it=!!b.specularMap,J=!!b.specularColorMap,Et=!!b.specularIntensityMap,_t=S&&!!b.transmissionMap,Mt=S&&!!b.thicknessMap,vt=!!b.gradientMap,L=!!b.alphaMap,ot=b.alphaTest>0,st=!!b.alphaHash,ht=!!b.extensions,at=!!I.attributes.uv1,Q=!!I.attributes.uv2,gt=!!I.attributes.uv3,At=Nn;return b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(At=r.toneMapping),{isWebGL2:h,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:lt,fragmentShader:ut,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:bt,instancingColor:bt&&F.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:pn,map:Wt,matcap:fe,envMap:Dt,envMapMode:Dt&&G.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:oe,bumpMap:wt,normalMap:It,displacementMap:u&&Ct,emissiveMap:jt,normalMapObjectSpace:It&&b.normalMapType===Ru,normalMapTangentSpace:It&&b.normalMapType===Au,metalnessMap:zt,roughnessMap:Nt,anisotropy:Gt,anisotropyMap:X,clearcoat:ae,clearcoatMap:et,clearcoatNormalMap:tt,clearcoatRoughnessMap:nt,iridescence:ue,iridescenceMap:yt,iridescenceThicknessMap:rt,sheen:P,sheenColorMap:dt,sheenRoughnessMap:D,specularMap:it,specularColorMap:J,specularIntensityMap:Et,transmission:S,transmissionMap:_t,thicknessMap:Mt,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Ri,alphaMap:L,alphaTest:ot,alphaHash:st,combine:b.combine,mapUv:Wt&&v(b.map.channel),aoMapUv:H&&v(b.aoMap.channel),lightMapUv:oe&&v(b.lightMap.channel),bumpMapUv:wt&&v(b.bumpMap.channel),normalMapUv:It&&v(b.normalMap.channel),displacementMapUv:Ct&&v(b.displacementMap.channel),emissiveMapUv:jt&&v(b.emissiveMap.channel),metalnessMapUv:zt&&v(b.metalnessMap.channel),roughnessMapUv:Nt&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:et&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:D&&v(b.sheenRoughnessMap.channel),specularMapUv:it&&v(b.specularMap.channel),specularColorMapUv:J&&v(b.specularColorMap.channel),specularIntensityMapUv:Et&&v(b.specularIntensityMap.channel),transmissionMapUv:_t&&v(b.transmissionMap.channel),thicknessMapUv:Mt&&v(b.thicknessMap.channel),alphaMapUv:L&&v(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(It||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:at,vertexUv2s:Q,vertexUv3s:gt,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Wt||L),fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:k,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Re,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ht&&b.extensions.derivatives===!0,extensionFragDepth:ht&&b.extensions.fragDepth===!0,extensionDrawBuffers:ht&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let B in b.defines)A.push(B),A.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(y(A,b),_(A,b),A.push(r.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function y(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function _(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function x(b){let A=g[b.type],B;if(A){let Y=Ke[A];B=pd.clone(Y.uniforms)}else B=b.uniforms;return B}function M(b,A){let B;for(let Y=0,F=l.length;Y<F;Y++){let C=l[Y];if(C.cacheKey===A){B=C,++B.usedTimes;break}}return B===void 0&&(B=new xg(r,A,b,s),l.push(B)),B}function T(b){if(--b.usedTimes===0){let A=l.indexOf(b);l[A]=l[l.length-1],l.pop(),b.destroy()}}function E(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:U}}function wg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Sg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pc(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,v,m){let p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Sg),n.length>1&&n.sort(u||fc),i.length>1&&i.sort(u||fc)}function h(){for(let d=t,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Eg(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new pc,r.set(n,[o])):i>=s.length?(o=new pc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Tg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Yt};break;case"SpotLight":e={position:new z,direction:new z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Ag(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Rg=0;function Cg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Pg(r,t){let e=new Tg,n=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new z);let s=new z,o=new re,a=new re;function c(h,d){let u=0,f=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,x=0,M=0,T=0,E=0,U=0,b=0;h.sort(Cg);let A=d===!0?Math.PI:1;for(let Y=0,F=h.length;Y<F;Y++){let C=h[Y],I=C.color,N=C.intensity,G=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*N*A,f+=I.g*N*A,g+=I.b*N*A;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],N);b++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){let K=C.shadow,O=n.get(C);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.directionalShadow[v]=O,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=C.shadow.matrix,x++}i.directional[v]=q,v++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(I).multiplyScalar(N*A),q.distance=G,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[p]=q;let K=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,K.updateMatrices(C),C.castShadow&&U++),i.spotLightMatrix[p]=K.matrix,C.castShadow){let O=n.get(C);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.spotShadow[p]=O,i.spotShadowMap[p]=j,T++}p++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(I).multiplyScalar(N),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[y]=q,y++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*A),q.distance=C.distance,q.decay=C.decay,C.castShadow){let K=C.shadow,O=n.get(C);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=q,m++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(N*A),q.groundColor.copy(C.groundColor).multiplyScalar(N*A),i.hemi[_]=q,_++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;let B=i.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==x||B.numPointShadows!==M||B.numSpotShadows!==T||B.numSpotMaps!==E||B.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=b,B.directionalLength=v,B.pointLength=m,B.spotLength=p,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=x,B.numPointShadows=M,B.numSpotShadows=T,B.numSpotMaps=E,B.numLightProbes=b,i.version=Rg++)}function l(h,d){let u=0,f=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let x=h[y];if(x.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=i.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(x.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function mc(r,t){let e=new Pg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Lg(r,t){let e=new WeakMap;function n(s,o=0){let a=e.get(s),c;return a===void 0?(c=new mc(r,t),e.set(s,[c])):o>=a.length?(c=new mc(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Vo=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ho=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dg(r,t,e){let n=new or,i=new Ot,s=new Ot,o=new me,a=new Vo({depthPacking:Tu}),c=new Ho,l={},h=e.maxTextureSize,d={[Un]:Re,[Re]:Un,[dn]:dn},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Ig,fragmentShader:Ng}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let p=this.type;this.render=function(M,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let U=r.getRenderTarget(),b=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),B=r.state;B.setBlending(In),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=p!==un&&this.type===un,F=p===un&&this.type!==un;for(let C=0,I=M.length;C<I;C++){let N=M[C],G=N.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let j=G.getFrameExtents();if(i.multiply(j),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||Y===!0||F===!0){let K=this.type!==un?{minFilter:we,magFilter:we}:{};G.map!==null&&G.map.dispose(),G.map=new mn(i.x,i.y,K),G.map.texture.name=N.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let q=G.getViewportCount();for(let K=0;K<q;K++){let O=G.getViewport(K);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),B.viewport(o),G.updateMatrices(N,K),n=G.getFrustum(),x(T,E,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===un&&y(G,E),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(U,b,A)};function y(M,T){let E=t.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new mn(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,E,u,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,E,f,v,null)}function _(M,T,E,U){let b=null,A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)b=A;else if(b=E.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=b.uuid,Y=T.uuid,F=l[B];F===void 0&&(F={},l[B]=F);let C=F[Y];C===void 0&&(C=b.clone(),F[Y]=C),b=C}if(b.visible=T.visible,b.wireframe=T.wireframe,U===un?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=r.properties.get(b);B.light=E}return b}function x(M,T,E,U,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===un)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);let Y=t.update(M),F=M.material;if(Array.isArray(F)){let C=Y.groups;for(let I=0,N=C.length;I<N;I++){let G=C[I],j=F[G.materialIndex];if(j&&j.visible){let q=_(M,j,U,b);r.renderBufferDirect(E,null,Y,q,M,G)}}}else if(F.visible){let C=_(M,F,U,b);r.renderBufferDirect(E,null,Y,C,M,null)}}let B=M.children;for(let Y=0,F=B.length;Y<F;Y++)x(B[Y],T,E,U,b)}}function Ug(r,t,e){let n=e.isWebGL2;function i(){let L=!1,ot=new me,st=null,ht=new me(0,0,0,0);return{setMask:function(at){st!==at&&!L&&(r.colorMask(at,at,at,at),st=at)},setLocked:function(at){L=at},setClear:function(at,Q,gt,At,ee){ee===!0&&(at*=At,Q*=At,gt*=At),ot.set(at,Q,gt,At),ht.equals(ot)===!1&&(r.clearColor(at,Q,gt,At),ht.copy(ot))},reset:function(){L=!1,st=null,ht.set(-1,0,0,0)}}}function s(){let L=!1,ot=null,st=null,ht=null;return{setTest:function(at){at?Tt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(at){ot!==at&&!L&&(r.depthMask(at),ot=at)},setFunc:function(at){if(st!==at){switch(at){case eu:r.depthFunc(r.NEVER);break;case nu:r.depthFunc(r.ALWAYS);break;case iu:r.depthFunc(r.LESS);break;case bo:r.depthFunc(r.LEQUAL);break;case su:r.depthFunc(r.EQUAL);break;case ru:r.depthFunc(r.GEQUAL);break;case ou:r.depthFunc(r.GREATER);break;case au:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}st=at}},setLocked:function(at){L=at},setClear:function(at){ht!==at&&(r.clearDepth(at),ht=at)},reset:function(){L=!1,ot=null,st=null,ht=null}}}function o(){let L=!1,ot=null,st=null,ht=null,at=null,Q=null,gt=null,At=null,ee=null;return{setTest:function(Zt){L||(Zt?Tt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!L&&(r.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,$e,_e){(st!==Zt||ht!==$e||at!==_e)&&(r.stencilFunc(Zt,$e,_e),st=Zt,ht=$e,at=_e)},setOp:function(Zt,$e,_e){(Q!==Zt||gt!==$e||At!==_e)&&(r.stencilOp(Zt,$e,_e),Q=Zt,gt=$e,At=_e)},setLocked:function(Zt){L=Zt},setClear:function(Zt){ee!==Zt&&(r.clearStencil(Zt),ee=Zt)},reset:function(){L=!1,ot=null,st=null,ht=null,at=null,Q=null,gt=null,At=null,ee=null}}}let a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap,u={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,M=null,T=null,E=null,U=null,b=!1,A=null,B=null,Y=null,F=null,C=null,I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,G=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=G>=2);let q=null,K={},O=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),lt=new me().fromArray(O),ut=new me().fromArray(k);function ft(L,ot,st,ht){let at=new Uint8Array(4),Q=r.createTexture();r.bindTexture(L,Q),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let gt=0;gt<st;gt++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage2D(ot+gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at);return Q}let xt={};xt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Tt(r.DEPTH_TEST),c.setFunc(bo),Ct(!1),jt(Za),Tt(r.CULL_FACE),wt(In);function Tt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function bt(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Wt(L,ot){return f[L]!==ot?(r.bindFramebuffer(L,ot),f[L]=ot,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ot),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function fe(L,ot){let st=v,ht=!1;if(L)if(st=g.get(ot),st===void 0&&(st=[],g.set(ot,st)),L.isWebGLMultipleRenderTargets){let at=L.texture;if(st.length!==at.length||st[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,gt=at.length;Q<gt;Q++)st[Q]=r.COLOR_ATTACHMENT0+Q;st.length=at.length,ht=!0}}else st[0]!==r.COLOR_ATTACHMENT0&&(st[0]=r.COLOR_ATTACHMENT0,ht=!0);else st[0]!==r.BACK&&(st[0]=r.BACK,ht=!0);ht&&(e.isWebGL2?r.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function Dt(L){return m!==L?(r.useProgram(L),m=L,!0):!1}let H={[Ei]:r.FUNC_ADD,[Gh]:r.FUNC_SUBTRACT,[qh]:r.FUNC_REVERSE_SUBTRACT};if(n)H[Qa]=r.MIN,H[tl]=r.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(H[Qa]=L.MIN_EXT,H[tl]=L.MAX_EXT)}let oe={[Xh]:r.ZERO,[Yh]:r.ONE,[jh]:r.SRC_COLOR,[Sc]:r.SRC_ALPHA,[tu]:r.SRC_ALPHA_SATURATE,[Jh]:r.DST_COLOR,[$h]:r.DST_ALPHA,[Zh]:r.ONE_MINUS_SRC_COLOR,[Ec]:r.ONE_MINUS_SRC_ALPHA,[Qh]:r.ONE_MINUS_DST_COLOR,[Kh]:r.ONE_MINUS_DST_ALPHA};function wt(L,ot,st,ht,at,Q,gt,At){if(L===In){p===!0&&(bt(r.BLEND),p=!1);return}if(p===!1&&(Tt(r.BLEND),p=!0),L!==Wh){if(L!==y||At!==b){if((_!==Ei||T!==Ei)&&(r.blendEquation(r.FUNC_ADD),_=Ei,T=Ei),At)switch(L){case Ri:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFunc(r.ONE,r.ONE);break;case Ka:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ja:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $a:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ka:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ja:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,M=null,E=null,U=null,y=L,b=At}return}at=at||ot,Q=Q||st,gt=gt||ht,(ot!==_||at!==T)&&(r.blendEquationSeparate(H[ot],H[at]),_=ot,T=at),(st!==x||ht!==M||Q!==E||gt!==U)&&(r.blendFuncSeparate(oe[st],oe[ht],oe[Q],oe[gt]),x=st,M=ht,E=Q,U=gt),y=L,b=!1}function It(L,ot){L.side===dn?bt(r.CULL_FACE):Tt(r.CULL_FACE);let st=L.side===Re;ot&&(st=!st),Ct(st),L.blending===Ri&&L.transparent===!1?wt(In):wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ht=L.stencilWrite;l.setTest(ht),ht&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){A!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),A=L)}function jt(L){L!==kh?(Tt(r.CULL_FACE),L!==B&&(L===Za?r.cullFace(r.BACK):L===Vh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),B=L}function zt(L){L!==Y&&(N&&r.lineWidth(L),Y=L)}function Nt(L,ot,st){L?(Tt(r.POLYGON_OFFSET_FILL),(F!==ot||C!==st)&&(r.polygonOffset(ot,st),F=ot,C=st)):bt(r.POLYGON_OFFSET_FILL)}function Gt(L){L?Tt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function ae(L){L===void 0&&(L=r.TEXTURE0+I-1),q!==L&&(r.activeTexture(L),q=L)}function ue(L,ot,st){st===void 0&&(q===null?st=r.TEXTURE0+I-1:st=q);let ht=K[st];ht===void 0&&(ht={type:void 0,texture:void 0},K[st]=ht),(ht.type!==L||ht.texture!==ot)&&(q!==st&&(r.activeTexture(st),q=st),r.bindTexture(L,ot||xt[L]),ht.type=L,ht.texture=ot)}function P(){let L=K[q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(L){lt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),lt.copy(L))}function Et(L){ut.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ut.copy(L))}function _t(L,ot){let st=d.get(ot);st===void 0&&(st=new WeakMap,d.set(ot,st));let ht=st.get(L);ht===void 0&&(ht=r.getUniformBlockIndex(ot,L.name),st.set(L,ht))}function Mt(L,ot){let ht=d.get(ot).get(L);h.get(ot)!==ht&&(r.uniformBlockBinding(ot,ht,L.__bindingPointIndex),h.set(ot,ht))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},q=null,K={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,x=null,M=null,T=null,E=null,U=null,b=!1,A=null,B=null,Y=null,F=null,C=null,lt.set(0,0,r.canvas.width,r.canvas.height),ut.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Tt,disable:bt,bindFramebuffer:Wt,drawBuffers:fe,useProgram:Dt,setBlending:wt,setMaterial:It,setFlipSided:Ct,setCullFace:jt,setLineWidth:zt,setPolygonOffset:Nt,setScissorTest:Gt,activeTexture:ae,bindTexture:ue,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:D,texImage3D:it,updateUBOMapping:_t,uniformBlockBinding:Mt,texStorage2D:rt,texStorage3D:dt,texSubImage2D:et,texSubImage3D:tt,compressedTexSubImage2D:nt,compressedTexSubImage3D:yt,scissor:J,viewport:Et,reset:vt}}function Fg(r,t,e,n,i,s,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,v,m=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return p?new OffscreenCanvas(P,S):$s("canvas")}function _(P,S,X,et){let tt=1;if((P.width>et||P.height>et)&&(tt=et/Math.max(P.width,P.height)),tt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){let nt=S?Zs:Math.floor,yt=nt(tt*P.width),rt=nt(tt*P.height);v===void 0&&(v=y(yt,rt));let dt=X?y(yt,rt):v;return dt.width=yt,dt.height=rt,dt.getContext("2d").drawImage(P,0,0,yt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+yt+"x"+rt+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Ro(P.width)&&Ro(P.height)}function M(P){return a?!1:P.wrapS!==Ge||P.wrapT!==Ge||P.minFilter!==we&&P.minFilter!==Be}function T(P,S){return P.generateMipmaps&&S&&P.minFilter!==we&&P.minFilter!==Be}function E(P){r.generateMipmap(P)}function U(P,S,X,et,tt=!1){if(a===!1)return S;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let nt=S;if(S===r.RED&&(X===r.FLOAT&&(nt=r.R32F),X===r.HALF_FLOAT&&(nt=r.R16F),X===r.UNSIGNED_BYTE&&(nt=r.R8)),S===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(nt=r.R8UI),X===r.UNSIGNED_SHORT&&(nt=r.R16UI),X===r.UNSIGNED_INT&&(nt=r.R32UI),X===r.BYTE&&(nt=r.R8I),X===r.SHORT&&(nt=r.R16I),X===r.INT&&(nt=r.R32I)),S===r.RG&&(X===r.FLOAT&&(nt=r.RG32F),X===r.HALF_FLOAT&&(nt=r.RG16F),X===r.UNSIGNED_BYTE&&(nt=r.RG8)),S===r.RGBA){let yt=tt?qs:Xt.getTransfer(et);X===r.FLOAT&&(nt=r.RGBA32F),X===r.HALF_FLOAT&&(nt=r.RGBA16F),X===r.UNSIGNED_BYTE&&(nt=yt===$t?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(P,S,X){return T(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==we&&P.minFilter!==Be?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){return P===we||P===el||P===qr?r.NEAREST:r.LINEAR}function B(P){let S=P.target;S.removeEventListener("dispose",B),F(S),S.isVideoTexture&&g.delete(S)}function Y(P){let S=P.target;S.removeEventListener("dispose",Y),I(S)}function F(P){let S=n.get(P);if(S.__webglInit===void 0)return;let X=P.source,et=m.get(X);if(et){let tt=et[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(P),Object.keys(et).length===0&&m.delete(X)}n.remove(P)}function C(P){let S=n.get(P);r.deleteTexture(S.__webglTexture);let X=P.source,et=m.get(X);delete et[S.__cacheKey],o.memory.textures--}function I(P){let S=P.texture,X=n.get(P),et=n.get(S);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(X.__webglFramebuffer[tt]))for(let nt=0;nt<X.__webglFramebuffer[tt].length;nt++)r.deleteFramebuffer(X.__webglFramebuffer[tt][nt]);else r.deleteFramebuffer(X.__webglFramebuffer[tt]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[tt])}else{if(Array.isArray(X.__webglFramebuffer))for(let tt=0;tt<X.__webglFramebuffer.length;tt++)r.deleteFramebuffer(X.__webglFramebuffer[tt]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let tt=0;tt<X.__webglColorRenderbuffer.length;tt++)X.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[tt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let tt=0,nt=S.length;tt<nt;tt++){let yt=n.get(S[tt]);yt.__webglTexture&&(r.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(S[tt])}n.remove(S),n.remove(P)}let N=0;function G(){N=0}function j(){let P=N;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),N+=1,P}function q(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function K(P,S){let X=n.get(P);if(P.isVideoTexture&&ae(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(X,P,S);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+S)}function O(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){Wt(X,P,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+S)}function k(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){Wt(X,P,S);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+S)}function lt(P,S){let X=n.get(P);if(P.version>0&&X.__version!==P.version){fe(X,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+S)}let ut={[Eo]:r.REPEAT,[Ge]:r.CLAMP_TO_EDGE,[To]:r.MIRRORED_REPEAT},ft={[we]:r.NEAREST,[el]:r.NEAREST_MIPMAP_NEAREST,[qr]:r.NEAREST_MIPMAP_LINEAR,[Be]:r.LINEAR,[mu]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},xt={[Pu]:r.NEVER,[Ou]:r.ALWAYS,[Lu]:r.LESS,[Nu]:r.LEQUAL,[Iu]:r.EQUAL,[Fu]:r.GEQUAL,[Du]:r.GREATER,[Uu]:r.NOTEQUAL};function Tt(P,S,X){if(X?(r.texParameteri(P,r.TEXTURE_WRAP_S,ut[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ut[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ut[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ft[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ft[S.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Ge||S.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==we&&S.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===we||S.minFilter!==qr&&S.minFilter!==es||S.type===Pn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===ns&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(P,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function bt(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",B));let et=S.source,tt=m.get(et);tt===void 0&&(tt={},m.set(et,tt));let nt=q(S);if(nt!==P.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[nt].usedTimes++;let yt=tt[P.__cacheKey];yt!==void 0&&(tt[P.__cacheKey].usedTimes--,yt.usedTimes===0&&C(S)),P.__cacheKey=nt,P.__webglTexture=tt[nt].texture}return X}function Wt(P,S,X){let et=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=r.TEXTURE_3D);let tt=bt(P,S),nt=S.source;e.bindTexture(et,P.__webglTexture,r.TEXTURE0+X);let yt=n.get(nt);if(nt.version!==yt.__version||tt===!0){e.activeTexture(r.TEXTURE0+X);let rt=Xt.getPrimaries(Xt.workingColorSpace),dt=S.colorSpace===ze?null:Xt.getPrimaries(S.colorSpace),D=S.colorSpace===ze||rt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let it=M(S)&&x(S.image)===!1,J=_(S.image,it,!1,h);J=ue(S,J);let Et=x(J)||a,_t=s.convert(S.format,S.colorSpace),Mt=s.convert(S.type),vt=U(S.internalFormat,_t,Mt,S.colorSpace,S.isVideoTexture);Tt(et,S,Et);let L,ot=S.mipmaps,st=a&&S.isVideoTexture!==!0,ht=yt.__version===void 0||tt===!0,at=b(S,J,Et);if(S.isDepthTexture)vt=r.DEPTH_COMPONENT,a?S.type===Pn?vt=r.DEPTH_COMPONENT32F:S.type===Cn?vt=r.DEPTH_COMPONENT24:S.type===jn?vt=r.DEPTH24_STENCIL8:vt=r.DEPTH_COMPONENT16:S.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Zn&&vt===r.DEPTH_COMPONENT&&S.type!==ra&&S.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Cn,Mt=s.convert(S.type)),S.format===Di&&vt===r.DEPTH_COMPONENT&&(vt=r.DEPTH_STENCIL,S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=jn,Mt=s.convert(S.type))),ht&&(st?e.texStorage2D(r.TEXTURE_2D,1,vt,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,vt,J.width,J.height,0,_t,Mt,null));else if(S.isDataTexture)if(ot.length>0&&Et){st&&ht&&e.texStorage2D(r.TEXTURE_2D,at,vt,ot[0].width,ot[0].height);for(let Q=0,gt=ot.length;Q<gt;Q++)L=ot[Q],st?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,L.width,L.height,_t,Mt,L.data):e.texImage2D(r.TEXTURE_2D,Q,vt,L.width,L.height,0,_t,Mt,L.data);S.generateMipmaps=!1}else st?(ht&&e.texStorage2D(r.TEXTURE_2D,at,vt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,_t,Mt,J.data)):e.texImage2D(r.TEXTURE_2D,0,vt,J.width,J.height,0,_t,Mt,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,vt,ot[0].width,ot[0].height,J.depth);for(let Q=0,gt=ot.length;Q<gt;Q++)L=ot[Q],S.format!==qe?_t!==null?st?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,L.width,L.height,J.depth,_t,L.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,vt,L.width,L.height,J.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,L.width,L.height,J.depth,_t,Mt,L.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,vt,L.width,L.height,J.depth,0,_t,Mt,L.data)}else{st&&ht&&e.texStorage2D(r.TEXTURE_2D,at,vt,ot[0].width,ot[0].height);for(let Q=0,gt=ot.length;Q<gt;Q++)L=ot[Q],S.format!==qe?_t!==null?st?e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,L.width,L.height,_t,L.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,vt,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,L.width,L.height,_t,Mt,L.data):e.texImage2D(r.TEXTURE_2D,Q,vt,L.width,L.height,0,_t,Mt,L.data)}else if(S.isDataArrayTexture)st?(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,at,vt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_t,Mt,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,J.width,J.height,J.depth,0,_t,Mt,J.data);else if(S.isData3DTexture)st?(ht&&e.texStorage3D(r.TEXTURE_3D,at,vt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_t,Mt,J.data)):e.texImage3D(r.TEXTURE_3D,0,vt,J.width,J.height,J.depth,0,_t,Mt,J.data);else if(S.isFramebufferTexture){if(ht)if(st)e.texStorage2D(r.TEXTURE_2D,at,vt,J.width,J.height);else{let Q=J.width,gt=J.height;for(let At=0;At<at;At++)e.texImage2D(r.TEXTURE_2D,At,vt,Q,gt,0,_t,Mt,null),Q>>=1,gt>>=1}}else if(ot.length>0&&Et){st&&ht&&e.texStorage2D(r.TEXTURE_2D,at,vt,ot[0].width,ot[0].height);for(let Q=0,gt=ot.length;Q<gt;Q++)L=ot[Q],st?e.texSubImage2D(r.TEXTURE_2D,Q,0,0,_t,Mt,L):e.texImage2D(r.TEXTURE_2D,Q,vt,_t,Mt,L);S.generateMipmaps=!1}else st?(ht&&e.texStorage2D(r.TEXTURE_2D,at,vt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Mt,J)):e.texImage2D(r.TEXTURE_2D,0,vt,_t,Mt,J);T(S,Et)&&E(et),yt.__version=nt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function fe(P,S,X){if(S.image.length!==6)return;let et=bt(P,S),tt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);let nt=n.get(tt);if(tt.version!==nt.__version||et===!0){e.activeTexture(r.TEXTURE0+X);let yt=Xt.getPrimaries(Xt.workingColorSpace),rt=S.colorSpace===ze?null:Xt.getPrimaries(S.colorSpace),dt=S.colorSpace===ze||yt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let D=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!D&&!it?J[Q]=_(S.image[Q],!1,!0,l):J[Q]=it?S.image[Q].image:S.image[Q],J[Q]=ue(S,J[Q]);let Et=J[0],_t=x(Et)||a,Mt=s.convert(S.format,S.colorSpace),vt=s.convert(S.type),L=U(S.internalFormat,Mt,vt,S.colorSpace),ot=a&&S.isVideoTexture!==!0,st=nt.__version===void 0||et===!0,ht=b(S,Et,_t);Tt(r.TEXTURE_CUBE_MAP,S,_t);let at;if(D){ot&&st&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,L,Et.width,Et.height);for(let Q=0;Q<6;Q++){at=J[Q].mipmaps;for(let gt=0;gt<at.length;gt++){let At=at[gt];S.format!==qe?Mt!==null?ot?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,At.width,At.height,Mt,At.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,L,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,At.width,At.height,Mt,vt,At.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,L,At.width,At.height,0,Mt,vt,At.data)}}}else{at=S.mipmaps,ot&&st&&(at.length>0&&ht++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,L,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(it){ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Mt,vt,J[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,L,J[Q].width,J[Q].height,0,Mt,vt,J[Q].data);for(let gt=0;gt<at.length;gt++){let ee=at[gt].image[Q].image;ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,ee.width,ee.height,Mt,vt,ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,L,ee.width,ee.height,0,Mt,vt,ee.data)}}else{ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Mt,vt,J[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,L,Mt,vt,J[Q]);for(let gt=0;gt<at.length;gt++){let At=at[gt];ot?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Mt,vt,At.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,L,Mt,vt,At.image[Q])}}}T(S,_t)&&E(r.TEXTURE_CUBE_MAP),nt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Dt(P,S,X,et,tt,nt){let yt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),dt=U(X.internalFormat,yt,rt,X.colorSpace);if(!n.get(S).__hasExternalTextures){let it=Math.max(1,S.width>>nt),J=Math.max(1,S.height>>nt);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,dt,it,J,S.depth,0,yt,rt,null):e.texImage2D(tt,nt,dt,it,J,0,yt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Gt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,tt,n.get(X).__webglTexture,0,Nt(S)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,tt,n.get(X).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function H(P,S,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let et=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||Gt(S)){let tt=S.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Pn?et=r.DEPTH_COMPONENT32F:tt.type===Cn&&(et=r.DEPTH_COMPONENT24));let nt=Nt(S);Gt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,et,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,et,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){let et=Nt(S);X&&Gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,S.width,S.height):Gt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{let et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0;tt<et.length;tt++){let nt=et[tt],yt=s.convert(nt.format,nt.colorSpace),rt=s.convert(nt.type),dt=U(nt.internalFormat,yt,rt,nt.colorSpace),D=Nt(S);X&&Gt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,dt,S.width,S.height):Gt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,dt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,dt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let et=n.get(S.depthTexture).__webglTexture,tt=Nt(S);if(S.depthTexture.format===Zn)Gt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(S.depthTexture.format===Di)Gt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function wt(P){let S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,P)}else if(X){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=r.createRenderbuffer(),H(S.__webglDepthbuffer[et],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),H(S.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(P,S,X){let et=n.get(P);S!==void 0&&Dt(et.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&wt(P)}function Ct(P){let S=P.texture,X=n.get(P),et=n.get(S);P.addEventListener("dispose",Y),P.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=S.version,o.memory.textures++);let tt=P.isWebGLCubeRenderTarget===!0,nt=P.isWebGLMultipleRenderTargets===!0,yt=x(P)||a;if(tt){X.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(a&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[rt]=[];for(let dt=0;dt<S.mipmaps.length;dt++)X.__webglFramebuffer[rt][dt]=r.createFramebuffer()}else X.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)X.__webglFramebuffer[rt]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(nt)if(i.drawBuffers){let rt=P.texture;for(let dt=0,D=rt.length;dt<D;dt++){let it=n.get(rt[dt]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Gt(P)===!1){let rt=nt?S:[S];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){let D=rt[dt];X.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[dt]);let it=s.convert(D.format,D.colorSpace),J=s.convert(D.type),Et=U(D.internalFormat,it,J,D.colorSpace,P.isXRRenderTarget===!0),_t=Nt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,Et,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,X.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),H(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,S,yt);for(let rt=0;rt<6;rt++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Dt(X.__webglFramebuffer[rt][dt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else Dt(X.__webglFramebuffer[rt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);T(S,yt)&&E(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let rt=P.texture;for(let dt=0,D=rt.length;dt<D;dt++){let it=rt[dt],J=n.get(it);e.bindTexture(r.TEXTURE_2D,J.__webglTexture),Tt(r.TEXTURE_2D,it,yt),Dt(X.__webglFramebuffer,P,it,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),T(it,yt)&&E(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,et.__webglTexture),Tt(rt,S,yt),a&&S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Dt(X.__webglFramebuffer[dt],P,S,r.COLOR_ATTACHMENT0,rt,dt);else Dt(X.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,rt,0);T(S,yt)&&E(rt),e.unbindTexture()}P.depthBuffer&&wt(P)}function jt(P){let S=x(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let et=0,tt=X.length;et<tt;et++){let nt=X[et];if(T(nt,S)){let yt=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,rt=n.get(nt).__webglTexture;e.bindTexture(yt,rt),E(yt),e.unbindTexture()}}}function zt(P){if(a&&P.samples>0&&Gt(P)===!1){let S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,et=P.height,tt=r.COLOR_BUFFER_BIT,nt=[],yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=n.get(P),dt=P.isWebGLMultipleRenderTargets===!0;if(dt)for(let D=0;D<S.length;D++)e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let D=0;D<S.length;D++){nt.push(r.COLOR_ATTACHMENT0+D),P.depthBuffer&&nt.push(yt);let it=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(it===!1&&(P.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),dt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,rt.__webglColorRenderbuffer[D]),it===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[yt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[yt])),dt){let J=n.get(S[D]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,X,et,0,0,X,et,tt,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let D=0;D<S.length;D++){e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,rt.__webglColorRenderbuffer[D]);let it=n.get(S[D]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,it,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function Nt(P){return Math.min(d,P.samples)}function Gt(P){let S=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(P){let S=o.render.frame;g.get(P)!==S&&(g.set(P,S),P.update())}function ue(P,S){let X=P.colorSpace,et=P.format,tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ao||X!==pn&&X!==ze&&(Xt.getTransfer(X)===$t?a===!1?t.has("EXT_sRGB")===!0&&et===qe?(P.format=Ao,P.minFilter=Be,P.generateMipmaps=!1):S=Ks.sRGBToLinear(S):(et!==qe||tt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=lt,this.rebindTextures=It,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Gt}function Og(r,t,e){let n=e.isWebGL2;function i(s,o=ze){let a,c=Xt.getTransfer(o);if(s===Dn)return r.UNSIGNED_BYTE;if(s===Cc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Pc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===gu)return r.BYTE;if(s===vu)return r.SHORT;if(s===ra)return r.UNSIGNED_SHORT;if(s===Rc)return r.INT;if(s===Cn)return r.UNSIGNED_INT;if(s===Pn)return r.FLOAT;if(s===ns)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yu)return r.ALPHA;if(s===qe)return r.RGBA;if(s===_u)return r.LUMINANCE;if(s===xu)return r.LUMINANCE_ALPHA;if(s===Zn)return r.DEPTH_COMPONENT;if(s===Di)return r.DEPTH_STENCIL;if(s===Ao)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Mu)return r.RED;if(s===Lc)return r.RED_INTEGER;if(s===bu)return r.RG;if(s===Ic)return r.RG_INTEGER;if(s===Nc)return r.RGBA_INTEGER;if(s===Xr||s===Yr||s===jr||s===Zr)if(c===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nl||s===il||s===sl||s===rl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ol||s===al)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ol)return c===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===al)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===vl||s===yl||s===_l||s===xl||s===Ml)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ll)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ul)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ml)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_l)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xl)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ml)return c===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$r||s===bl||s===wl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===$r)return c===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Su||s===Sl||s===El||s===Tl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===$r)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===El)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var Wo=class extends Se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ln=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Go=class extends Xe{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Zn,h!==Zn&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zn&&(n=Cn),n===void 0&&h===Di&&(n=jn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=c!==void 0?c:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qo=class extends Je{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=e.getContextAttributes(),m=null,p=null,y=[],_=[],x=new Se;x.layers.enable(1),x.viewport=new me;let M=new Se;M.layers.enable(2),M.viewport=new me;let T=[x,M],E=new Wo;E.layers.enable(1),E.layers.enable(2);let U=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=y[O];return k===void 0&&(k=new ts,y[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=y[O];return k===void 0&&(k=new ts,y[O]=k),k.getGripSpace()},this.getHand=function(O){let k=y[O];return k===void 0&&(k=new ts,y[O]=k),k.getHandSpace()};function A(O){let k=_.indexOf(O.inputSource);if(k===-1)return;let lt=y[k];lt!==void 0&&(lt.update(O.inputSource,O.frame,l||o),lt.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let O=0;O<y.length;O++){let k=_[O];k!==null&&(_[O]=null,y[O].disconnect(k))}U=null,b=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let k={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:f}),p=new mn(f.framebufferWidth,f.framebufferHeight,{format:qe,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,lt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=v.stencil?Di:Zn,lt=v.stencil?jn:Cn);let ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ft),i.updateRenderState({layers:[u]}),p=new mn(u.textureWidth,u.textureHeight,{format:qe,type:Dn,depthTexture:new Go(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let xt=t.properties.get(p);xt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Y(O){for(let k=0;k<O.removed.length;k++){let lt=O.removed[k],ut=_.indexOf(lt);ut>=0&&(_[ut]=null,y[ut].disconnect(lt))}for(let k=0;k<O.added.length;k++){let lt=O.added[k],ut=_.indexOf(lt);if(ut===-1){for(let xt=0;xt<y.length;xt++)if(xt>=_.length){_.push(lt),ut=xt;break}else if(_[xt]===null){_[xt]=lt,ut=xt;break}if(ut===-1)break}let ft=y[ut];ft&&ft.connect(lt)}}let F=new z,C=new z;function I(O,k,lt){F.setFromMatrixPosition(k.matrixWorld),C.setFromMatrixPosition(lt.matrixWorld);let ut=F.distanceTo(C),ft=k.projectionMatrix.elements,xt=lt.projectionMatrix.elements,Tt=ft[14]/(ft[10]-1),bt=ft[14]/(ft[10]+1),Wt=(ft[9]+1)/ft[5],fe=(ft[9]-1)/ft[5],Dt=(ft[8]-1)/ft[0],H=(xt[8]+1)/xt[0],oe=Tt*Dt,wt=Tt*H,It=ut/(-Dt+H),Ct=It*-Dt;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ct),O.translateZ(It),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let jt=Tt+It,zt=bt+It,Nt=oe-Ct,Gt=wt+(ut-Ct),ae=Wt*bt/zt*jt,ue=fe*bt/zt*jt;O.projectionMatrix.makePerspective(Nt,Gt,ae,ue,jt,zt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function N(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=M.near=x.near=O.near,E.far=M.far=x.far=O.far,(U!==E.near||b!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,b=E.far);let k=O.parent,lt=E.cameras;N(E,k);for(let ut=0;ut<lt.length;ut++)N(lt[ut],k);lt.length===2?I(E,x,M):E.projectionMatrix.copy(x.projectionMatrix),G(O,E,k)};function G(O,k,lt){lt===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(lt.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=is*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(O){c=O,u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let j=null;function q(O,k){if(h=k.getViewerPose(l||o),g=k,h!==null){let lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ut=!1;lt.length!==E.cameras.length&&(E.cameras.length=0,ut=!0);for(let ft=0;ft<lt.length;ft++){let xt=lt[ft],Tt=null;if(f!==null)Tt=f.getViewport(xt);else{let Wt=d.getViewSubImage(u,xt);Tt=Wt.viewport,ft===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,u.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let bt=T[ft];bt===void 0&&(bt=new Se,bt.layers.enable(ft),bt.viewport=new me,T[ft]=bt),bt.matrix.fromArray(xt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(xt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ft===0&&(E.matrix.copy(bt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ut===!0&&E.cameras.push(bt)}}for(let lt=0;lt<y.length;lt++){let ut=_[lt],ft=y[lt];ut!==null&&ft!==void 0&&ft.update(ut,k,l||o)}j&&j(O,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let K=new zc;K.setAnimationLoop(q),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}};function zg(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kg(r,t,e,n){let i={},s={},o=[],a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let x=_.program;n.uniformBlockBinding(y,x)}function l(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));let M=_.program;n.updateUBOMapping(y,M);let T=t.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function h(y){let _=d();y.__bindingPointIndex=_;let x=r.createBuffer(),M=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,M,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let _=i[y.id],x=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,E=x.length;T<E;T++){let U=x[T];if(f(U,T,M)===!0){let b=U.__offset,A=Array.isArray(U.value)?U.value:[U.value],B=0;for(let Y=0;Y<A.length;Y++){let F=A[Y],C=v(F);typeof F=="number"?(U.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,b+B,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=F.elements[0],U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=F.elements[0],U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=F.elements[0]):(F.toArray(U.__data,B),B+=C.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,U.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,x){let M=y.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{let T=Array.isArray(M)?M:[M],E=[];for(let U=0;U<T.length;U++)E.push(T[U].clone());x[_]=E}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{let T=Array.isArray(x[_])?x[_]:[x[_]],E=Array.isArray(M)?M:[M];for(let U=0;U<T.length;U++){let b=T[U];if(b.equals(E[U])===!1)return b.copy(E[U]),!0}}return!1}function g(y){let _=y.uniforms,x=0,M=16,T=0;for(let E=0,U=_.length;E<U;E++){let b=_[E],A={boundary:0,storage:0},B=Array.isArray(b.value)?b.value:[b.value];for(let Y=0,F=B.length;Y<F;Y++){let C=B[Y],I=v(C);A.boundary+=I.boundary,A.storage+=I.storage}if(b.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,E>0){T=x%M;let Y=M-T;T!==0&&Y-A.boundary<0&&(x+=M-T,b.__offset=x)}x+=A.storage}return T=x%M,T>0&&(x+=M-T),y.__size=x,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}var ss=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;let _=this,x=!1,M=0,T=0,E=null,U=-1,b=null,A=new me,B=new me,Y=null,F=new Yt(0),C=0,I=e.width,N=e.height,G=1,j=null,q=null,K=new me(0,0,I,N),O=new me(0,0,I,N),k=!1,lt=new or,ut=!1,ft=!1,xt=null,Tt=new re,bt=new Ot,Wt=new z,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return E===null?G:1}let H=n;function oe(R,V){for(let Z=0;Z<R.length;Z++){let W=R[Z],$=e.getContext(W,V);if($!==null)return $}return null}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",ht,!1),H===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),H=oe(V,R),H===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let wt,It,Ct,jt,zt,Nt,Gt,ae,ue,P,S,X,et,tt,nt,yt,rt,dt,D,it,J,Et,_t,Mt;function vt(){wt=new am(H),It=new em(H,wt,t),wt.init(It),Et=new Og(H,wt,It),Ct=new Ug(H,wt,It),jt=new hm(H),zt=new wg,Nt=new Fg(H,wt,Ct,zt,It,Et,jt),Gt=new im(_),ae=new om(_),ue=new _d(H,It),_t=new Qp(H,wt,ue,It),P=new lm(H,ue,jt,_t),S=new pm(H,P,ue,jt),D=new fm(H,It,Nt),yt=new nm(zt),X=new bg(_,Gt,ae,wt,It,_t,yt),et=new zg(_,zt),tt=new Eg,nt=new Lg(wt,It),dt=new Jp(_,Gt,ae,Ct,S,u,c),rt=new Dg(_,S,It),Mt=new kg(H,jt,It,Ct),it=new tm(H,wt,jt,It),J=new cm(H,wt,jt,It),jt.programs=X.programs,_.capabilities=It,_.extensions=wt,_.properties=zt,_.renderLists=tt,_.shadowMap=rt,_.state=Ct,_.info=jt}vt();let L=new qo(_,H);this.xr=L,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(I,N,!1))},this.getSize=function(R){return R.set(I,N)},this.setSize=function(R,V,Z=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,N=V,e.width=Math.floor(R*G),e.height=Math.floor(V*G),Z===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(I*G,N*G).floor()},this.setDrawingBufferSize=function(R,V,Z){I=R,N=V,G=Z,e.width=Math.floor(R*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,V,Z,W){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,V,Z,W),Ct.viewport(A.copy(K).multiplyScalar(G).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,V,Z,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,V,Z,W),Ct.scissor(B.copy(O).multiplyScalar(G).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(R){Ct.setScissorTest(k=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(R=!0,V=!0,Z=!0){let W=0;if(R){let $=!1;if(E!==null){let mt=E.texture.format;$=mt===Nc||mt===Ic||mt===Lc}if($){let mt=E.texture.type,St=mt===Dn||mt===Cn||mt===ra||mt===jn||mt===Cc||mt===Pc,Pt=dt.getClearColor(),Lt=dt.getClearAlpha(),Vt=Pt.r,Rt=Pt.g,Ut=Pt.b;St?(f[0]=Vt,f[1]=Rt,f[2]=Ut,f[3]=Lt,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=Vt,g[1]=Rt,g[2]=Ut,g[3]=Lt,H.clearBufferiv(H.COLOR,0,g))}else W|=H.COLOR_BUFFER_BIT}V&&(W|=H.DEPTH_BUFFER_BIT),Z&&(W|=H.STENCIL_BUFFER_BIT),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),tt.dispose(),nt.dispose(),zt.dispose(),Gt.dispose(),ae.dispose(),S.dispose(),_t.dispose(),Mt.dispose(),X.dispose(),L.dispose(),L.removeEventListener("sessionstart",Zt),L.removeEventListener("sessionend",$e),xt&&(xt.dispose(),xt=null),_e.stop()};function ot(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let R=jt.autoReset,V=rt.enabled,Z=rt.autoUpdate,W=rt.needsUpdate,$=rt.type;vt(),jt.autoReset=R,rt.enabled=V,rt.autoUpdate=Z,rt.needsUpdate=W,rt.type=$}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){let V=R.target;V.removeEventListener("dispose",at),Q(V)}function Q(R){gt(R),zt.remove(R)}function gt(R){let V=zt.get(R).programs;V!==void 0&&(V.forEach(function(Z){X.releaseProgram(Z)}),R.isShaderMaterial&&X.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Z,W,$,mt){V===null&&(V=fe);let St=$.isMesh&&$.matrixWorld.determinant()<0,Pt=vh(R,V,Z,W,$);Ct.setMaterial(W,St);let Lt=Z.index,Vt=1;if(W.wireframe===!0){if(Lt=P.getWireframeAttribute(Z),Lt===void 0)return;Vt=2}let Rt=Z.drawRange,Ut=Z.attributes.position,Qt=Rt.start*Vt,te=(Rt.start+Rt.count)*Vt;mt!==null&&(Qt=Math.max(Qt,mt.start*Vt),te=Math.min(te,(mt.start+mt.count)*Vt)),Lt!==null?(Qt=Math.max(Qt,0),te=Math.min(te,Lt.count)):Ut!=null&&(Qt=Math.max(Qt,0),te=Math.min(te,Ut.count));let Fe=te-Qt;if(Fe<0||Fe===1/0)return;_t.setup($,W,Pt,Z,Lt);let sn,ne=it;if(Lt!==null&&(sn=ue.get(Lt),ne=J,ne.setIndex(sn)),$.isMesh)W.wireframe===!0?(Ct.setLineWidth(W.wireframeLinewidth*Dt()),ne.setMode(H.LINES)):ne.setMode(H.TRIANGLES);else if($.isLine){let Ht=W.linewidth;Ht===void 0&&(Ht=1),Ct.setLineWidth(Ht*Dt()),$.isLineSegments?ne.setMode(H.LINES):$.isLineLoop?ne.setMode(H.LINE_LOOP):ne.setMode(H.LINE_STRIP)}else $.isPoints?ne.setMode(H.POINTS):$.isSprite&&ne.setMode(H.TRIANGLES);if($.isInstancedMesh)ne.renderInstances(Qt,Fe,$.count);else if(Z.isInstancedBufferGeometry){let Ht=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dr=Math.min(Z.instanceCount,Ht);ne.renderInstances(Qt,Fe,Dr)}else ne.render(Qt,Fe)},this.compile=function(R,V){function Z(W,$,mt){W.transparent===!0&&W.side===dn&&W.forceSinglePass===!1?(W.side=Re,W.needsUpdate=!0,ms(W,$,mt),W.side=Un,W.needsUpdate=!0,ms(W,$,mt),W.side=dn):ms(W,$,mt)}m=nt.get(R),m.init(),y.push(m),R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights),R.traverse(function(W){let $=W.material;if($)if(Array.isArray($))for(let mt=0;mt<$.length;mt++){let St=$[mt];Z(St,R,W)}else Z($,R,W)}),y.pop(),m=null};let At=null;function ee(R){At&&At(R)}function Zt(){_e.stop()}function $e(){_e.start()}let _e=new zc;_e.setAnimationLoop(ee),typeof self!="undefined"&&_e.setContext(self),this.setAnimationLoop=function(R){At=R,L.setAnimationLoop(R),R===null?_e.stop():_e.start()},L.addEventListener("sessionstart",Zt),L.addEventListener("sessionend",$e),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(V),V=L.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,E),m=nt.get(R,y.length),m.init(),y.push(m),Tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),lt.setFromProjectionMatrix(Tt),ft=this.localClippingEnabled,ut=yt.init(this.clippingPlanes,ft),v=tt.get(R,p.length),v.init(),p.push(v),Na(R,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(j,q),this.info.render.frame++,ut===!0&&yt.beginShadows();let Z=m.state.shadowsArray;if(rt.render(Z,R,V),ut===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(v,R),m.setupLights(_._useLegacyLights),V.isArrayCamera){let W=V.cameras;for(let $=0,mt=W.length;$<mt;$++){let St=W[$];Da(v,R,St,St.viewport)}}else Da(v,R,V);E!==null&&(Nt.updateMultisampleRenderTarget(E),Nt.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(_,R,V),_t.resetDefaultState(),U=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Na(R,V,Z,W){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||lt.intersectsSprite(R)){W&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Tt);let St=S.update(R),Pt=R.material;Pt.visible&&v.push(R,St,Pt,Z,Wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||lt.intersectsObject(R))){let St=S.update(R),Pt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Wt.copy(St.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(Tt)),Array.isArray(Pt)){let Lt=St.groups;for(let Vt=0,Rt=Lt.length;Vt<Rt;Vt++){let Ut=Lt[Vt],Qt=Pt[Ut.materialIndex];Qt&&Qt.visible&&v.push(R,St,Qt,Z,Wt.z,Ut)}}else Pt.visible&&v.push(R,St,Pt,Z,Wt.z,null)}}let mt=R.children;for(let St=0,Pt=mt.length;St<Pt;St++)Na(mt[St],V,Z,W)}function Da(R,V,Z,W){let $=R.opaque,mt=R.transmissive,St=R.transparent;m.setupLightsView(Z),ut===!0&&yt.setGlobalState(_.clippingPlanes,Z),mt.length>0&&gh($,mt,V,Z),W&&Ct.viewport(A.copy(W)),$.length>0&&ps($,V,Z),mt.length>0&&ps(mt,V,Z),St.length>0&&ps(St,V,Z),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function gh(R,V,Z,W){let $=It.isWebGL2;xt===null&&(xt=new mn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?ns:Dn,minFilter:es,samples:$?4:0})),_.getDrawingBufferSize(bt),$?xt.setSize(bt.x,bt.y):xt.setSize(Zs(bt.x),Zs(bt.y));let mt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(F),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();let St=_.toneMapping;_.toneMapping=Nn,ps(R,Z,W),Nt.updateMultisampleRenderTarget(xt),Nt.updateRenderTargetMipmap(xt);let Pt=!1;for(let Lt=0,Vt=V.length;Lt<Vt;Lt++){let Rt=V[Lt],Ut=Rt.object,Qt=Rt.geometry,te=Rt.material,Fe=Rt.group;if(te.side===dn&&Ut.layers.test(W.layers)){let sn=te.side;te.side=Re,te.needsUpdate=!0,Ua(Ut,Z,W,Qt,te,Fe),te.side=sn,te.needsUpdate=!0,Pt=!0}}Pt===!0&&(Nt.updateMultisampleRenderTarget(xt),Nt.updateRenderTargetMipmap(xt)),_.setRenderTarget(mt),_.setClearColor(F,C),_.toneMapping=St}function ps(R,V,Z){let W=V.isScene===!0?V.overrideMaterial:null;for(let $=0,mt=R.length;$<mt;$++){let St=R[$],Pt=St.object,Lt=St.geometry,Vt=W===null?St.material:W,Rt=St.group;Pt.layers.test(Z.layers)&&Ua(Pt,V,Z,Lt,Vt,Rt)}}function Ua(R,V,Z,W,$,mt){R.onBeforeRender(_,V,Z,W,$,mt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(_,V,Z,W,R,mt),$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=Re,$.needsUpdate=!0,_.renderBufferDirect(Z,V,W,$,R,mt),$.side=Un,$.needsUpdate=!0,_.renderBufferDirect(Z,V,W,$,R,mt),$.side=dn):_.renderBufferDirect(Z,V,W,$,R,mt),R.onAfterRender(_,V,Z,W,$,mt)}function ms(R,V,Z){V.isScene!==!0&&(V=fe);let W=zt.get(R),$=m.state.lights,mt=m.state.shadowsArray,St=$.state.version,Pt=X.getParameters(R,$.state,mt,V,Z),Lt=X.getProgramCacheKey(Pt),Vt=W.programs;W.environment=R.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(R.isMeshStandardMaterial?ae:Gt).get(R.envMap||W.environment),Vt===void 0&&(R.addEventListener("dispose",at),Vt=new Map,W.programs=Vt);let Rt=Vt.get(Lt);if(Rt!==void 0){if(W.currentProgram===Rt&&W.lightsStateVersion===St)return Fa(R,Pt),Rt}else Pt.uniforms=X.getUniforms(R),R.onBuild(Z,Pt,_),R.onBeforeCompile(Pt,_),Rt=X.acquireProgram(Pt,Lt),Vt.set(Lt,Rt),W.uniforms=Pt.uniforms;let Ut=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=yt.uniform),Fa(R,Pt),W.needsLights=_h(R),W.lightsStateVersion=St,W.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.directionalShadowMap.value=$.state.directionalShadowMap,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotShadowMap.value=$.state.spotShadowMap,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMap.value=$.state.pointShadowMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix);let Qt=Rt.getUniforms(),te=Li.seqWithValue(Qt.seq,Ut);return W.currentProgram=Rt,W.uniformsList=te,Rt}function Fa(R,V){let Z=zt.get(R);Z.outputColorSpace=V.outputColorSpace,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function vh(R,V,Z,W,$){V.isScene!==!0&&(V=fe),Nt.resetTextureUnits();let mt=V.fog,St=W.isMeshStandardMaterial?V.environment:null,Pt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:pn,Lt=(W.isMeshStandardMaterial?ae:Gt).get(W.envMap||St),Vt=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Rt=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!Z.morphAttributes.position,Qt=!!Z.morphAttributes.normal,te=!!Z.morphAttributes.color,Fe=Nn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Fe=_.toneMapping);let sn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ne=sn!==void 0?sn.length:0,Ht=zt.get(W),Dr=m.state.lights;if(ut===!0&&(ft===!0||R!==b)){let Le=R===b&&W.id===U;yt.setState(W,R,Le)}let ie=!1;W.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Dr.state.version||Ht.outputColorSpace!==Pt||$.isInstancedMesh&&Ht.instancing===!1||!$.isInstancedMesh&&Ht.instancing===!0||$.isSkinnedMesh&&Ht.skinning===!1||!$.isSkinnedMesh&&Ht.skinning===!0||$.isInstancedMesh&&Ht.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ht.instancingColor===!1&&$.instanceColor!==null||Ht.envMap!==Lt||W.fog===!0&&Ht.fog!==mt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==yt.numPlanes||Ht.numIntersection!==yt.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Rt||Ht.morphTargets!==Ut||Ht.morphNormals!==Qt||Ht.morphColors!==te||Ht.toneMapping!==Fe||It.isWebGL2===!0&&Ht.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ht.__version=W.version);let zn=Ht.currentProgram;ie===!0&&(zn=ms(W,V,$));let Oa=!1,Wi=!1,Ur=!1,xe=zn.getUniforms(),kn=Ht.uniforms;if(Ct.useProgram(zn.program)&&(Oa=!0,Wi=!0,Ur=!0),W.id!==U&&(U=W.id,Wi=!0),Oa||b!==R){xe.setValue(H,"projectionMatrix",R.projectionMatrix),xe.setValue(H,"viewMatrix",R.matrixWorldInverse);let Le=xe.map.cameraPosition;Le!==void 0&&Le.setValue(H,Wt.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&xe.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Wi=!0,Ur=!0)}if($.isSkinnedMesh){xe.setOptional(H,$,"bindMatrix"),xe.setOptional(H,$,"bindMatrixInverse");let Le=$.skeleton;Le&&(It.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),xe.setValue(H,"boneTexture",Le.boneTexture,Nt),xe.setValue(H,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Fr=Z.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0&&It.isWebGL2===!0)&&D.update($,Z,zn),(Wi||Ht.receiveShadow!==$.receiveShadow)&&(Ht.receiveShadow=$.receiveShadow,xe.setValue(H,"receiveShadow",$.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(kn.envMap.value=Lt,kn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Wi&&(xe.setValue(H,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&yh(kn,Ur),mt&&W.fog===!0&&et.refreshFogUniforms(kn,mt),et.refreshMaterialUniforms(kn,W,G,N,xt),Li.upload(H,Ht.uniformsList,kn,Nt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Li.upload(H,Ht.uniformsList,kn,Nt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(H,"center",$.center),xe.setValue(H,"modelViewMatrix",$.modelViewMatrix),xe.setValue(H,"normalMatrix",$.normalMatrix),xe.setValue(H,"modelMatrix",$.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Le=W.uniformsGroups;for(let Or=0,xh=Le.length;Or<xh;Or++)if(It.isWebGL2){let Ba=Le[Or];Mt.update(Ba,zn),Mt.bind(Ba,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function yh(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function _h(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,Z){zt.get(R.texture).__webglTexture=V,zt.get(R.depthTexture).__webglTexture=Z;let W=zt.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Z===void 0,W.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){let Z=zt.get(R);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Z=0){E=R,M=V,T=Z;let W=!0,$=null,mt=!1,St=!1;if(R){let Lt=zt.get(R);Lt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):Lt.__webglFramebuffer===void 0?Nt.setupRenderTarget(R):Lt.__hasExternalTextures&&Nt.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);let Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);let Rt=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Rt[V])?$=Rt[V][Z]:$=Rt[V],mt=!0):It.isWebGL2&&R.samples>0&&Nt.useMultisampledRTT(R)===!1?$=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Rt)?$=Rt[Z]:$=Rt,A.copy(R.viewport),B.copy(R.scissor),Y=R.scissorTest}else A.copy(K).multiplyScalar(G).floor(),B.copy(O).multiplyScalar(G).floor(),Y=k;if(Ct.bindFramebuffer(H.FRAMEBUFFER,$)&&It.drawBuffers&&W&&Ct.drawBuffers(R,$),Ct.viewport(A),Ct.scissor(B),Ct.setScissorTest(Y),mt){let Lt=zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,Z)}else if(St){let Lt=zt.get(R.texture),Vt=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.__webglTexture,Z||0,Vt)}U=-1},this.readRenderTargetPixels=function(R,V,Z,W,$,mt,St){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Pt=Pt[St]),Pt){Ct.bindFramebuffer(H.FRAMEBUFFER,Pt);try{let Lt=R.texture,Vt=Lt.format,Rt=Lt.type;if(Vt!==qe&&Et.convert(Vt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ut=Rt===ns&&(wt.has("EXT_color_buffer_half_float")||It.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Rt!==Dn&&Et.convert(Rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===Pn&&(It.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-W&&Z>=0&&Z<=R.height-$&&H.readPixels(V,Z,W,$,Et.convert(Vt),Et.convert(Rt),mt)}finally{let Lt=E!==null?zt.get(E).__webglFramebuffer:null;Ct.bindFramebuffer(H.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(R,V,Z=0){let W=Math.pow(2,-Z),$=Math.floor(V.image.width*W),mt=Math.floor(V.image.height*W);Nt.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,R.x,R.y,$,mt),Ct.unbindTexture()},this.copyTextureToTexture=function(R,V,Z,W=0){let $=V.image.width,mt=V.image.height,St=Et.convert(Z.format),Pt=Et.convert(Z.type);Nt.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,R.x,R.y,$,mt,St,Pt,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,St,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,R.x,R.y,St,Pt,V.image),W===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Z,W,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=R.max.x-R.min.x+1,St=R.max.y-R.min.y+1,Pt=R.max.z-R.min.z+1,Lt=Et.convert(W.format),Vt=Et.convert(W.type),Rt;if(W.isData3DTexture)Nt.setTexture3D(W,0),Rt=H.TEXTURE_3D;else if(W.isDataArrayTexture)Nt.setTexture2DArray(W,0),Rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let Ut=H.getParameter(H.UNPACK_ROW_LENGTH),Qt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),te=H.getParameter(H.UNPACK_SKIP_PIXELS),Fe=H.getParameter(H.UNPACK_SKIP_ROWS),sn=H.getParameter(H.UNPACK_SKIP_IMAGES),ne=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(Rt,$,V.x,V.y,V.z,mt,St,Pt,Lt,Vt,ne.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Rt,$,V.x,V.y,V.z,mt,St,Pt,Lt,ne.data)):H.texSubImage3D(Rt,$,V.x,V.y,V.z,mt,St,Pt,Lt,Vt,ne),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,sn),$===0&&W.generateMipmaps&&H.generateMipmap(Rt),Ct.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Nt.setTextureCube(R,0):R.isData3DTexture?Nt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Nt.setTexture2DArray(R,0):Nt.setTexture2D(R,0),Ct.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,Ct.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===oa?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===pr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?$n:Dc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$n?pe:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Xo=class extends ss{};Xo.prototype.isWebGL1Renderer=!0;var lr=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var cr=class extends De{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Si=new re,gc=new re,Os=[],vc=new gn,Vg=new re,Zi=new Ae,$i=new Fn,hr=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),vc.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),$i.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Si),gc.multiplyMatrices(n,Si),Zi.matrixWorld=gc,Zi.raycast(t,Os);for(let o=0,a=Os.length;o<a;o++){let c=Os[o];c.instanceId=s,c.object=this,e.push(c)}Os.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},rs=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yc=new z,_c=new z,xc=new re,xo=new Ui,Bs=new Fn,Yo=class extends Ce{constructor(t=new Qe,e=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)yc.fromBufferAttribute(e,i-1),_c.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yc.distanceTo(_c);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;xc.copy(i).invert(),xo.copy(t.ray).applyMatrix4(xc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new z,h=new z,d=new z,u=new z,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=p,x=y-1;_<x;_+=f){let M=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(m,M),h.fromBufferAttribute(m,T),xo.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(u);U<t.near||U>t.far||e.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let _=p,x=y-1;_<x;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),xo.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(u);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Mc=new z,bc=new z,ur=class extends Yo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Mc.fromBufferAttribute(e,i),bc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mc.distanceTo(bc);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=new z,ks=new z,Mo=new z,Vs=new Yn,dr=class extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Ci*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:p}=Vs;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Vs.getNormal(Mo),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){let _=(y+1)%3,x=d[y],M=d[_],T=Vs[h[y]],E=Vs[h[_]],U=`${x}_${M}`,b=`${M}_${x}`;b in u&&u[b]?(Mo.dot(u[b].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),u[b]=null):U in u||(u[U]={index0:l[y],index1:l[_],normal:Mo.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:m}=u[g];zs.fromBufferAttribute(a,v),ks.fromBufferAttribute(a,m),f.push(zs.x,zs.y,zs.z),f.push(ks.x,ks.y,ks.z)}this.setAttribute("position",new Ee(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var os=class r extends Qe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new z,u=new z,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let T=M/e;d.x=-t*Math.cos(i+T*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+T*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+x,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],x=h[p][y],M=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(_,x,T),(p!==n-1||c<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Hs(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Hg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Oi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:s=t,a=2*e-n;break;case Cl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:o=t,c=2*n-e;break;case Cl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+y*o[l+M]+_*o[c+M]+x*o[d+M];return s}},Zo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}},$o=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ws:e=this.InterpolantFactoryMethodDiscrete;break;case Gs:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Hg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kr,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=Gs;var ti=class extends je{};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Ws;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends je{};Ko.prototype.ValueTypeName="color";var Jo=class extends je{};Jo.prototype.ValueTypeName="number";var Qo=class extends Oi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ye.slerpFlat(s,0,o,l-a,o,l,c);return s}},as=class extends je{InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=Gs;as.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends je{};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ws;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends je{};ta.prototype.ValueTypeName="vector";var ea=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Wg=new ea,na=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca="\\[\\]\\.:\\/",Gg=new RegExp("["+ca+"]","g"),ha="[^"+ca+"]",qg="[^"+ca.replace("\\.","")+"]",Xg=/((?:WC+[\/:])*)/.source.replace("WC",ha),Yg=/(WCOD+)?/.source.replace("WCOD",qg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ha),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ha),$g=new RegExp("^"+Xg+Yg+jg+Zg+"$"),Kg=["material","materials","bones","map"],ia=class{constructor(t,e,n){let i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Jt=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gg,"")}static parseTrackName(t){let e=$g.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Kg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=ia;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sy=new Float32Array(1);var ls=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);var Bn=class r{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);let n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new r);let n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],y=i[3],_=i[4],x=i[5],M=i[6],T=i[7],E=i[8];return s[0]=o*v+a*y+c*M,s[1]=o*m+a*_+c*T,s[2]=o*p+a*x+c*E,s[3]=l*v+h*y+d*M,s[4]=l*m+h*_+d*T,s[5]=l*p+h*x+d*E,s[6]=u*v+f*y+g*M,s[7]=u*m+f*_+g*T,s[8]=u*p+f*x+g*E,e}scale(t,e){e===void 0&&(e=new r);let n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);let n=3,i=4,s=[],o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){let f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new r);let e=3,n=6,i=Qg,s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3,c=a,l,h=n,d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){let u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{let u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{let u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,g=i*c,v=s*o,m=s*a,p=s*c,y=this.elements;return y[3*0+0]=1-(u+g),y[3*0+1]=h-p,y[3*0+2]=d+m,y[3*1+0]=h+p,y[3*1+1]=1-(l+g),y[3*1+2]=f-v,y[3*2+0]=d-m,y[3*2+1]=f+v,y[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new r);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Qg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],w=class r{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new r);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new r(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new r(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new r),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new r),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=t0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let o=e0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Gc),Gc.almostEquals(t,e)}clone(){return new r(this.x,this.y,this.z)}};w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);var t0=new w,e0=new w,Gc=new w,Ue=class r{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,qc),l=qc),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new r().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=Xc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Xc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}},qc=new w,Xc=[new w,new w,new w,new w,new w,new w,new w,new w],Mr=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){let o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},br=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}},Te=class r{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=n0,i=i0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new r(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new r);let i=this.x,s=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*c+s*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*c,n.y=v*s+m*l,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new r);let s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}},n0=new w,i0=new w,s0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},pt=class r{constructor(t){t===void 0&&(t={}),this.id=r.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};pt.idCounter=0;pt.types=s0;var qt=class r{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Te,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return r.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return r.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(Yc),Yc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Yc=new Te,va=class r extends pt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new w;for(let s=0;s!==t.length;s++){let o=t[s],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];r.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){let s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){let h=new w,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);let v=h.dot(o);v>u&&(u=v,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let v=n.vertices[n.faces[d][g]],m=new w;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){let l=new w,h=new w,d=new w,u=new w,f=new w,g=new w,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);let y=m.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(l))}else{let p=a?a.length:m.faces.length;for(let y=0;y<p;y++){let _=a?a[y]:y;l.copy(m.faceNormals[_]),n.vmult(l,l);let x=m.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);let y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}else{let p=c?c.length:t.faces.length;for(let y=0;y<p;y++){let _=c?c[y]:y;h.copy(t.faceNormals[_]),s.vmult(h,h);let x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let y=0;y!==t.uniqueEdges.length;y++)if(s.vmult(t.uniqueEdges[y],f),u.cross(f,g),!g.almostZero()){g.normalize();let _=m.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){let a=this;r.project(a,t,n,i,ua),r.project(e,t,s,o,da);let c=ua[0],l=ua[1],h=da[0],d=da[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){let n=new w,i=new w;this.computeLocalAABB(i,n);let s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){let c=new w,l=new w,h=new w,d=new w,u=new w,f=new w,g=new w,v=new w,m=this,p=[],y=i,_=p,x=-1,M=Number.MAX_VALUE;for(let A=0;A<m.faces.length;A++){c.copy(m.faceNormals[A]),n.vmult(c,c);let B=c.dot(t);B<M&&(M=B,x=A)}if(x<0)return;let T=m.faces[x];T.connectedFaces=[];for(let A=0;A<m.faces.length;A++)for(let B=0;B<m.faces[A].length;B++)T.indexOf(m.faces[A][B])!==-1&&A!==x&&T.connectedFaces.indexOf(A)===-1&&T.connectedFaces.push(A);let E=T.length;for(let A=0;A<E;A++){let B=m.vertices[T[A]],Y=m.vertices[T[(A+1)%E]];B.vsub(Y,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(B),n.vmult(f,f),e.vadd(f,f);let F=T.connectedFaces[A];g.copy(this.faceNormals[F]);let C=this.getPlaneConstantOfFace(F);v.copy(g),n.vmult(v,v);let I=C-v.dot(e);for(this.clipFaceAgainstPlane(y,_,v,I);y.length;)y.shift();for(;_.length;)y.push(_.shift())}g.copy(this.faceNormals[x]);let U=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);let b=U-v.dot(e);for(let A=0;A<y.length;A++){let B=v.dot(y[A])+b;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){let Y=y[A];if(B<=1e-6){let F={point:Y,normal:v,depth:B};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){let d=new w;d.copy(l),e.push(d)}else{let d=new w;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){let d=new w;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let s=this.vertices,o,a,c,l,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){let o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){let o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){let o=i[s];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new w;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=e[n[a][0]],h=new w;t.vsub(l,h);let d=c.dot(h),u=new w;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){let o=t.vertices.length,a=o0,c=0,l=0,h=a0,d=t.vertices;h.setZero(),qt.vectorToLocalFrame(n,i,e,a),qt.pointToLocalFrame(n,i,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}s[0]=c,s[1]=l}},ua=[],da=[],r0=new w,o0=new w,a0=new w,ya=class r extends pt{constructor(t){super({type:pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new va({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),r.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)On.set(s[o][0],s[o][1],s[o][2]),e.vmult(On,On),t.vadd(On,On),n(On.x,On.y,On.z)}calculateWorldAABB(t,e,n,i){let s=this.halfExtents;tn[0].set(s.x,s.y,s.z),tn[1].set(-s.x,s.y,s.z),tn[2].set(-s.x,-s.y,s.z),tn[3].set(-s.x,-s.y,-s.z),tn[4].set(s.x,-s.y,-s.z),tn[5].set(s.x,s.y,-s.z),tn[6].set(-s.x,s.y,-s.z),tn[7].set(s.x,-s.y,s.z);let o=tn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=tn[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},On=new w,tn=[new w,new w,new w,new w,new w,new w,new w,new w],Ca={DYNAMIC:1,STATIC:2,KINEMATIC:4},Pa={AWAKE:0,SLEEPY:1,SLEEPING:2},Bt=class r extends br{constructor(t){t===void 0&&(t={}),super(),this.id=r.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?r.STATIC:r.DYNAMIC,typeof t.type==typeof r.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep!="undefined"?t.allowSleep:!0,this.sleepState=r.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit!="undefined"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit!="undefined"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Te,this.initQuaternion=new Te,this.previousQuaternion=new Te,this.interpolatedQuaternion=new Te,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Bn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Bn,this.fixedRotation=typeof t.fixedRotation!="undefined"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping!="undefined"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ue,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=r.AWAKE,this.wakeUpAfterNarrowphase=!1,t===r.SLEEPING&&this.dispatchEvent(r.wakeupEvent)}sleep(){this.sleepState=r.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===r.AWAKE&&n<i?(this.sleepState=r.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(r.sleepyEvent)):e===r.SLEEPY&&n>i?this.wakeUp():e===r.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(r.sleepEvent))}}updateSolveMassProperties(){this.sleepState===r.SLEEPING||this.type===r.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new w,s=new Te;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let s=0;s!==n;s++){let o=t[s];o.updateBoundingSphereRadius();let a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=l0,o=c0,a=this.quaternion,c=this.aabb,l=h0;for(let h=0;h!==i;h++){let d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=u0,i=d0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=p0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==r.DYNAMIC)return;let n=m0,i=g0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===r.DYNAMIC&&(this.sleepState===r.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=e,i=v0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=y0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==r.DYNAMIC)return;let n=_0,i=x0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=M0;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ya.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===r.DYNAMIC||this.type===r.KINEMATIC)||this.sleepState===r.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;let g=d.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,y=c.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*y),s.y+=t*(g[3]*m+g[4]*p+g[5]*y),s.z+=t*(g[6]*m+g[7]*p+g[8]*y),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Bt.idCounter=0;Bt.COLLIDE_EVENT_NAME="collide";Bt.DYNAMIC=Ca.DYNAMIC;Bt.STATIC=Ca.STATIC;Bt.KINEMATIC=Ca.KINEMATIC;Bt.AWAKE=Pa.AWAKE;Bt.SLEEPY=Pa.SLEEPY;Bt.SLEEPING=Pa.SLEEPING;Bt.wakeupEvent={type:"wakeup"};Bt.sleepyEvent={type:"sleepy"};Bt.sleepEvent={type:"sleep"};var l0=new w,c0=new Te,h0=new Ue,u0=new Bn,d0=new Bn,f0=new Bn,p0=new w,m0=new w,g0=new w,v0=new w,y0=new w,_0=new w,x0=new w,M0=new w,_a=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Bt.STATIC||t.sleepState===Bt.SLEEPING)&&(e.type&Bt.STATIC||e.sleepState===Bt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let s=b0;e.position.vsub(t.position,s);let o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=w0,i=S0,s=E0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new w;t.position.vsub(e.position,n);let i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},b0=new w;new w;new Te;new w;var w0={keys:[]},S0=[],E0=[];new w;var Ey=new w;new w;var xa=class extends _a{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,s=i.length,o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}},Hi=class{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}},rh,oh,ah,lh,ch,hh,uh,La={CLOSEST:1,ANY:2,ALL:4};rh=pt.types.SPHERE;oh=pt.types.PLANE;ah=pt.types.BOX;lh=pt.types.CYLINDER;ch=pt.types.CONVEXPOLYHEDRON;hh=pt.types.HEIGHTFIELD;uh=pt.types.TRIMESH;var ke=class r{get[rh](){return this._intersectSphere}get[oh](){return this._intersectPlane}get[ah](){return this._intersectBox}get[lh](){return this._intersectConvex}get[ch](){return this._intersectConvex}get[hh](){return this._intersectHeightfield}get[uh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=r.ANY,this.result=new Hi,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||r.ANY,this.result=e.result||new Hi,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask!="undefined"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup!="undefined"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse!="undefined"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(jc),fa.length=0,t.broadphase.aabbQuery(t,jc,fa),this.intersectBodies(fa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let i=T0,s=A0;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let s=this.from;if(W0(s,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){let o=this.from,a=this.to,c=this.direction,l=new w(0,0,1);e.vmult(l,l);let h=new w;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let g=new w,v=new w,m=new w;o.vsub(n,g);let p=-l.dot(g)/f;c.scale(p,v),o.vadd(v,m),this.reportIntersection(l,m,s,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;let o=R0;o.from.copy(this.from),o.to.copy(this.to),qt.pointToLocalFrame(n,e,o.from,o.from),qt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=C0,c,l,h,d;c=l=0,h=d=t.data.length-1;let u=new Ue;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),qt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,Zc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),qt.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,Zc)}}}_intersectSphere(t,e,n,i,s){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=P0,g=L0;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{let v=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){let a=I0,c=$c,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=l?l.length:h.length,y=this.result;for(let _=0;!y.shouldStop&&_<p;_++){let x=l?l[_]:_,M=h[x],T=u[x],E=e,U=n;c.copy(d[M[0]]),E.vmult(c,c),c.vadd(U,c),c.vsub(g,c),E.vmult(T,a);let b=f.dot(a);if(Math.abs(b)<this.precision)continue;let A=a.dot(c)/b;if(!(A<0)){f.scale(A,Pe),Pe.vadd(g,Pe),Ze.copy(d[M[0]]),E.vmult(Ze,Ze),U.vadd(Ze,Ze);for(let B=1;!y.shouldStop&&B<M.length-1;B++){en.copy(d[M[B]]),nn.copy(d[M[B+1]]),E.vmult(en,en),E.vmult(nn,nn),U.vadd(en,en),U.vadd(nn,nn);let Y=Pe.distanceTo(g);!(r.pointInTriangle(Pe,Ze,en,nn)||r.pointInTriangle(Pe,en,Ze,nn))||Y>m||this.reportIntersection(a,Pe,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){let a=U0,c=V0,l=H0,h=$c,d=F0,u=O0,f=B0,g=k0,v=z0,m=t.indices;t.vertices;let p=this.from,y=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),qt.vectorToLocalFrame(n,e,_,d),qt.pointToLocalFrame(n,e,p,u),qt.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let x=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let M=0,T=c.length;!this.result.shouldStop&&M!==T;M++){let E=c[M];t.getNormal(E,a),t.getVertex(m[E*3],Ze),Ze.vsub(u,h);let U=d.dot(a),b=a.dot(h)/U;if(b<0)continue;d.scale(b,Pe),Pe.vadd(u,Pe),t.getVertex(m[E*3+1],en),t.getVertex(m[E*3+2],nn);let A=Pe.distanceSquared(u);!(r.pointInTriangle(Pe,en,Ze,nn)||r.pointInTriangle(Pe,Ze,en,nn))||A>x||(qt.vectorToWorldFrame(e,a,v),qt.pointToWorldFrame(n,e,Pe,g),this.reportIntersection(v,g,s,i,E))}c.length=0}reportIntersection(t,e,n,i,s){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s!="undefined"?s:-1,this.mode){case r.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case r.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case r.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ri),n.vsub(e,cs),t.vsub(e,pa);let s=ri.dot(ri),o=ri.dot(cs),a=ri.dot(pa),c=cs.dot(cs),l=cs.dot(pa),h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}};ke.CLOSEST=La.CLOSEST;ke.ANY=La.ANY;ke.ALL=La.ALL;var jc=new Ue,fa=[],cs=new w,pa=new w,T0=new w,A0=new Te,Pe=new w,Ze=new w,en=new w,nn=new w;new w;new Hi;var Zc={faceList:[0]},gr=new w,R0=new ke,C0=[],P0=new w,L0=new w,I0=new w,N0=new w,D0=new w,$c=new w,U0=new w,F0=new w,O0=new w,B0=new w,z0=new w,k0=new w;new Ue;var V0=[],H0=new qt,ri=new w,vr=new w;function W0(r,t,e){e.vsub(r,ri);let n=ri.dot(t);return t.scale(n,vr),vr.vadd(r,vr),e.distanceTo(vr)}var wr=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Ma=class r{constructor(t,e,n){n===void 0&&(n={}),n=wr.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=r.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Ma.idCounter=0;var Sr=class{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},fs=class r{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=r.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Sr,this.jacobianElementB=new Sr,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Kc),a.scale(h,Jc),n.invInertiaWorldSolve.vmult(o,Qc),i.invInertiaWorldSolve.vmult(c,th),t.multiplyVectors(Kc,Qc)+e.multiplyVectors(Jc,th)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=s+o;return a.vmult(t.rotational,yr),l+=yr.dot(t.rotational),c.vmult(e.rotational,yr),l+=yr.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=G0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};fs.idCounter=0;var Kc=new w,Jc=new w,Qc=new w,th=new w,yr=new w,G0=new w,ba=class extends fs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){let e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=q0,l=X0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=s.velocity,f=s.angularVelocity;s.force,s.torque;let g=Y0,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let y=p.dot(g),_=this.restitution+1,x=_*u.dot(p)-_*h.dot(p)+f.dot(l)-d.dot(c),M=this.computeGiMf();return-y*e-x*n-t*M}getImpactVelocityAlongNormal(){let t=j0,e=Z0,n=$0,i=K0,s=J0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}},q0=new w,X0=new w,Y0=new w,j0=new w,Z0=new w,$0=new w,K0=new w,J0=new w;var Ty=new w,Ay=new w;var Ry=new w,Cy=new w;new w;new w;var Py=new w,Ly=new w;var Iy=new w,Ny=new w,Er=class extends fs{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=Q0,o=tv,a=this.t;n.cross(a,s),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},Q0=new w,tv=new w,Tr=class r{constructor(t,e,n){n=wr.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Tr.idCounter=0;var Ar=class r{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=r.idCounter++,this.friction=typeof t.friction!="undefined"?t.friction:-1,this.restitution=typeof t.restitution!="undefined"?t.restitution:-1}};Ar.idCounter=0;var Dy=new w,Uy=new w,Fy=new w,Oy=new w,By=new w,zy=new w,ky=new w,Vy=new w,Hy=new w,Wy=new w,Gy=new w;var qy=new w,Xy=new w;new w;new w;new w;var Yy=new w,jy=new w,Zy=new w;new ke;new w;var $y=new w,Ky=new w,Jy=[new w(1,0,0),new w(0,1,0),new w(0,0,1)],Qy=new w;var t_=new w,e_=new w,n_=new w;var i_=new w,s_=new w,r_=new w,o_=new w;var a_=new w,l_=new w,c_=new w;var Rr=class extends pt{constructor(t){if(super({type:pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){let s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}};var h_=new w,u_=new w;var d_=new w,f_=new w,p_=new w,m_=new w,g_=new w,v_=new w,y_=new w;var Cr=class extends pt{constructor(){super({type:pt.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){let e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){yn.set(0,0,1),e.vmult(yn,yn);let s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),yn.x===1?i.x=t.x:yn.x===-1&&(n.x=t.x),yn.y===1?i.y=t.y:yn.y===-1&&(n.y=t.y),yn.z===1?i.z=t.z:yn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},yn=new w;var __=new w,x_=new w,M_=new w,b_=new w,w_=new w,S_=new w,E_=new w,T_=new w,A_=new w;var R_=new w,C_=new Ue;var P_=new w,L_=new Ue,I_=new w,N_=new w,D_=new w,U_=new w,F_=new w,O_=new w,B_=new w,z_=new Ue,k_=new w,V_=new qt,H_=new Ue,wa=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Sa=class extends wa{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,d,u,f,g,v,m;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();let p=nv,y=iv,_=ev;p.length=a,y.length=a,_.length=a;for(let x=0;x!==a;x++){let M=o[x];_[x]=0,y[x]=M.computeB(h),p[x]=1/M.computeC()}if(a!==0){for(let T=0;T!==l;T++){let E=c[T],U=E.vlambda,b=E.wlambda;U.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){let E=o[T];d=y[T],u=p[T],m=_[T],v=E.computeGWlambda(),f=u*(d-v-E.eps*m),m+f<E.minForce?f=E.minForce-m:m+f>E.maxForce&&(f=E.maxForce-m),_[T]+=f,g+=f>0?f:-f,E.addToWlambda(f)}if(g*g<s)break}for(let T=0;T!==l;T++){let E=c[T],U=E.velocity,b=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),U.vadd(E.vlambda,U),E.wlambda.vmul(E.angularFactor,E.wlambda),b.vadd(E.wlambda,b)}let x=o.length,M=1/h;for(;x--;)o[x].multiplier=_[x]*M}return n}},ev=[],nv=[],iv=[];var W_=Bt.STATIC;var Ea=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},Ta=class extends Ea{constructor(){super(...arguments),this.type=w}constructObject(){return new w}},Kt={sphereSphere:pt.types.SPHERE,spherePlane:pt.types.SPHERE|pt.types.PLANE,boxBox:pt.types.BOX|pt.types.BOX,sphereBox:pt.types.SPHERE|pt.types.BOX,planeBox:pt.types.PLANE|pt.types.BOX,convexConvex:pt.types.CONVEXPOLYHEDRON,sphereConvex:pt.types.SPHERE|pt.types.CONVEXPOLYHEDRON,planeConvex:pt.types.PLANE|pt.types.CONVEXPOLYHEDRON,boxConvex:pt.types.BOX|pt.types.CONVEXPOLYHEDRON,sphereHeightfield:pt.types.SPHERE|pt.types.HEIGHTFIELD,boxHeightfield:pt.types.BOX|pt.types.HEIGHTFIELD,convexHeightfield:pt.types.CONVEXPOLYHEDRON|pt.types.HEIGHTFIELD,sphereParticle:pt.types.PARTICLE|pt.types.SPHERE,planeParticle:pt.types.PLANE|pt.types.PARTICLE,boxParticle:pt.types.BOX|pt.types.PARTICLE,convexParticle:pt.types.PARTICLE|pt.types.CONVEXPOLYHEDRON,cylinderCylinder:pt.types.CYLINDER,sphereCylinder:pt.types.SPHERE|pt.types.CYLINDER,planeCylinder:pt.types.PLANE|pt.types.CYLINDER,boxCylinder:pt.types.BOX|pt.types.CYLINDER,convexCylinder:pt.types.CONVEXPOLYHEDRON|pt.types.CYLINDER,heightfieldCylinder:pt.types.HEIGHTFIELD|pt.types.CYLINDER,particleCylinder:pt.types.PARTICLE|pt.types.CYLINDER,sphereTrimesh:pt.types.SPHERE|pt.types.TRIMESH,planeTrimesh:pt.types.PLANE|pt.types.TRIMESH},Aa=class{get[Kt.sphereSphere](){return this.sphereSphere}get[Kt.spherePlane](){return this.spherePlane}get[Kt.boxBox](){return this.boxBox}get[Kt.sphereBox](){return this.sphereBox}get[Kt.planeBox](){return this.planeBox}get[Kt.convexConvex](){return this.convexConvex}get[Kt.sphereConvex](){return this.sphereConvex}get[Kt.planeConvex](){return this.planeConvex}get[Kt.boxConvex](){return this.boxConvex}get[Kt.sphereHeightfield](){return this.sphereHeightfield}get[Kt.boxHeightfield](){return this.boxHeightfield}get[Kt.convexHeightfield](){return this.convexHeightfield}get[Kt.sphereParticle](){return this.sphereParticle}get[Kt.planeParticle](){return this.planeParticle}get[Kt.boxParticle](){return this.boxParticle}get[Kt.convexParticle](){return this.convexParticle}get[Kt.cylinderCylinder](){return this.convexConvex}get[Kt.sphereCylinder](){return this.sphereConvex}get[Kt.planeCylinder](){return this.planeConvex}get[Kt.boxCylinder](){return this.boxConvex}get[Kt.convexCylinder](){return this.convexConvex}get[Kt.heightfieldCylinder](){return this.heightfieldCylinder}get[Kt.particleCylinder](){return this.particleCylinder}get[Kt.sphereTrimesh](){return this.sphereTrimesh}get[Kt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ta,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new ba(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,v=g.length?g.pop():new Er(n,i,u*f),m=g.length?g.pop():new Er(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];si.setZero(),ki.setZero(),Vi.setZero();let s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(si.vadd(e.ni,si),ki.vadd(e.ri,ki),Vi.vadd(e.rj,Vi)):(si.vsub(e.ni,si),ki.vadd(e.rj,ki),Vi.vadd(e.ri,Vi));let o=1/t;ki.scale(o,n.ri),Vi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),si.normalize(),si.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=ov,l=av,h=sv,d=rv;for(let u=0,f=t.length;u!==f;u++){let g=t[u],v=e[u],m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);let p=g.type&Bt.KINEMATIC&&v.type&Bt.STATIC||g.type&Bt.STATIC&&v.type&Bt.KINEMATIC||g.type&Bt.KINEMATIC&&v.type&Bt.KINEMATIC;for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],c),g.quaternion.vmult(g.shapeOffsets[y],h),h.vadd(g.position,h);let _=g.shapes[y];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);let M=v.shapes[x];if(!(_.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+M.boundingSphereRadius)continue;let T=null;_.material&&M.material&&(T=n.getContactMaterial(_.material,M.material)||null),this.currentContactMaterial=T||m||n.defaultContactMaterial;let E=_.type|M.type,U=this[E];if(U){let b=!1;_.type<M.type?b=U.call(this,_,M,h,d,c,l,g,v,_,M,p):b=U.call(this,M,_,d,h,l,c,v,g,_,M,p),b&&p&&(n.shapeOverlapKeeper.set(_.id,M.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,_r),u.ni.scale(u.ni.dot(_r),eh),_r.vsub(eh,u.rj),-_r.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){let u=this.v3pool,f=Nv;n.vsub(i,xr),e.getSideNormals(f,o);let g=t.radius,v=!1,m=Uv,p=Fv,y=Ov,_=null,x=0,M=0,T=0,E=null;for(let N=0,G=f.length;N!==G&&v===!1;N++){let j=Pv;j.copy(f[N]);let q=j.length();j.normalize();let K=xr.dot(j);if(K<q+g&&K>0){let O=Lv,k=Iv;O.copy(f[(N+1)%3]),k.copy(f[(N+2)%3]);let lt=O.length(),ut=k.length();O.normalize(),k.normalize();let ft=xr.dot(O),xt=xr.dot(k);if(ft<lt&&ft>-lt&&xt<ut&&xt>-ut){let Tt=Math.abs(K-q-g);if((E===null||Tt<E)&&(E=Tt,M=ft,T=xt,_=q,m.copy(j),p.copy(O),y.copy(k),x++,d))return!0}}}if(x){v=!0;let N=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(_,m),p.scale(M,p),m.vadd(p,m),y.scale(T,y),m.vadd(y,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let U=u.get(),b=Dv;for(let N=0;N!==2&&!v;N++)for(let G=0;G!==2&&!v;G++)for(let j=0;j!==2&&!v;j++)if(U.set(0,0,0),N?U.vadd(f[0],U):U.vsub(f[0],U),G?U.vadd(f[1],U):U.vsub(f[1],U),j?U.vadd(f[2],U):U.vsub(f[2],U),i.vadd(U,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;v=!0;let q=this.createContactEquation(a,c,t,e,l,h);q.ri.copy(b),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(U),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(c.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(U),U=null;let A=u.get(),B=u.get(),Y=u.get(),F=u.get(),C=u.get(),I=f.length;for(let N=0;N!==I&&!v;N++)for(let G=0;G!==I&&!v;G++)if(N%3!==G%3){f[G].cross(f[N],A),A.normalize(),f[N].vadd(f[G],B),Y.copy(n),Y.vsub(B,Y),Y.vsub(i,Y);let j=Y.dot(A);A.scale(j,F);let q=0;for(;q===N%3||q===G%3;)q++;C.copy(n),C.vsub(F,C),C.vsub(B,C),C.vsub(i,C);let K=Math.abs(j),O=C.length();if(K<f[q].length()&&O<g){if(d)return!0;v=!0;let k=this.createContactEquation(a,c,t,e,l,h);B.vadd(F,k.rj),k.rj.copy(k.rj),C.negate(k.ni),k.ni.normalize(),k.ri.copy(k.rj),k.ri.vadd(i,k.ri),k.ri.vsub(n,k.ri),k.ri.normalize(),k.ri.scale(g,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(c.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}u.release(A,B,Y,F,C)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,f){let g=Jv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){let v=[],m=Qv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let y=0;y!==v.length;y++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),x=_.ri,M=_.rj;g.negate(_.ni),v[y].normal.negate(m),m.scale(v[y].depth,m),v[y].point.vadd(m,x),M.copy(v[y].point),x.vsub(n,x),M.vsub(i,M),x.vadd(n,x),x.vsub(a.position,x),M.vadd(i,M),M.vsub(c.position,M),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,Bv);let f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius,p=!1;for(let y=0;y!==v.length;y++){let _=v[y],x=Hv;o.vmult(_,x),i.vadd(x,x);let M=Vv;if(x.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;p=!0;let T=this.createContactEquation(a,c,t,e,l,h);T.ri.copy(M),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),x.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let y=0,_=g.length;y!==_&&p===!1;y++){let x=f[y],M=g[y],T=Wv;o.vmult(x,T);let E=Gv;o.vmult(v[M[0]],E),E.vadd(i,E);let U=qv;T.scale(-m,U),n.vadd(U,U);let b=Xv;U.vsub(E,b);let A=b.dot(T),B=Yv;if(n.vsub(E,B),A<0&&B.dot(T)>0){let Y=[];for(let F=0,C=M.length;F!==C;F++){let I=u.get();o.vmult(v[M[F]],I),i.vadd(I,I),Y.push(I)}if(Cv(Y,T,n)){if(d)return!0;p=!0;let F=this.createContactEquation(a,c,t,e,l,h);T.scale(-m,F.ri),T.negate(F.ni);let C=u.get();T.scale(-A,C);let I=u.get();T.scale(-m,I),n.vsub(i,F.rj),F.rj.vadd(I,F.rj),F.rj.vadd(C,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),u.release(C),u.release(I),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let N=0,G=Y.length;N!==G;N++)u.release(Y[N]);return}else for(let F=0;F!==M.length;F++){let C=u.get(),I=u.get();o.vmult(v[M[(F+1)%M.length]],C),o.vmult(v[M[(F+2)%M.length]],I),i.vadd(C,C),i.vadd(I,I);let N=zv;I.vsub(C,N);let G=kv;N.unit(G);let j=u.get(),q=u.get();n.vsub(C,q);let K=q.dot(G);G.scale(K,j),j.vadd(C,j);let O=u.get();if(j.vsub(n,O),K>0&&K*K<N.lengthSquared()&&O.lengthSquared()<m*m){if(d)return!0;let k=this.createContactEquation(a,c,t,e,l,h);j.vsub(i,k.rj),j.vsub(n,k.ni),k.ni.normalize(),k.ni.scale(m,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(c.position,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult);for(let lt=0,ut=Y.length;lt!==ut;lt++)u.release(Y[lt]);u.release(C),u.release(I),u.release(j),u.release(O),u.release(q);return}u.release(C),u.release(I),u.release(j),u.release(O),u.release(q)}for(let F=0,C=Y.length;F!==C;F++)u.release(Y[F])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){let u=jv,f=Zv;f.set(0,0,1),s.vmult(f,f);let g=0,v=$v;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;let y=this.createContactEquation(a,c,t,e,l,h),_=Kv;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,y.ri),y.ni.copy(f),u.vsub(i,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){let u=e.data,f=t.radius,g=e.elementSize,v=uy,m=hy;qt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,y=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(y<0||x<0||p>u.length||_>u[0].length)return;p<0&&(p=0),y<0&&(y=0),_<0&&(_=0),x<0&&(x=0),p>=u.length&&(p=u.length-1),y>=u.length&&(y=u.length-1),x>=u[0].length&&(x=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let M=[];e.getRectMinMax(p,_,y,x,M);let T=M[0],E=M[1];if(m.z-f>E||m.z+f<T)return;let U=this.result;for(let b=p;b<y;b++)for(let A=_;A<x;A++){let B=U.length,Y=!1;if(e.getConvexTrianglePillar(b,A,!1),qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Y=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&Y||(e.getConvexTrianglePillar(b,A,!0),qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(Y=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&Y))return!0;if(U.length-B>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=ly,m=cy,p=ay;qt.pointToLocalFrame(i,o,n,p);let y=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,M=Math.ceil((p.y+g)/f)+1;if(_<0||M<0||y>u.length||x>u[0].length)return;y<0&&(y=0),_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),y>=u.length&&(y=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);let T=[];e.getRectMinMax(y,x,_,M,T);let E=T[0],U=T[1];if(!(p.z-g>U||p.z+g<E))for(let b=y;b<_;b++)for(let A=x;A<M;A++){let B=!1;if(e.getConvexTrianglePillar(b,A,!1),qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&B||(e.getConvexTrianglePillar(b,A,!0),qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&B))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){let u=iy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){let u=ty;u.set(0,0,1),a.quaternion.vmult(u,u);let f=ey;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);let m=ny;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1,f=ry,g=oy,v=null,m=sy;if(m.copy(i),m.vsub(n,m),s.conjugate(nh),nh.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,y=t.faces.length;p!==y;p++){let _=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(_[0],ih);let M=-x.dot(ih);if(v===null||Math.abs(M)<Math.abs(v)){if(d)return!0;v=M,u=p,f.copy(x)}}if(u!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let y=p.ri,_=p.rj;y.vadd(i,y),y.vsub(c.position,y),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){let u=mv,f=gv,g=vv,v=yv,m=_v,p=xv,y=Sv,_=pv,x=dv,M=Ev;qt.pointToLocalFrame(i,o,n,m);let T=t.radius;y.lowerBound.set(m.x-T,m.y-T,m.z-T),y.upperBound.set(m.x+T,m.y+T,m.z+T),e.getTrianglesInAABB(y,M);let E=fv,U=t.radius*t.radius;for(let F=0;F<M.length;F++)for(let C=0;C<3;C++)if(e.getVertex(e.indices[M[F]*3+C],E),E.vsub(m,x),x.lengthSquared()<=U){if(_.copy(E),qt.pointToWorldFrame(i,o,_,E),E.vsub(n,x),d)return!0;let I=this.createContactEquation(a,c,t,e,l,h);I.ni.copy(x),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(E),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let F=0;F<M.length;F++)for(let C=0;C<3;C++){e.getVertex(e.indices[M[F]*3+C],u),e.getVertex(e.indices[M[F]*3+(C+1)%3],f),f.vsub(u,g),m.vsub(f,p);let I=p.dot(g);m.vsub(u,p);let N=p.dot(g);if(N>0&&I<0&&(m.vsub(u,p),v.copy(g),v.normalize(),N=p.dot(v),v.scale(N,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let j=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),qt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,j.rj),qt.vectorToWorldFrame(o,j.ni,j.ni),qt.vectorToWorldFrame(o,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}let b=Mv,A=bv,B=wv,Y=uv;for(let F=0,C=M.length;F!==C;F++){e.getTriangleVertices(M[F],b,A,B),e.getNormal(M[F],Y),m.vsub(b,p);let I=p.dot(Y);if(Y.scale(I,p),m.vsub(p,p),I=p.distanceTo(m),ke.pointInTriangle(p,b,A,B)&&I<t.radius){if(d)return!0;let N=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),qt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,N.rj),qt.vectorToWorldFrame(o,N.ni,N.ni),qt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){let u=new w,f=lv;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let v=new w;v.copy(u),qt.pointToWorldFrame(i,o,v,u);let m=cv;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let y=this.createContactEquation(a,c,t,e,l,h);y.ni.copy(f);let _=hv;f.scale(m.dot(f),_),u.vsub(_,_),y.ri.copy(_),y.ri.vsub(a.position,y.ri),y.rj.copy(u),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},si=new w,ki=new w,Vi=new w,sv=new w,rv=new w,ov=new Te,av=new Te,lv=new w,cv=new w,hv=new w,uv=new w,dv=new w;new w;var fv=new w,pv=new w,mv=new w,gv=new w,vv=new w,yv=new w,_v=new w,xv=new w,Mv=new w,bv=new w,wv=new w,Sv=new Ue,Ev=[],_r=new w,eh=new w,Tv=new w,Av=new w,Rv=new w;function Cv(r,t,e){let n=null,i=r.length;for(let s=0;s!==i;s++){let o=r[s],a=Tv;r[(s+1)%i].vsub(o,a);let c=Av;a.cross(t,c);let l=Rv;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var xr=new w,Pv=new w,Lv=new w,Iv=new w,Nv=[new w,new w,new w,new w,new w,new w],Dv=new w,Uv=new w,Fv=new w,Ov=new w,Bv=new w,zv=new w,kv=new w,Vv=new w,Hv=new w,Wv=new w,Gv=new w,qv=new w,Xv=new w,Yv=new w;new w;new w;var jv=new w,Zv=new w,$v=new w,Kv=new w,Jv=new w,Qv=new w,ty=new w,ey=new w,ny=new w,iy=new w,nh=new Te,sy=new w;new w;var ry=new w,ih=new w,oy=new w,ay=new w,ly=new w,cy=[0],hy=new w,uy=new w,Pr=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,s=n.length,o=i.length,a=0;for(let c=0;c<s;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||sh(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||sh(e,h)}}};function sh(r,t){r.push((t&4294901760)>>16,t&65535)}var ma=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`,Ra=class{constructor(){this.data={keys:[]}}get(t,e){let n=ma(t,e);return this.data[n]}set(t,e,n){let i=ma(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=ma(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Lr=class extends br{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new xa,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Sa,this.constraints=[],this.narrowphase=new Aa(this),this.collisionMatrix=new Mr,this.collisionMatrixPrevious=new Mr,this.bodyOverlapKeeper=new Pr,this.shapeOverlapKeeper=new Pr,this.contactmaterials=[],this.contactMaterialTable=new Ra,this.defaultMaterial=new Ar("default"),this.defaultContactMaterial=new Tr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Hi?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.ALL,n.from=t,n.to=e,n.callback=i,ga.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.ANY,n.from=t,n.to=e,n.result=i,ga.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.CLOSEST,n.from=t,n.to=e,n.result=i,ga.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Bt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let s=0;s<i.length;s++){let o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=he.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=he.now(),s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(he.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=gy,i=vy,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=Bt.DYNAMIC,u=-1/0,f=this.constraints,g=my;c.length();let v=c.x,m=c.y,p=c.z,y=0;for(l&&(u=he.now()),y=0;y!==s;y++){let F=o[y];if(F.type===d){let C=F.force,I=F.mass;C.x+=I*v,C.y+=I*m,C.z+=I*p}}for(let F=0,C=this.subsystems.length;F!==C;F++)this.subsystems[F].update();l&&(u=he.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=he.now()-u);let _=f.length;for(y=0;y!==_;y++){let F=f[y];if(!F.collideConnected)for(let C=n.length-1;C>=0;C-=1)(F.bodyA===n[C]&&F.bodyB===i[C]||F.bodyB===n[C]&&F.bodyA===i[C])&&(n.splice(C,1),i.splice(C,1))}this.collisionMatrixTick(),l&&(u=he.now());let x=py,M=e.length;for(y=0;y!==M;y++)x.push(e[y]);e.length=0;let T=this.frictionEquations.length;for(y=0;y!==T;y++)g.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),l&&(h.narrowphase=he.now()-u),l&&(u=he.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);let E=e.length;for(let F=0;F!==E;F++){let C=e[F],I=C.bi,N=C.bj,G=C.si,j=C.sj,q;if(I.material&&N.material?q=this.getContactMaterial(I.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,I.material&&N.material&&(I.material.friction>=0&&N.material.friction>=0&&I.material.friction*N.material.friction,I.material.restitution>=0&&N.material.restitution>=0&&(C.restitution=I.material.restitution*N.material.restitution)),a.addEquation(C),I.allowSleep&&I.type===Bt.DYNAMIC&&I.sleepState===Bt.SLEEPING&&N.sleepState===Bt.AWAKE&&N.type!==Bt.STATIC){let K=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),O=N.sleepSpeedLimit**2;K>=O*2&&(I.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Bt.DYNAMIC&&N.sleepState===Bt.SLEEPING&&I.sleepState===Bt.AWAKE&&I.type!==Bt.STATIC){let K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),O=I.sleepSpeedLimit**2;K>=O*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,N,!0),this.collisionMatrixPrevious.get(I,N)||(hs.body=N,hs.contact=C,I.dispatchEvent(hs),hs.body=I,N.dispatchEvent(hs)),this.bodyOverlapKeeper.set(I.id,N.id),this.shapeOverlapKeeper.set(G.id,j.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=he.now()-u,u=he.now()),y=0;y!==s;y++){let F=o[y];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(_=f.length,y=0;y!==_;y++){let F=f[y];F.update();for(let C=0,I=F.equations.length;C!==I;C++){let N=F.equations[C];a.addEquation(N)}}a.solve(t,this),l&&(h.solve=he.now()-u),a.removeAllEquations();let U=Math.pow;for(y=0;y!==s;y++){let F=o[y];if(F.type&d){let C=U(1-F.linearDamping,t),I=F.velocity;I.scale(C,I);let N=F.angularVelocity;if(N){let G=U(1-F.angularDamping,t);N.scale(G,N)}}}this.dispatchEvent(fy),l&&(u=he.now());let A=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(y=0;y!==s;y++)o[y].integrate(t,A,B);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=he.now()-u),this.stepnumber+=1,this.dispatchEvent(dy);let Y=!0;if(this.allowSleep)for(Y=!1,y=0;y!==s;y++){let F=o[y];F.sleepTick(this.time),F.sleepState!==Bt.SLEEPING&&(Y=!0)}this.hasActiveBodies=Y}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(_n,xn),t){for(let s=0,o=_n.length;s<o;s+=2)us.bodyA=this.getBodyById(_n[s]),us.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(us);us.bodyA=us.bodyB=null}if(e){for(let s=0,o=xn.length;s<o;s+=2)ds.bodyA=this.getBodyById(xn[s]),ds.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(ds);ds.bodyA=ds.bodyB=null}_n.length=xn.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(_n,xn),n){for(let s=0,o=_n.length;s<o;s+=2){let a=this.getShapeById(_n[s]),c=this.getShapeById(_n[s+1]);Mn.shapeA=a,Mn.shapeB=c,a&&(Mn.bodyA=a.body),c&&(Mn.bodyB=c.body),this.dispatchEvent(Mn)}Mn.bodyA=Mn.bodyB=Mn.shapeA=Mn.shapeB=null}if(i){for(let s=0,o=xn.length;s<o;s+=2){let a=this.getShapeById(xn[s]),c=this.getShapeById(xn[s+1]);bn.shapeA=a,bn.shapeB=c,a&&(bn.bodyA=a.body),c&&(bn.bodyB=c.body),this.dispatchEvent(bn)}bn.bodyA=bn.bodyB=bn.shapeA=bn.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Ue;var ga=new ke,he=globalThis.performance||{};if(!he.now){let r=Date.now();he.timing&&he.timing.navigationStart&&(r=he.timing.navigationStart),he.now=()=>Date.now()-r}new w;var dy={type:"postStep"},fy={type:"preStep"},hs={type:Bt.COLLIDE_EVENT_NAME,body:null,contact:null},py=[],my=[],gy=[],vy=[],_n=[],xn=[],us={type:"beginContact",bodyA:null,bodyB:null},ds={type:"endContact",bodyA:null,bodyB:null},Mn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var dh={type:"change"},Ia={type:"start"},fh={type:"end"},Ir=new Ui,ph=new We,_y=Math.cos(70*Uc.DEG2RAD),Nr=class extends Je{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",S),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dh),n.update(),s=i.NONE},this.update=function(){let D=new z,it=new Ye().setFromUnitVectors(t.up,new z(0,1,0)),J=it.clone().invert(),Et=new z,_t=new Ye,Mt=new z,vt=2*Math.PI;return function(ot=null){let st=n.object.position;D.copy(st).sub(n.target),D.applyQuaternion(it),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&B(b(ot)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ht=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(ht)&&isFinite(at)&&(ht<-Math.PI?ht+=vt:ht>Math.PI&&(ht-=vt),at<-Math.PI?at+=vt:at>Math.PI&&(at-=vt),ht<=at?a.theta=Math.max(ht,Math.min(at,a.theta)):a.theta=a.theta>(ht+at)/2?Math.max(ht,a.theta):Math.min(at,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(J),st.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Q=!1;if(n.zoomToCursor&&T){let gt=null;if(n.object.isPerspectiveCamera){let At=D.length();gt=q(At*l);let ee=At-gt;n.object.position.addScaledVector(x,ee),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let At=new z(M.x,M.y,0);At.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Q=!0;let ee=new z(M.x,M.y,0);ee.unproject(n.object),n.object.position.sub(ee).add(At),n.object.updateMatrixWorld(),gt=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(gt).add(n.object.position):(Ir.origin.copy(n.object.position),Ir.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ir.direction))<_y?t.lookAt(n.target):(ph.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ir.intersectPlane(ph,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Q=!0);return l=1,T=!1,Q||Et.distanceToSquared(n.object.position)>o||8*(1-_t.dot(n.object.quaternion))>o||Mt.distanceToSquared(n.target)>0?(n.dispatchEvent(dh),Et.copy(n.object.position),_t.copy(n.object.quaternion),Mt.copy(n.target),Q=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",tt),n.domElement.removeEventListener("pointerdown",zt),n.domElement.removeEventListener("pointercancel",Gt),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Nt),n.domElement.removeEventListener("pointerup",Gt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,a=new ls,c=new ls,l=1,h=new z,d=new Ot,u=new Ot,f=new Ot,g=new Ot,v=new Ot,m=new Ot,p=new Ot,y=new Ot,_=new Ot,x=new z,M=new Ot,T=!1,E=[],U={};function b(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function B(D){c.theta-=D}function Y(D){c.phi-=D}let F=function(){let D=new z;return function(J,Et){D.setFromMatrixColumn(Et,0),D.multiplyScalar(-J),h.add(D)}}(),C=function(){let D=new z;return function(J,Et){n.screenSpacePanning===!0?D.setFromMatrixColumn(Et,1):(D.setFromMatrixColumn(Et,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(J),h.add(D)}}(),I=function(){let D=new z;return function(J,Et){let _t=n.domElement;if(n.object.isPerspectiveCamera){let Mt=n.object.position;D.copy(Mt).sub(n.target);let vt=D.length();vt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*J*vt/_t.clientHeight,n.object.matrix),C(2*Et*vt/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(J*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),C(Et*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(D){if(!n.zoomToCursor)return;T=!0;let it=n.domElement.getBoundingClientRect(),J=D.clientX-it.left,Et=D.clientY-it.top,_t=it.width,Mt=it.height;M.x=J/_t*2-1,M.y=-(Et/Mt)*2+1,x.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function K(D){d.set(D.clientX,D.clientY)}function O(D){j(D),p.set(D.clientX,D.clientY)}function k(D){g.set(D.clientX,D.clientY)}function lt(D){u.set(D.clientX,D.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let it=n.domElement;B(2*Math.PI*f.x/it.clientHeight),Y(2*Math.PI*f.y/it.clientHeight),d.copy(u),n.update()}function ut(D){y.set(D.clientX,D.clientY),_.subVectors(y,p),_.y>0?N(A()):_.y<0&&G(A()),p.copy(y),n.update()}function ft(D){v.set(D.clientX,D.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(v),n.update()}function xt(D){j(D),D.deltaY<0?G(A()):D.deltaY>0&&N(A()),n.update()}function Tt(D){let it=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),it=!0;break}it&&(D.preventDefault(),n.update())}function bt(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{let D=.5*(E[0].pageX+E[1].pageX),it=.5*(E[0].pageY+E[1].pageY);d.set(D,it)}}function Wt(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{let D=.5*(E[0].pageX+E[1].pageX),it=.5*(E[0].pageY+E[1].pageY);g.set(D,it)}}function fe(){let D=E[0].pageX-E[1].pageX,it=E[0].pageY-E[1].pageY,J=Math.sqrt(D*D+it*it);p.set(0,J)}function Dt(){n.enableZoom&&fe(),n.enablePan&&Wt()}function H(){n.enableZoom&&fe(),n.enableRotate&&bt()}function oe(D){if(E.length==1)u.set(D.pageX,D.pageY);else{let J=dt(D),Et=.5*(D.pageX+J.x),_t=.5*(D.pageY+J.y);u.set(Et,_t)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);let it=n.domElement;B(2*Math.PI*f.x/it.clientHeight),Y(2*Math.PI*f.y/it.clientHeight),d.copy(u)}function wt(D){if(E.length===1)v.set(D.pageX,D.pageY);else{let it=dt(D),J=.5*(D.pageX+it.x),Et=.5*(D.pageY+it.y);v.set(J,Et)}m.subVectors(v,g).multiplyScalar(n.panSpeed),I(m.x,m.y),g.copy(v)}function It(D){let it=dt(D),J=D.pageX-it.x,Et=D.pageY-it.y,_t=Math.sqrt(J*J+Et*Et);y.set(0,_t),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),N(_.y),p.copy(y)}function Ct(D){n.enableZoom&&It(D),n.enablePan&&wt(D)}function jt(D){n.enableZoom&&It(D),n.enableRotate&&oe(D)}function zt(D){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Nt),n.domElement.addEventListener("pointerup",Gt)),nt(D),D.pointerType==="touch"?X(D):ae(D))}function Nt(D){n.enabled!==!1&&(D.pointerType==="touch"?et(D):ue(D))}function Gt(D){yt(D),E.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Nt),n.domElement.removeEventListener("pointerup",Gt)),n.dispatchEvent(fh),s=i.NONE}function ae(D){let it;switch(D.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case ni.DOLLY:if(n.enableZoom===!1)return;O(D),s=i.DOLLY;break;case ni.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;k(D),s=i.PAN}else{if(n.enableRotate===!1)return;K(D),s=i.ROTATE}break;case ni.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;K(D),s=i.ROTATE}else{if(n.enablePan===!1)return;k(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ia)}function ue(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;lt(D);break;case i.DOLLY:if(n.enableZoom===!1)return;ut(D);break;case i.PAN:if(n.enablePan===!1)return;ft(D);break}}function P(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(Ia),xt(D),n.dispatchEvent(fh))}function S(D){n.enabled===!1||n.enablePan===!1||Tt(D)}function X(D){switch(rt(D),E.length){case 1:switch(n.touches.ONE){case ii.ROTATE:if(n.enableRotate===!1)return;bt(),s=i.TOUCH_ROTATE;break;case ii.PAN:if(n.enablePan===!1)return;Wt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(),s=i.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ia)}function et(D){switch(rt(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;wt(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;jt(D),n.update();break;default:s=i.NONE}}function tt(D){n.enabled!==!1&&D.preventDefault()}function nt(D){E.push(D)}function yt(D){delete U[D.pointerId];for(let it=0;it<E.length;it++)if(E[it].pointerId==D.pointerId){E.splice(it,1);return}}function rt(D){let it=U[D.pointerId];it===void 0&&(it=new Ot,U[D.pointerId]=it),it.set(D.pageX,D.pageY)}function dt(D){let it=D.pointerId===E[0].pointerId?E[1]:E[0];return U[it.pointerId]}n.domElement.addEventListener("contextmenu",tt),n.domElement.addEventListener("pointerdown",zt),n.domElement.addEventListener("pointercancel",Gt),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}};var mh=()=>{let r=document.querySelector("canvas.webgl"),t=document.querySelector(".container"),e,n,i,s,o,a,c,l,h,d,u=[],f={eyesNumber:100,eyeRadius:.03,pupilRadius:.08,containerSize:1,gravity:10};v(),g(),p(),a.visible=!0,m(),window.addEventListener("resize",y),t.addEventListener("dblclick",p);function g(){e=new ss({antialias:!0,alpha:!0,canvas:r}),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),n=new lr,i=new Se(45,t.clientWidth/t.clientHeight,.1,100),i.position.set(0,1,.5).multiplyScalar(5),y(),c=new Ce,s=new Nr(i,r),s.enableZoom=!1,s.enablePan=!1,s.minPolarAngle=.1*Math.PI,s.maxPolarAngle=.9*Math.PI,s.autoRotate=!0,s.autoRotateSpeed=19,s.enableDamping=!0;for(let U=0;U<6;U++){let b=new Bt({mass:0,shape:new Cr});o.addBody(b);let A=U%2?1:-1;U<2?(b.position.x=A*.5*f.containerSize,b.quaternion.setFromEuler(0,-A*Math.PI/2,0)):U<4?(b.position.y=A*.5*f.containerSize,b.quaternion.setFromEuler(A*Math.PI/2,0,0)):(b.position.z=A*.5*f.containerSize,U>4&&b.quaternion.setFromEuler(0,Math.PI,0))}a=new Jn({color:15016475,visible:!0}),l=new os(f.eyeRadius,32,32),h=new os(f.pupilRadius,32,32),d=new hr(l,a,f.eyesNumber),n.add(d);for(let U=0;U<f.eyesNumber;U++){u[U]=new Bt({mass:1,shape:new Rr(f.eyeRadius)}),o.addBody(u[U]);let b=new Jn({color:15016475,visible:!0}),A=new Ae(h,b),B=new z((Math.random()-.5)*f.eyeRadius*.5,(Math.random()-.5)*f.eyeRadius*.5,(f.eyeRadius-f.pupilRadius)*-.5);A.position.copy(B);let Y=new Ln;Y.add(d),Y.add(A),Y.position.copy(u[U].position),n.add(Y)}let x=new Qn(f.containerSize,f.containerSize,f.containerSize),M=new rs({color:15016475}),T=new dr(x),E=new ur(T,M);E.scale.set(1,1,1),n.add(E)}function v(){o=new Lr({allowSleep:!0,gravity:new w(0,-f.gravity,0)}),o.defaultContactMaterial.friction=.1,o.defaultContactMaterial.restitution=.9}function m(){s.update(),o.step(1/60);for(let M=0;M<f.eyesNumber;M++)c.position.copy(u[M].position),c.quaternion.copy(u[M].quaternion),c.updateMatrix(),d.setMatrixAt(M,c.matrix);d.instanceMatrix.needsUpdate=!0;let x=new z(0,-f.gravity,0);x.applyQuaternion(i.quaternion),o.gravity.set(x.x,x.y,x.z),e.render(n,i),requestAnimationFrame(m)}function p(){u.forEach(x=>{x.applyImpulse(new w(Math.random()>.5?-7:7,Math.random()>.5?-7:7,Math.random()>.5?-7:7),new w(0,0,0))})}function y(){i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),e.setSize(t.clientWidth,t.clientHeight)}function _(){}};ja();mh();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
