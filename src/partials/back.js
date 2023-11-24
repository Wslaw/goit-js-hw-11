const backButton = document.createElement('button');
backButton.textContent = 'Back to top';
backButton.classList.add('back-button');
document.body.appendChild(backButton);



backButton.addEventListener('click', () => {
  // Вернуться к началу страницы
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
