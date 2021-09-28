import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery')


const galleryArrayEl = galleryItems.map(image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>
`).join('');

galleryBoxEl.insertAdjacentHTML('afterbegin', galleryArrayEl)

galleryBoxEl.addEventListener("click", openBigImage)

function openBigImage(evt) {
    
    evt.preventDefault()
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

    instance.show()
    if (instance.show) {
        addEventListener('keydown', () => {
            if (event.code !== "Escape") {
                return
            }
            instance.close()
        })
    }
}

