import SIDE_PICTURES from "../data/side-pictures.js";
import sidePictureTemplate from "../template/sidePuctureTemplate.js";
import modalWindowTemplate from "../template/modalWindowTemplate.js";

class CardProductView {
  #eventListeners = {
    handleEvent: (event) => {
      event.preventDefault();

      switch (event.currentTarget) {
        case this.#cardProduct:
          const cartProductTarget = event.target;

          if (cartProductTarget.closest(".side-picture__icon")) {
            const pictureId = Number(cartProductTarget.dataset.icon);
            this.#onLoadingSliderSlide(pictureId);
          }

          if (cartProductTarget.closest(".buy-one-click__link")) {
            this.#openModalWindow();
          }

          if (cartProductTarget.closest(".modal-window__close-btn")) {
            this.#hideModalWindow();
          }

          break;
      }
    },
  };

  #cardProduct = null;
  #sidePicturesRow = null;
  #sliderSlides = null;
  #modalWindow = null;

  constructor() {
    this.#initTemplate();
    this.#onLoadingSidePictures();
    this.#onLoadingSliderSlide(1);
    this.#bindListener();
  }

  #initTemplate() {
    const body = document.body;
    this.#cardProduct = body.querySelector(".page__card-product");
    this.#sidePicturesRow = this.#cardProduct.querySelector(
      ".side-pictures__row"
    );
    this.#sliderSlides = this.#cardProduct.querySelector(".slider__slides");
    this.#modalWindow = this.#cardProduct.querySelector(
      ".card-product__modal-window"
    );
  }

  #bindListener() {
    this.#cardProduct.addEventListener("click", this.#eventListeners);
    this.#sliderSlides.addEventListener(
      "mousemove",
      this.#zoomPicture.bind(this)
    );
    this.#sliderSlides.addEventListener(
      "mouseleave",
      this.#resetZoomPicture.bind(this)
    );
  }

  #onLoadingSidePictures() {
    this.#sidePicturesRow.appendChild(
      SIDE_PICTURES.reduce((fragment, item) => {
        const sidePictureView = sidePictureTemplate.content.cloneNode(true);

        const element = sidePictureView.querySelector(
          ".side-pictures__picture"
        );
        const image = element.querySelector(".side-picture__icon");
        image.src = item.src;
        image.dataset.icon = item.id;

        fragment.appendChild(sidePictureView);
        return fragment;
      }, document.createDocumentFragment())
    );
  }

  #onLoadingSliderSlide(id) {
    const allSidePictures = Array.from(
      this.#sidePicturesRow.querySelectorAll(".side-pictures__picture")
    );

    const currentElement = SIDE_PICTURES.find((item) => {
      return item.id === id;
    });

    this.#sliderSlides.style.backgroundImage = `url(${currentElement.src})`;
    this.#sliderSlides.style.backgroundSize = `${100}% ${100}%`;
    this.#sliderSlides.style.backgroundRepeat = "no-repeat";

    allSidePictures.forEach((item) => {
      item.classList.remove("active");
    });

    allSidePictures[id - 1].classList.add("active");
  }

  #zoomPicture(event) {
    event.preventDefault();
    const widthScreen = document.documentElement.clientWidth;

    if (widthScreen > 1200) {
      const position = this.#getCursorPosition();

      let x = position.x - 7 / 2;
      let y = position.y - 7 / 2;

      if (x > this.#sliderSlides.offsetWidth - 1) {
        x = this.#sliderSlides.offsetWidth - 1;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > this.#sliderSlides.offsetHeight - 1) {
        y = this.#sliderSlides.offsetHeight - 1;
      }
      if (y < 0) {
        y = 0;
      }

      this.#sliderSlides.style.backgroundSize = `${300 * 6}px ${300 * 6}px`;
      this.#sliderSlides.style.backgroundPosition =
        "-" + x * 1.2 + "px -" + y * 1 + "px";
    } else {
      this.#sliderSlides.style.backgroundSize = `${100}% ${100}%`;
      this.#sliderSlides.style.backgroundPosition = "0px";
    }
  }

  #resetZoomPicture(event) {
    event.preventDefault();

    this.#sliderSlides.style.backgroundSize = `${100}% ${100}%`;
    this.#sliderSlides.style.backgroundPosition = "0px";
  }

  #getCursorPosition(event) {
    let x = 0,
      y = 0;

    event = event || window.event;
    const rect = this.#sliderSlides.getBoundingClientRect();

    x = event.pageX - rect.left;
    y = event.pageY - rect.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { x: x, y: y };
  }

  #openModalWindow() {
    const modalWindowView = modalWindowTemplate.content.cloneNode(true);

    this.#modalWindow.innerHTML = "";
    this.#modalWindow.appendChild(modalWindowView);
  }

  #hideModalWindow() {
    this.#modalWindow.innerHTML = "";
  }
}

export default CardProductView;
