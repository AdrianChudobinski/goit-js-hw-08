'use strict';

import { galleryItems } from './gallery-items.js';


import SimpleLightbox from 'simplelightbox';


import 'simplelightbox/dist/simple-lightbox.min.css';



console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

let template = galleryItems
  .map(
    item =>
      `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', template);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
