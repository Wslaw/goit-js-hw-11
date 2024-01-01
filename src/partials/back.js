import { currentPage } from "../index";

window.backButton = document.createElement('button');
window.backButton.classList.add('back-button');
window.backButton.textContent = 'Back to top';
window.backButton.classList.add('is-hidden');
document.body.appendChild(backButton);

window.backButton.addEventListener('click', () => {
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
// Генерация случайной страницы при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
  // Определите ваш диапазон страниц
  const minPage = 1;
  const maxPage = 10;

  // Генерация случайной страницы для запроса
  const randomPage = Math.floor(Math.random() * (maxPage - minPage + 1)) + minPage;

  // Присвоение случайной страницы currentPage
  currentPage = randomPage;

  // Вызываем функцию fetchImages из глобального объекта window
  if (window.fetchImages) {
    await window.fetchImages();
  }
});