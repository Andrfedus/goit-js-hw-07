
import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector(".gallery");
const imagesAll = createGalleryImg(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imagesAll);

function createGalleryImg() {
    return galleryItems.map(({ preview, original, description }) => {
      return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
 
};

const onGalleryClick = (event) => {
    event.preventDefault();


const imageElem = event.target.dataset.source;
    if (!imageElem) return;
const instance = basicLightbox.create(`
    <img src="${imageElem}"width="800" height="600">`);

  instance.show();
};
galleryList.addEventListener("click", onGalleryClick);