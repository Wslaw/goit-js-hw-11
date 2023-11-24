// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import Notiflix from 'notiflix';

// var API_KEY = '40845730-59b552d3cf1577a71be805545';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// 1.Обробка форми поиска
// 2.Створити функцію для виконання HTTP-запита
// 3.Створити функцию для рендеринга карток зображень
// 4.Створити функцию для розмітки карток зображень
// 5.Створити скролл
const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const API_KEY = '40845730-59b552d3cf1577a71be805545';
const BASE_URL = 'https://pixabay.com/api/';
const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery-item');




let searchQueryRes = '';
let currentPage = 1;
// let backButton;

loadMoreBtn.classList.add('is-hidden');

loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.classList.add('is-hidden');
    backButton.classList.remove('is-hidden');
    fetchImages();
})
form.addEventListener('submit', async event => {
  event.preventDefault();
  // читаємо инпут:
  // searchQueryRes = event.target.elements.searchQuery.value;
  // console.log(searchQuery);
  const {
    elements: { searchQuery },
  } = event.target;
  searchQueryRes = searchQuery.value.trim();
  console.log('searchQueryRes =>', searchQueryRes);
    searchQuery.value = '';/* text delete */
    if (!searchQueryRes) {
        Notiflix.Notify.failure('Please enter a search query');
        return;
    }
    currentPage = 1;
    gallery.innerHTML = ''; 
    await fetchImages();
});

// 3step

const fetchImages = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}?key=${API_KEY}&q=${searchQueryRes}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`
        );
        const { totalHits, hits } = response.data;
        console.log(response.data);
        if (hits.length === 0) {
            Notiflix.Notify.warning(
                'Sorry, there are no images matching your search query. Please try again.', 5000
            );
            return;
        }

        // Render
        renderImages(hits);
        // LoadMore- is hidden?
        if (hits.length < totalHits) {
            loadMoreBtn.classList.remove('is-hidden');

        } else {
            loadMoreBtn.classList.add('is-hidden');
            Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
        }
        currentPage += 1;
        updateLightbox();
        
    } catch (error) {
        console.error('Error fetching images:', error);
        Notiflix.Notify.failure('Something went wrong. Please try again later.');
    }

};

const updateLightbox = () => {
    lightbox.refresh();
}

const renderImages = (images) => {
  /*Перебираємо масив зображень та створюємо для нього карточку:*/
  const imageCards = images.map(image => {
    /*Викликаємо фукцію createImageCard для створення HTML розмітки:*/
    const cardMarkUp = createImageCard(image);
    /* возвращаем разметку карточки: */
    return cardMarkUp;
  }); //Поєднуємо всі картки в один рядок
  const allCardsMarkUp = imageCards.join('');
  // Вставляємо розмітку всіх карток у кінец галлереї
  gallery.insertAdjacentHTML('beforeend', allCardsMarkUp);
};

const createImageCard = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<div class="photo-card">
    <a href="${largeImageURL}" class="gallery-item" data-lightbox="gallery" data-title="${tags}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item"><b>Likes:</b> ${likes}</p>
      <p class="info-item"><b>Views:</b> ${views}</p>
      <p class="info-item"><b>Comments:</b> ${comments}</p>
      <p class="info-item"><b>Downloads:</b> ${downloads}</p>
    </div>
  </div>`;
}
// 6 Step
// const updateLightbox = () => {
//     const lightbox = new SimpleLightbox('.gallery');
//     lightbox.show();
//     lightbox.refresh();
// }