document.addEventListener('DOMContentLoaded', () => {
  const marqueeContent1 = document.getElementById('marquee-content-1');
  const marqueeContent2 = document.getElementById('marquee-content-2');
  const rootStyles = getComputedStyle(document.documentElement);
  const speedPxPerSecond = parseFloat(rootStyles.getPropertyValue('--marquee-speed-px-per-second'));

  // Function to calculate and set animation duration for both content blocks
  const setMarqueeDuration = () => {
    // We need the width of *one* of the content blocks.
    // marqueeContent1.scrollWidth gives us the full width of one block,
    // including its children and their margins.
    const contentWidth = marqueeContent1.scrollWidth;

    // Calculate the duration based on content width and desired speed
    // The animation needs to travel the full width of one content block.
    const animationDuration = contentWidth / speedPxPerSecond; // in seconds

    // Apply the calculated duration to both content blocks
    marqueeContent1.style.animationDuration = `${animationDuration}s`;
    marqueeContent2.style.animationDuration = `${animationDuration}s`;

    // The keyframe will automatically handle the -100% translation of each item
    // causing it to loop perfectly.
  };

  // Call the function initially
  setMarqueeDuration();

  // Recalculate if window is resized
  window.addEventListener('resize', setMarqueeDuration);
});