import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryConteiner = document.querySelector('.gallery')
const cardMarkup = createGalleryBlock(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend', cardMarkup);


// console.log(createGalleryBlock(galleryItems));
  

function createGalleryBlock(galleryItems) {
    return galleryItems.map(({original,preview,description}) =>{
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`}).join('');
} 
    
    var lightbox = new SimpleLightbox('.gallery__item', { captionsData: "alt",
  captionDelay: 250, });
