import styles from "./game.css"

export default class Game extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
    render() {
      const tablero = this.ownerDocument.createElement("my-game");
      this.shadowRoot?.appendChild(tablero);
  }
}
customElements.define("app-dashboard", Game);