// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const current = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.style.textDecoration = 'underline';
    }
  });
});

// Scroll to top button (if you add one in HTML)
const scrollToTopBtn = document.getElementById("scrollToTop");

if (scrollToTopBtn) {
  window.onscroll = function () {
    scrollToTopBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
  };

  scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
