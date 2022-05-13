import {widget} from "./Card.js";

function Header(){
    const elem = document.createElement('div');
    elem.classList.add('header_component');
    elem.innerHTML = `
        
        <header class="header">
            <div class="header-top">
                <div class="wrapper">
                    <input class="side-menu" type="checkbox" id="side-menu"/>
                    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
                    <nav class="top-menu">
                        <ul class="menu-main">
                            <li class="left-item"><a href="#catalog">Catalog</a></li>
                            <li class="left-item"><a href="#about">About</a></li>
                            <li class="left-item"><a href="#delivery">Delivery</a></li>
                            <li class="right-item"><a href="#contacts">Contacts</a></li>
                            <li class="right-item main-icon icon-search"><a href=""></a></li>
                            <li class="right-item main-icon icon-cart"><a href="#card"> ${widget.outerHTML}</a></li>
                            <li class="right-item main-icon icon-cabinet"><a href=""></a></li>
                        </ul>
                    </nav>
                    <a class="logo logo-white navbar-logo" href="\"></a>
                </div>
            </div>
            <div class="header-slider" id="home-slider">
                <div class="wrapper">
                    <div class="arrow arrow-left"><img src="./img/arrow-left.png" alt="arrow-left"></div>
                    <div class="card-header-slider">
                        <h1>Capsule Collection</h1>
                    </div>
                    <div class="arrow arrow-right"><img src="./img/arrow-right.png" alt="arrow-right"></div>
                    <div class="header-slider-nav"></div>
                </div>
            </div>
        </header>




        
    `
    // elem.append(widget)

    this.init = () => {
        return elem;
    }
}

export default new Header().init()