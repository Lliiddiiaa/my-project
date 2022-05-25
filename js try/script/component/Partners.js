import popup from "./popup.js";

function Partners(){

    this.title = 'Partners'
    
    
    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    
    homeLogo.classList.remove('logo-white');
    
    const elem = document.createElement('div');
    elem.classList.add('partners_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="back-page">
                <a href="#">
                    <p>To back page</p>
                </a>
            </div>
            <h1>Partnership information</h1>
            <img class="bc-img" src="../img/bc-partners.png" alt="partners">
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            <div class="btn-wrapper">
                <button class="btn-partner" data-popup="content" data-id="partners">Become a partner</button>
            </div>
            <div class="quote-text">
                <p>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail </p>
            </div>
            <div class="quote-card">
                <div class="quote-card-content">
                    <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. </p>
                    <div class="card-signature">
                        <div class="icon-signature-block"> 
                            <img src="../img/icon-signature-about.png" alt="icon-signature-about">
                            <div class="signature-description">  
                                <p class="name">Zara Boltaeva</p>
                                <p class="position">CEO, Founder</p>
                            </div>
                        </div> 
                        <img src="../img/signature.png" alt="signature">
                    </div>
                </div>
            </div>
        </div>
        <div id="partners" class="popup-container">
            <form>
                <h3>Lorem ipsum dolor.</h3>
                <input type="text" name="text" placeholder="Name">
                <button type="submit">Send</button>
            </form>
        </div>
    </main>
    `


    // popup(); 1

    function popup() {
        const elems = document.querySelectorAll('[data-popup]');
        console.log(elems)
    
        const show = function (content){
            let popupElem = document.createElement('div');
            let modalElem = document.createElement('div');
            let closeElem = document.createElement('div');
            let contentElem = document.createElement('div');
    
            popupElem.setAttribute('class', 'popup');
            modalElem.setAttribute('class', 'popup-modal');
            closeElem.setAttribute('class', 'popup-close');
            contentElem.setAttribute('class', 'popup-content');
    
            closeElem.innerText = 'X';
            contentElem.innerHTML = content;
    
            modalElem.append(closeElem, contentElem);
            popupElem.append(modalElem);
    
            document.body.append(popupElem)
    
            popupElem.addEventListener('click', close);
        }
    
        function close(event){
            if(!event.target.classList.contains('popup') && !event.target.classList.contains('popup-close')) return;
    
            const popupElem = document.querySelector('.popup')
            if(!popupElem) return;
            popupElem.remove();
        }
    
        const clickHandler = function (event){
            event.preventDefault();
    
            let elem = event.target;
            let type = elem.dataset.popup;
            console.log(type)
    
            if(!type){
                let parent = elem.closest('[data-popup]');
    
                if(!parent) return;
    
                type = parent.dataset.popup
                console.log(type)
    
                if(!type) return;
    
                elem = parent;
            }
    
            let content = '';
    
            if(type === 'zoom'){
                const href = elem.href;
    
                if(!href) return;
    
                content = `<img src="${href}" alt="#">`;
            }
    
            if(type === 'content'){
                let id = elem.dataset.id;
    
                if(!id) return;
    
                const idContent = document.querySelector(`#${id}`);
    
                if(!idContent) return;
    
                content = idContent.innerHTML;
            }
    
            show(content);
        }
    
        elems.forEach(elem => {
            elem.addEventListener('click', clickHandler);
        });
        // console.dir(elems)
    }

    // popup(); 3
    
    this.init = () => {
       
        return elem;
        popup();
    }

    this.init()
    window.onload = popup();

    // popup(); 2
}

// popup(); не рабочий
window.onload = popup();

let elem = Partners;
let init = elem.init;
// let popup1 = elem.popup;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {title,init};