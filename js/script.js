// Вступительная анимация / Introductory animation
window.addEventListener('load', function () {
   const welcomeFireText = document.querySelector('.welcome-fire-text');
   const heroSection = document.getElementById('hero-section');

   setTimeout(() => {
      welcomeFireText.style.opacity = 0;
      heroSection.style.display = 'block';
   }, 8000);
   setTimeout(() => {
      welcomeFireText.style.display = 'none';
      heroSection.style.opacity = 1;
   }, 9500);
});

// Переключение темы / Toggle theme
document.addEventListener('DOMContentLoaded', function () {
   const btnThemeToggle = document.querySelector('.theme-toggle');
   const currentTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
         ? 'dark-theme'
         : 'light-theme');

   document.body.className = currentTheme;
   localStorage.setItem('theme', currentTheme);

   btnThemeToggle.addEventListener('click', function () {
      const currentTheme = document.body.className;
      const newTheme =
         currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

      document.body.className = newTheme;
      localStorage.setItem('theme', newTheme);
   });
});

// Когда загрузится весь DOM контент
// document.addEventListener('DOMContentLoaded', function () {});
