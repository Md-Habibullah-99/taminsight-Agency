// Add autoplay on hover for all videos
const videos = document.querySelectorAll('.video-content');
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Optional: reset to start
  });
});

// Special handling for the second video to autoplay on hover and show poster on mouseleave
const poster_01 = document.querySelector('video[poster="tamim-khan-eid-ul-adha-post-02-01.jpg"]');
if (poster_01) {
  poster_01.addEventListener('mouseenter', () => {
    poster_01.play();
  });
  poster_01.addEventListener('mouseleave', () => {
    poster_01.pause();
    poster_01.currentTime = 0;
    poster_01.load(); // Show poster
  });
}

// Special handling for the marked video to autoplay on hover and show poster on mouseleave
const poster_02 = document.querySelector('video[poster="tamim-khan-eid-ul-adha-post-01.jpg"]');
if (poster_02) {
  poster_02.addEventListener('mouseenter', () => {
    poster_02.play();
  });
  poster_02.addEventListener('mouseleave', () => {
    poster_02.pause();
    poster_02.currentTime = 0;
    poster_02.load(); // Show poster
  });
}

// Special handling for the first video to autoplay on hover and show poster on mouseleave
const showPoster = document.querySelector('.video-content');
if (showPoster) {
  showPoster.addEventListener('mouseenter', () => {
    showPoster.play();
  });
  showPoster.addEventListener('mouseleave', () => {
    showPoster.pause();
    showPoster.currentTime = 0;
    showPoster.load(); // Show poster if set
  });
}

// Autoplay all videos if window width <= 530px
function handleResponsiveAutoplay() {
  const isSmallScreen = window.innerWidth <= 530;
  const videos = document.querySelectorAll('.video-content');
  videos.forEach(video => {
    if (isSmallScreen) {
      video.play();
      video.setAttribute('autoplay', '');
    } else {
      video.pause();
      video.removeAttribute('autoplay');
      video.currentTime = 0;
      video.load();
    }
  });
}

window.addEventListener('resize', handleResponsiveAutoplay);
window.addEventListener('DOMContentLoaded', handleResponsiveAutoplay);
