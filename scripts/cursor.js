const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorAnotherOutline = document.querySelector("[data-another-cursor-outline]");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {
    duration: 500, fill: "forwards"
  });
  cursorAnotherOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {
    duration: 1000, fill: "forwards"
  });

});

window.addEventListener("click", function (e) {

  cursorOutline.style.height = `20px`;
  cursorOutline.style.width = `20px`;

  // cursorAnotherOutline.style.height = `30px`;
  // cursorAnotherOutline.style.width = `30px`;

  setTimeout(() => {
    onClick();
  }, 100);

});

function onClick() {
  cursorOutline.style.height = `30px`;
  cursorOutline.style.width = `30px`;

  // cursorAnotherOutline.style.height = `45px`;
  // cursorAnotherOutline.style.width = `45px`;
}


const hoverSubsectionFooterPrimary = document.querySelector('.footer-primary');
const hoverSubsectionAbout = document.querySelector('.intro');
const targetSubsection = document.querySelector('.cursor-dot');

if (hoverSubsectionFooterPrimary && targetSubsection) {
  hoverSubsectionFooterPrimary.addEventListener('mouseenter', () => {
    targetSubsection.style.backgroundColor = 'white';
  });

  hoverSubsectionFooterPrimary.addEventListener('mouseleave', () => {
    targetSubsection.style.backgroundColor = 'black'; // Revert to the original color
  });
}
if (hoverSubsectionAbout && targetSubsection) {
  hoverSubsectionAbout.addEventListener('mouseenter', () => {
    targetSubsection.style.backgroundColor = 'white';
  });

  hoverSubsectionAbout.addEventListener('mouseleave', () => {
    targetSubsection.style.backgroundColor = 'black'; // Revert to the original color
  });
}