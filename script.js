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

// Scroll reveal animation
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Preloader logic
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
});
