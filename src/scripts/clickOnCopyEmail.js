
document.addEventListener('DOMContentLoaded', function () {
  // Tooltip logic for cursor-dot
  const cursorDot = document.querySelector('.cursor-dot');
  const container = document.querySelector('.footer-primary-up-container');
  let tooltipTimeout;

  function showCursorTooltip(text) {
    if (!cursorDot) return;
    let tooltip = cursorDot.querySelector('.cursor-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'cursor-tooltip';
      cursorDot.appendChild(tooltip);
    }
    tooltip.textContent = text;
    tooltip.style.display = 'block';
  }

  function hideCursorTooltip() {
    if (!cursorDot) return;
    const tooltip = cursorDot.querySelector('.cursor-tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }

  // Move tooltip with cursor
  document.addEventListener('mousemove', function(e) {
    if (!cursorDot) return;
    const tooltip = cursorDot.querySelector('.cursor-tooltip');
    if (tooltip && tooltip.style.display === 'block') {
      tooltip.style.left = '20px';
      tooltip.style.top = '-30px';
      // Tooltip is positioned relative to cursor-dot, which should follow the mouse
    }
  });

  if (container) {
    container.addEventListener('mouseenter', function() {
      showCursorTooltip('copy');
    });
    container.addEventListener('mouseleave', function() {
      hideCursorTooltip();
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
    });
    container.addEventListener('mousedown', function() {
      showCursorTooltip('Email Copied');
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
      tooltipTimeout = setTimeout(() => {
        showCursorTooltip('copy');
      }, 1000);
    });
  }
  // Make the entire .footer-primary-up-container clickable to copy the email
  if (container) {
    container.style.cursor = 'pointer';
    container.addEventListener('click', function (event) {
      // Prevent default if user clicks the link
      if (event.target.tagName === 'A') {
        event.preventDefault();
      }
      // Find the email link inside the container
      const emailLink = container.querySelector('.email-link-click-to-copy');
      if (emailLink) {
        let email = '';
        const href = emailLink.getAttribute('href');
        if (href && href.startsWith('mailto:')) {
          email = href.replace('mailto:', '');
        } else {
          email = emailLink.textContent.trim();
        }
        copyToClipboard(email);
        // Show tooltip only on mobile
        if (isMobileDevice()) {
          showCopyConfirmationTooltip(container);
        }
      }
    });
  }

  // Function to copy text to clipboard (remains the same)
  function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }

  // Function to show a confirmation tooltip (for mobile only)
  function showCopyConfirmationTooltip(element) {
    element.classList.add('copied-tooltip');
    element.setAttribute('data-tooltip', 'Email Copied!');
    setTimeout(() => {
      element.classList.remove('copied-tooltip');
      element.removeAttribute('data-tooltip');
    }, 1000);
  }

  // Helper to detect mobile devices
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
});