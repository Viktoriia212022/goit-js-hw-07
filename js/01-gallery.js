import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryConteiner = document.querySelector('.gallery')
const cardMarkup = createGalleryBlock(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend', cardMarkup);


// console.log(createGalleryBlock(galleryItems));
  

function createGalleryBlock(galleryItems) {
    return galleryItems.map(({original,preview,description}) =>{
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join('');
    } 


galleryConteiner.addEventListener('click', onImageContainerClick);

function onImageContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName!== "IMG") {
        return;
    };
    console.log(evt.target.nodeName);

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" with=800 height=600>
`)

instance.show()
}









