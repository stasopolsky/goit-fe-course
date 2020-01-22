'use strict';
import { default as galleryItems } from '../js/gallery-items.js';

console.log(galleryItems);
// Обьект путей
const refs = {
  gallery: document.querySelector('.gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightbox__image: document.querySelector('.lightbox__image'),
};

//Функция для добавления в галерею елементов из масива обьектов
function collectGalleryItem(items) {
  return items.reduce((acc, item) => {
    acc += `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${item.original}"
      >
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
      `;
    return acc;
  }, '');
}
//Функция для добавления в HTML элементы галереи
function addGallery(domElement, htmlString) {
  domElement.insertAdjacentHTML('beforeend', `${htmlString}`);
}

//вызываем функцию добавления елементов галереи

addGallery(refs.gallery, collectGalleryItem(galleryItems));

//Функция закрытия модального окна

function cancellLightbox() {
  refs.lightbox.classList.remove('is-open');
  refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
}

// Открываем модальное окно

refs.gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  refs.lightbox__image.src = e.target.dataset.source;
  refs.lightbox__image.alt = e.target.alt;
  refs.lightbox.classList.add('is-open');
});

// Закрываем модальное окно

refs.lightbox.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    cancellLightbox();
  }
});
document.addEventListener('keydown', event => {
  if (event.which !== 27) {
    return;
  }
  cancellLightbox();
});
