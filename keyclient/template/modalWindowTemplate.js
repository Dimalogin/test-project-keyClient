const modalWindowTemplate = document.createElement("template");

modalWindowTemplate.innerHTML = `
<div class="modal-window__content">
<div class="modal-window__body">
  <button class="modal-window__close-btn window-close-btn">
    <img
      class="window-close-btn__icon"
      src="./images/other/close-modal.svg"
      alt="window-close-btn__icon"
    />
  </button>
  <div class="modal-window__title">Купить в 1 клик</div>
  <form class="modal-window__form form-modal">
    <input
      class="form-modal__input-tel"
      type="tel"
      placeholder="+7 (---) --- -- --"
    />
    <input
      class="form-modal__input-name"
      type="text"
      placeholder="Ваше имя"
    />

    <hr
      class="modal-window__line"
      size="3px"
      color="#E6E9F0"
      width="100%"
    />

    <div class="form-modal__agreement agreement">
      <span class="agreement__text">
        Нажимая кнопку “Отправить”, я даю согласие на обработку моих
        персональных данных в соответствии с
      </span>
      <a class="agreement__link" href=""
        >Условиями конфиденциальности</a
      >
    </div>
    <button class="form-modal__btn-send">Отправить</button>
  </form>
</div>
</div>
`;

export default modalWindowTemplate;
