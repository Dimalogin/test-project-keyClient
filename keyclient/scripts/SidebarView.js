class SidebarView {
  #eventListeners = {
    handleEvent: (event) => {
      event.preventDefault();

      switch (event.currentTarget) {
        case this.#header:
          const targetHeader = event.target;

          if (targetHeader.closest(".sidebar__hamb")) {
            this.#showSidebarPanel();
          }

          if (targetHeader.closest(".panel__close-btn")) {
            this.#hideSidebarPanel();
          }

          break;
      }
    },
  };

  #header = null;
  #sidebarPanel = null;

  constructor() {
    this.#initTemplate();
    this.#bindListeners();
  }

  #initTemplate() {
    const body = document.body;
    this.#header = body.querySelector(".header");
    this.#sidebarPanel = this.#header.querySelector(".sidebar__panel");
  }

  #bindListeners() {
    this.#header.addEventListener("click", this.#eventListeners);
  }

  #showSidebarPanel() {
    const widthScreen = document.documentElement.clientWidth;

    widthScreen > 450
      ? (this.#sidebarPanel.style.width = "375px")
      : (this.#sidebarPanel.style.width = "100%");
  }

  #hideSidebarPanel() {
    this.#sidebarPanel.style.width = "0";
  }
}

export default SidebarView;
