function Card(){ 

    
    this.totalPrice = 0;
    this.prices = [];
    this.title = 'Card'
    const elem = document.createElement('div');

    if (localStorage.getItem('card')){
        this.card = JSON.parse(localStorage.getItem('card'));
    } else this.card = [];
    
    elem.classList.add('card_component');
    // elem.innerHTML = `
    //     <h1>Card</h1>
    // `
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
    wrapper.classList.add('wrapper');
    elem.append(wrapper);

    let requestBlock = document.createElement('div');
    requestBlock.classList.add('request-col1');
    
    requestBlock.innerHTML = `
        <div class="request-content">
            <h1>Checkout</h1>
            <div class="input-card">
                <p>Surname, name and patronymic</p>
                <input type="text" placeholder="Rosa More|">
            </div>
            <div class="input-card">
                <p>Country, city, address</p>
                <input type="text" placeholder="UAE, Dubai, 54 st. 560 of.">
            </div>
            <div class="input-card">
                <p>Contact number</p>
                <input type="tel" placeholder="+1 (901) 650 - 45 - 50">
            </div>
            <div class="input-card">
                <p>Email</p>
                <input type="email" placeholder="Rosamorena@gmail.com">
            </div>
        </div>
                
    `

    let settings = document.createElement('div');
    settings.classList.add('card_settings');

    let setWrapper = document.createElement('div');
    setWrapper.classList.add('set-wrapper');
    settings.append(setWrapper);

    let block1 = document.createElement('div');
    block1.classList.add('settingblock1');
    block1.innerHTML = `
        <div class="favour">
            <button><p>Add all products to favorites</p></button>
        </div>
        <h4>Set up in a couple of minutes</h4>
        <p>If you are already registered on the site, then you just need to enter your profile so as not to enter information again.</p>
        <button class="btn-card-signin"><p>Sign in</p></button>
    `
    
    let shipping = document.createElement('div');
    shipping.classList.add('shipping');

    let shiph4 = document.createElement('h4');
    shiph4.innerText = 'Choose a shipping method';

    let companyChoice = ['FedEX', 'DHL', 'PonyExpress'];
    let deliveryMethod = ['To door', 'Plane', 'Taxi', 'Train'];

    function createSelects(data) {
        return data.map(elem => {
            let option = document.createElement('option');
            option.setAttribute('value',elem);
            option.innerText = elem;
            return option;
        })
    }
    
    let company = document.createElement('select');
    company.setAttribute('class','inputs');
    company.setAttribute('name','company');
    company.required = 'true';
    
    let companyOptions = createSelects(companyChoice);
    companyOptions.map(option => {
        company.append(option)
    })

    let select1 = document.createElement('div');
    select1.classList.add('select');

    let select2 = document.createElement('div');
    select2.classList.add('select');

    let typeDelivery = document.createElement('select');
    typeDelivery.setAttribute('class','inputs');
    typeDelivery.setAttribute('name','typeDelivery');
    typeDelivery.required = 'true';
    
    let typeDeliveryOptions = createSelects(deliveryMethod);
    typeDeliveryOptions.map(option => {
        typeDelivery.append(option)
    })


    select1.append(company);
    select2.append(typeDelivery);

    let br = document.createElement('br');

    let shipP = document.createElement('p');
    shipP.innerText = 'Shipping cost is calculated individually by the manager';
    shipP.classList.add('comment');

    
    shipping.append(shiph4,select1,br, select2, shipP);

    setWrapper.append(block1,shipping);

    let orderblock = document.createElement('div');
    orderblock.classList.add('orderBlock');

    let orderWrapper = document.createElement('div');
    orderWrapper.classList.add('order_wrapper');
    orderblock.append(orderWrapper);

    let orderTop = document.createElement('div');
    orderTop.classList.add('order-top');
    orderTop.innerHTML = `
                <h2>Order</h2>
                <p>${this.card.length} product(s)</p>
                <div class="arrows">
                    <a href="" class="arrow-left"> <img src="../../img/bej-arrow-left.png" alt="arrow-left"> </a>
                    <a href="" class="arrow-right"> <img src="../../img/bej-arrow-right.png" alt="arrow-right"> </a>
                </div>
    `

    let items = document.createElement('div');
    items.classList.add('items');

    let total = document.createElement('div');
   total.classList.add('total');
   total.innerHTML = `
        <p> Total: </p>
   `
    
   let btnOrder = document.createElement('button');
   btnOrder.classList.add('btn-order');
   btnOrder.innerHTML = `
        <p>Send your order</p>
   `

   let orderComment = document.createElement('p');
   orderComment.classList.add('comment');
   orderComment.innerText = 'Edit this order';


    orderWrapper.append(orderTop,items,total,btnOrder,orderComment);

    wrapper.append(requestBlock,settings,orderblock);


    cardItems.innerHTML = '';
    this.prises = [];
    this.card.forEach(data => {
        let cardItem = document.createElement('div');
        cardItem.classList.add('card_item');
        cardItem.innerHTML = `
            <div class="item_image">
                <img src="${data.data.img}" alt="#">
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
                    this.prices = [];
                    data.count = +counter.value;
                    this.render();
                    localStorage.setItem('card', JSON.stringify(this.card));
                    window.location.reload (); 
                    console.log(counter)
                }else{
                    counter.value = 1;
                }
            })

            cardItem.append(tPrice, counter);
            cardItems.append(cardItem)
        })

        totalPrice.innerText = `${this.prices.reduce((count, item) => count + item, 0).toFixed(2)} $`;
        items.append(cardItems);
        total.append(totalPrice);
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

