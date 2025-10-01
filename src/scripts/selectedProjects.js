// ---

/**
 * Handles autoplay and looping on hover for video containers.
 * When a user hovers over a '.video-container', the video inside will play and loop.
 * When the hover ends, the video will pause, reset, and show its poster.
 */
document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.video-content'); // Assuming .video-content is the video element
  if (video) {
    container.addEventListener('mouseenter', () => {
      video.play();
      video.loop = true; // Enable looping when hovering
    });

    container.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.loop = false; // Disable looping when mouse leaves
      video.load(); // Show poster if set
    });
  }
});

// ---

/**
 * Manages responsive autoplay for all videos based on screen width.
 * If the screen width is 530px or less, all videos with the class '.video-content' will autoplay, loop, and be muted.
 * Otherwise, they will be paused, reset, and their posters will be shown.
 * Muting is crucial for autoplay policies in many browsers.
 */
function handleResponsiveAutoplay() {
  const isSmallScreen = window.innerWidth <= 530;
  const videos = document.querySelectorAll('.video-content');

  videos.forEach(video => {
    if (isSmallScreen) {
      video.play();
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.setAttribute('muted', '');
    } else {
      video.pause();
      video.removeAttribute('autoplay');
      video.removeAttribute('loop');
      video.removeAttribute('muted');
      video.currentTime = 0;
      video.load();
    }
  });
}

// Attach the responsive autoplay handler to window resize and DOM content loaded events
window.addEventListener('resize', handleResponsiveAutoplay);
window.addEventListener('DOMContentLoaded', handleResponsiveAutoplay);