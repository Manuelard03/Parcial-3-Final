import styles from "./Tablero.css"


const info: typeof = {
    letter: "",
    color: "",
  };

export default class Tablero extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }
   

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        const game = this.ownerDocument.createElement("section");
        game.className="game";

        this.shadowRoot?.appendChild(game);
    }
}

customElements.define('my-tablero', Tablero);