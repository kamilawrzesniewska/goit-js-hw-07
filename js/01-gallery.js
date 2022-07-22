import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryList =  document.querySelector(".gallery");



const galleryItemsElement = galleryItems.map(element => {
            const image = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
      return image;
      })
      .join(" ");

      
galleryList.insertAdjacentHTML("beforeend", galleryItemsElement);   


let imgModal;

galleryList.addEventListener("click", imgWindow);

function imgWindow(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  imgModal = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`, {
    onShow: () => {
      window.addEventListener("keydown", closeWindow);
    },
    onClose: () => {
      window.removeEventListener("keydown", closeWindow);
    },
  });

  imgModal.show();
}
function closeWindow(event) {
    if (event.code !== "Escape") {
      return;
    }
    imgModal.close();
  }





  
