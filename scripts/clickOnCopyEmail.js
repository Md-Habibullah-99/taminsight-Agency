
document.addEventListener('DOMContentLoaded', function () {
  // Option 1: Using a class on <a> tags
  const copyLinks = document.querySelectorAll('.email-link-click-to-copy');
  copyLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the link from navigating

      const linkURL = this.getAttribute('href');
      copyToClipboard(linkURL);
      showCopyConfirmationTooltip(this); // Use the tooltip function
    });
  });

  // Function to copy text to clipboard (remains the same)
  function copyToClipboard(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }

  // Function to show a confirmation tooltip
  function showCopyConfirmationTooltip(element) {
    element.classList.add('copied-tooltip');
    element.setAttribute('data-tooltip', 'Copied!');

    // Remove the tooltip class after a delay
    setTimeout(() => {
      element.classList.remove('copied-tooltip');
      element.removeAttribute('data-tooltip');
    }, 1000);
  }
});