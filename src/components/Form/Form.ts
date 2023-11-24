import { addObserver, dispatch } from "../../store/action";
import { navigate} from "../../store/action";
import styles from "./Form.css"


const info: typeof = {
    letter: "",
    color: "",
  };

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }
   
    async sendf() {
        dispatch(navigate(Screens.INFO))
        console.log();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        const ingreso = this.ownerDocument.createElement("section");
        ingreso.className="ingreso";

        
        ingreso.appendChild(letter);
        const letter = this.ownerDocument.createElement('input');
        letter.addEventListener("change", (e : any) => {
            info.letter= e.target.value;
        });
        letter.placeholder="escoge una letra";
        ingreso.appendChild(letter);

        ingreso.appendChild(color);
        const color = this.ownerDocument.createElement('input');
        color.addEventListener("change", (e : any) => {
            info.color= e.target.value;
        });
        color.placeholder="escoge un color";
        ingreso.appendChild(color);

        const send = this.ownerDocument.createElement("Enviar");
        send.className="Enviar";
        send.addEventListener("click", () =>{
            this.sendf();
        })

        this.shadowRoot?.appendChild(ingreso);
    }
}

customElements.define('my-form', Form);