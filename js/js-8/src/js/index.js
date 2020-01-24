'use strict';
import { default as galleryItems } from '../js/gallery-items.js';

// console.log(galleryItems);
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

// Yавигация влево-вправо по картинкам

function navigatImg(event) {
  const images = [...document.querySelectorAll('.gallery__image')];
  console.log("images:",  images);

  const imagesSrc = images.map(el => el.dataset.source);
  console.log("imagesSrc:",  imagesSrc[imagesSrc.length-1]);

  const iD = imagesSrc.indexOf(refs.lightbox__image.src);
  console.log("iD:",  iD);

  if (event.key === 'ArrowLeft') {
    if(iD === 0) {
      return refs.lightbox__image.src = `${imagesSrc[imagesSrc.length-1]}`;
    }
    refs.lightbox__image.src = `${imagesSrc[iD - 1]}`;
  }
  if (event.key === 'ArrowRight') {
    if(iD === imagesSrc.length-1) {
      return refs.lightbox__image.src = `${imagesSrc[0]}`;
    }
      refs.lightbox__image.src = `${imagesSrc[iD + 1]}`;
  }
};

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
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target === e.currentTarget) {
    return;
  }

  refs.lightbox__image.src = e.target.dataset.source;
  refs.lightbox__image.alt = e.target.alt;
  refs.lightbox.classList.add('is-open');
  window.addEventListener('keydown', navigatImg);
});

// Закрываем модальное окно
refs.lightbox.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    cancellLightbox();
  }
  window.addEventListener('keydown', navigatImg);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    cancellLightbox();
  }
});
