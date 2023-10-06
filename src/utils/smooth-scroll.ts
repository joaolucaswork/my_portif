import LoconativeScroll from 'loconative-scroll';

export const smoothScroll = () => {
  // Initialize LoconativeScroll
  new LoconativeScroll({
    smooth: true,
    speed: 3000, // Increase the speed to 1000ms (1 second)
    easing: 'easeInOutQuad', // Use the 'easeInOutQuad' easing function
  });
};
