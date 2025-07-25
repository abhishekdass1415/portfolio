document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio loaded successfully.");
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
