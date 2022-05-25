import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import initSlider from "./homeSlider.js";
// import popup from "./popup.js";
// import pusk from "./scrpt.js";
// import lineSlider from "./script.js";

function App(){
    const root = document.querySelector('#root');

    this.elem = document.createElement('div');
    this.elem.innerHTML = `
    <h2>Header</h2>
    <h2>Main</h2>
    <h2>Footer</h2>
    `

    const render = (...elems) => {
        elems.forEach(elem => root.appendChild(elem));
    }

    this.init = () => {
        render(Header, Main, Footer);
        initSlider();
        // lineSlider();
        // popup();
    }

}



export default App