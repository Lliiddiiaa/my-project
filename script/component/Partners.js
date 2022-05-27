

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
            <div class="btn-wrapper wrappe">
                <button class="btn-partner"><a class="open-popup">Become a partner</a></button>
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
    </main>
    `

    // let wrappe = document.createElement('div');
    // wrappe.classList.add('wrappe');
    // wrappe.innerHTML = `
    //     <a href="#" class="open-popup">Открыть попап</a>
    //     <a href="#" class="open-popup">Открыть попап</a>
    //     <a href="#" class="open-popup">Открыть попап</a>
    // `

    let popupBG = document.createElement('div');
        popupBG.classList.add('popup__bg');
        popupBG.innerHTML = `
        <form class="popup">
                <svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2982ff" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                <label>
                    <input type="text" name="name">
                    <div class="label__text">
                        Ваше имя
                    </div>
                </label>
                <label>
                    <input type="tel" name="tel">
                    <div class="label__text">
                        Ваш телефон
                    </div>
                </label>
                <label>
                    <textarea name="message"></textarea>
                    <div class="label__text">
                        Ваше сообщение
                    </div>
                </label>
                <button type="submit">Отправить</button>
            </form>
        `
    
    
    elem.append(popupBG)

    setTimeout( function popupTry() {
        let popupBG = document.createElement('div');
        popupBG.classList.add('popup__bg');
        popupBG.innerHTML = `
        <form class="popup">
                <svg class="close-popup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#AC8F78" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                <label>
                    <input type="text" name="name">
                    <div class="label__text">
                        Surname, name and patronymic
                    </div>
                </label>
                <label>
                    <input type="tel" name="tel">
                    <div class="label__text">
                        Contact number
                    </div>
                </label>
                <label>
                    <textarea name="message"></textarea>
                    <div class="label__text">
                        Your message
                    </div>
                </label>
                <button type="submit">Отправить</button>
            </form>
        `
    
    
        
    
        let popupBg = document.querySelector('.popup__bg');
        let popup = document.querySelector('.popup');
        let openPopupButtons = document.querySelectorAll('.open-popup');
        let closePopupButton = document.querySelector('.close-popup');
    
        openPopupButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                popupBg.classList.add('active');
                popup.classList.add('active');
            })
        });
    
        closePopupButton.addEventListener('click',() => {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        });
    
        document.addEventListener('click', (e) => {
            if(e.target === popupBg) {
                popupBg.classList.remove('active');
                popup.classList.remove('active');
            }
        });
    });

    
    this.init = () => {
       
        return elem;
    
    }

    this.init()
    // popupTry()

}


let elem = Partners;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {title,init};