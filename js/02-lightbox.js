import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");
const imagesAll = createGalleryImg(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imagesAll);


function createGalleryImg() {
    return galleryItems.map(({ preview, original, description }) => {
      return  `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join("");
 
};


const gallery = new SimpleLightbox('.gallery a', {
captionsData: "alt",
captionType: "alt",
captionDelay: 250,
});



console.log(galleryItems);
