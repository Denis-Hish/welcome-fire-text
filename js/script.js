window.addEventListener('load', function () {
   const welcomeFireText = document.querySelector('.welcome-fire-text');
   const heroSection = document.getElementById('hero-section');

   setTimeout(() => {
      welcomeFireText.style.opacity = 0;
   }, 8000);
   setTimeout(() => {
      welcomeFireText.style.display = 'none';
      heroSection.style.opacity = 1;
   }, 9500);
});

document.addEventListener('DOMContentLoaded', function () {
   const btn = document.querySelector('.theme-toggle');
   btn.addEventListener('click', function () {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
   });
});
