const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .research-title, .research-body, .about-intro, .facts, .experience-grid')
  .forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = 'opacity .7s ease, transform .7s ease';
    observer.observe(element);
  });

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:none!important}';
document.head.append(style);
