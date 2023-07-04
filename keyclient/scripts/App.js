import SidebarView from "./SidebarView.js";
import CardProductView from "./CardProductView.js";

class App {
  constructor() {
    this.#initComponent();
  }

  #initComponent() {
    new SidebarView();
    new CardProductView();
  }
}

export default App;
