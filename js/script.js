// Вступительная анимация
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

// Переключение тёмной/светлой темы
const btnThemeToggle = document.querySelector('.theme-toggle');
btnThemeToggle.addEventListener('click', function () {
   const currentTheme = document.body.className;
   if (currentTheme === 'light-theme') {
      document.body.className = 'dark-theme';
   } else {
      document.body.className = 'light-theme';
   }
});

// Когда загрузится весь DOM контент
// document.addEventListener('DOMContentLoaded', function () {});
