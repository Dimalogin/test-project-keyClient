import SidebarView from "./SidebarView.js";

class App {
  constructor() {
    this.#initComponent();
  }

  #initComponent() {
    new SidebarView();
  }
}

export default App;
