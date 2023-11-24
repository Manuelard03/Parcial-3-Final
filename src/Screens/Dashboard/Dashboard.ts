import styles from "./dashboard.css"

export default class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
    render() {
      const form = this.ownerDocument.createElement("my-form");
      this.shadowRoot?.appendChild(form);
  }
}
customElements.define("app-dashboard", Dashboard);