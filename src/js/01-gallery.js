// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);


const galleryMarkup = createGalleryMarkup(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  const markup = items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join("");

  return markup;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});

