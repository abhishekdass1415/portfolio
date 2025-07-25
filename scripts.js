// scripts.js

// Add this script tag in your HTML file's <head> or before </body>:
// <script src="scripts.js" defer></script>

// Also link your CSS file in <head> as:
// <link rel="stylesheet" href="styles.css">

document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio loaded successfully.");

  // Scroll reveal for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-section').forEach(section => {
    section.classList.add('opacity-0');
    observer.observe(section);
  });
});
