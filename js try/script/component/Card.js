function Card(){ 

    this.card = [];
    this.totalPrice = 0;
    this.prices = [];
    this.title = 'Card'
    const elem = document.createElement('div');
    
    elem.classList.add('card_component');
    elem.innerHTML = `
        <h1>Card</h1>
    `
    const cardItems = document.createElement('div');
    cardItems.classList.add('card_items');
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total_price');

    this.render = (data) => {

    // const header = document.querySelector('header');
    // header.classList.remove('home_header');
    // const homeSlider = document.getElementById('home-slider');
    // homeSlider.classList.remove('home_slider');
    // const homeLogo = document.getElementById('logo-header');
   
    // homeLogo.classList.remove('logo-white');

    cardItems.innerHTML = '';
    this.prises = [];
    this.card.forEach(data => {
        // console.log(data)
        // console.log(data.id)
        // console.log(data.data.img)
        // console.log(data.data.price)
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
            let counter = document.createElement('input');
            counter.setAttribute('type', 'number')
            counter.value = data.count ? data.count : 1;

            counter.addEventListener('change', () => {
                if (counter.value > 0){
                    data.count = +counter.value;
                    this.render();
                    localStorage.setItem('card', JSON.stringify(this.card));
                }else{
                    counter.value = 1;
                }
            })

            cardItem.append(tPrice, counter);
            cardItems.append(cardItem)
        })

        // console.log(this.prices);
        totalPrice.innerText = `${this.prices.reduce((count, item) => count + item, 0).toFixed(2)} $`;
        elem.append(cardItems, totalPrice);
        return elem;
    }

    this.cardWidget = () => {
        let elem = document.createElement('li');
        elem.classList.add('card_widget');
        elem.classList.add('right-item');
        // console.log(this.card.length) //0
        elem.innerHTML = `
            <span>${this.card.length}</span>
        `
        // console.log(elem)

        return elem;
    }

    this.addCard = (obj) =>{

        if (obj) {
            obj.count = 1;
            this.card.push(obj);
            // console.log(this.card)
        }
        let count = document.querySelector('.card_widget').lastElementChild;
        count.innerText = this.card.length;
        // console.log(count)

        localStorage.setItem('card', JSON.stringify(this.card));
        // console.log(this.card)

        let flag = this.card.some(data => data.id === obj.id);
        return flag;
    }

    this.init = () => {
        if (localStorage.getItem('card')){
            // console.log(localStorage.getItem('card'))
            // console.log(this)
            this.card = JSON.parse(localStorage.getItem('card'));
            console.log(JSON.parse(localStorage.getItem('card')));
            // console.log(this.card)
        }
        return this.render();
    }
    
}

let elem = Card;
let init = new Card().init();
let widget = new Card().cardWidget();
let addCard = new Card().addCard;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {widget, addCard, title, init}

