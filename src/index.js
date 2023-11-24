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

const form = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");
const API_KEY = '40845730-59b552d3cf1577a71be805545';
const BASE_URL = 'https://pixabay.com/api/';
let searchQueryRes = '';

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // читаємо инпут:
    // searchQueryRes = event.target.elements.searchQuery.value;
    // console.log(searchQuery);
    const { elements: { searchQuery } } = event.target;
    searchQueryRes = searchQuery.value;
    console.log("searchQueryRes =>", searchQueryRes);
})