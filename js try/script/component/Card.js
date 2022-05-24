function Card(){ 

    
    this.totalPrice = 0;
    this.prices = [];
    this.title = 'Card'
    const elem = document.createElement('div');

    if (localStorage.getItem('card')){
        this.card = JSON.parse(localStorage.getItem('card'));
    } else this.card = [];
    
    elem.classList.add('card_component');
    elem.innerHTML = `
        <h1>Card</h1>
    `
    const cardItems = document.createElement('div');
    cardItems.classList.add('card_items');
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total_price');

    this.render = () => {

    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
   
    homeLogo.classList.remove('logo-white');

    let wrapper = document.createElement('div');
    elem.append(wrapper);

    let requestBlock = document.createElement('div');
    requestBlock.classList.add('request-col1');
    
    requestBlock.innerHTML = `
        <div class="request-content">
            <div class="logo-input">
                <a href="#">
                    <img src="./img/about-logo.png" alt="logo">
                </a>
            </div>
            <h3>Request a call back</h3>
            <div class="input-card">
                <p>Surname, name and patronymic</p>
                <input type="text" placeholder="Rosa More|">
            </div>
            <div class="input-card">
                <p>Contact number</p>
                <input type="tel" placeholder="+1 (901) 650 - 45 - 50">
            </div>
            <div class="input-card">
                <p>Email</p>
                <input type="email" placeholder="Rosamorena@gmail.com">
            </div>
            <div class="wrapper-btn-request">
                <button class="btn-request"><p>Request call</p></button>
            </div>
        </div>
                
    `

    let settings = document.createElement('div');
    settings.classList.add('card_settings');
    settings.innerHTML = `
    
        <div class="settingblock1">
            <div class="favour">
                <p>Add all products to favorites</p>
            </div>
            <h4>Set up in a couple of minutes</h4>
            <p>If you are already registered on the site, then you just need to enter your profile so as not to enter information again.</p>
            <button>Sign in</button>
        </div>
        <div class="shipping">
            <p>Choose a shipping method</p>
            <input>
            <input>
            <p class="comment">Shipping cost is calculated individually by the manager</p>
        </div>
    
    `
    wrapper.append(requestBlock,settings);


    cardItems.innerHTML = '';
    this.prises = [];
    this.card.forEach(data => {
        let cardItem = document.createElement('div');
        cardItem.classList.add('card_item');
        cardItem.innerHTML = `
            <div class="item_image">
                <img src="${data.data.img}" alt="#">
            </div>
            <div>
                <h2>${data.data.name}</h2>
            </div>
        `

            let tPrice = document.createElement('div');
            tPrice.classList.add('t_price');
           
            tPrice.innerText = `${data.data.price * (data.count ? data.count : 1)}$`;
            this.prices.push(parseFloat(tPrice.innerText));
            console.log(this.prices) // всё ок
            let counter = document.createElement('input');
            counter.setAttribute('type', 'number')
            counter.value = data.count ? data.count : 1;
            console.log(counter.value)

            counter.addEventListener('change', () => {
                if (counter.value > 0){
                    this.prices = [];
                    data.count = +counter.value;
                    this.render();
                    localStorage.setItem('card', JSON.stringify(this.card));
                    console.log(counter)
                }else{
                    counter.value = 1;
                }
            })

            cardItem.append(tPrice, counter);
            cardItems.append(cardItem)
        })

        // console.log(this.prices);
        totalPrice.innerText = `${this.prices.reduce((count, item) => count + item, 0).toFixed(2)} $`;
        console.log(totalPrice.innerText) //выводится при открытии корзины
        elem.append(cardItems, totalPrice);
        return elem;
    }

    this.cardWidget = () => {
        if (localStorage.getItem('card')){
            this.card = JSON.parse(localStorage.getItem('card'));
        }
        let elem = document.createElement('li');
        elem.classList.add('card_widget');
        elem.classList.add('right-item');
        elem.innerHTML = `
            <span>${this.card.length}</span>
        `

        return elem;
    }

    this.addCard = (obj) =>{

        if (obj) {
            obj.count = 1;
            this.card.push(obj);
        }
        let count = document.querySelector('.card_widget').lastElementChild;
        count.innerText = this.card.length;

        localStorage.setItem('card', JSON.stringify(this.card));

        let flag = this.card.some(data => data.id === obj.id);
        return flag;
    }

    this.init = () => {
        if (localStorage.getItem('card')){
            this.card = JSON.parse(localStorage.getItem('card'));
            // console.log(JSON.parse(localStorage.getItem('card')));
        }
        return this.render();
    }
    
}

let elem = Card;
// let init = new Card().init();
let widget = new Card().cardWidget();
let addCard = new Card().addCard;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {widget, addCard, title}

