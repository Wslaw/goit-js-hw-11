const backButton = document.createElement('button');
backButton.textContent = 'Back to top';
backButton.classList.add('back-button');
backButton.classList.add('is-hidden');
document.body.appendChild(backButton);

backButton.addEventListener('click', () => {
  // Вернуться к началу страницы
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// document.addEventListener('DOMContentLoaded', function () {
//   const backToTopBtn = document.getElementById('backToTopBtn');

//   // Показываем/скрываем кнопку при прокрутке
//   window.addEventListener('scroll', function () {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       backToTopBtn.style.display = 'block';
//     } else {
//       backToTopBtn.style.display = 'none';
//     }
//   });

//   // Прокрутка вверх при клике на кнопку
//   backToTopBtn.addEventListener('click', function () {
//     document.body.scrollTop = 0; // Для Safari
//     document.documentElement.scrollTop = 0; // Для других браузеров
//   });
// });
