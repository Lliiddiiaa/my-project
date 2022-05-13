import {itemApi} from "./catalogApi.js";
import spinner from "./spinner.js";
import {addCard} from "./Card.js";

function Catalog(){
    //не находит элементы
    // const header = document.querySelector('header');
    // header.classList.remove('home_header');
    // const homeSlider = document.getElementById('home-slider');
    // homeSlider.classList.remove('home_slider');
    // const homeLogo = document.getElementById('logo-header');
    // // console.log(homeLogo)
    // homeLogo.classList.remove('logo-white');
    
    const elem = document.createElement('div');
    elem.classList.add('item_component');
    let data = {};

    this.title = 'Product';

    this.ren = async (id) => {
        elem.innerHTML = '';
        let spin = spinner();
        elem.append(spin);

        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard);

        data = await itemApi(id);
        data = data.data();
        elem.innerHTML = '';

        const mainItem = document.createElement('main');
        mainItem.classList.add('main');
        elem.append(mainItem);

        const productCardBlock = document.createElement('section');
        productCardBlock.classList.add('product-card-block');
        mainItem.append(productCardBlock);

        const productWrapper = document.createElement('div');
        productWrapper.classList.add('wrapper');
        productCardBlock.append(productWrapper);

        const productImg = document.createElement('div');
        productImg.classList.add('product-card-img');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        productWrapper.append(productImg,productInfo);

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        productInfo.append(contentWrapper);

        const img = document.createElement('img');
        img.classList.add('item_img');
        img.setAttribute('src', data.img);

        productImg.append(img);

        const fv = document.createElement('div');
        fv.classList.add('favorites');
        fv.innerHTML = `
            <p>Add to favorites</p>
        `

        const productH1 = document.createElement('h1');
        productH1.innerText = data.name;
        
        const order = document.createElement('div');
        order.classList.add('order-info');

        const btnMinus = document.createElement('button');
        const amount = document.createElement('p');
        amount.innerText = '1';
        const btnPlus = document.createElement('button');
        const price = document.createElement('p');
        price.innerText = data.price; 
        order.append(btnMinus,amount,btnPlus,price);

        const btnAddCart = document.createElement('button');
        btnAddCart.classList.add('btn-add-cart');
        btnAddCart.innerHTML = `
        <p>Add to shopping cart </p>
        `

        const tabs = document.createElement('div');
        tabs.classList.add('about-product-info');

        const aboutBtn = document.createElement('div');
        aboutBtn.classList.add('about-pr-btns');
        aboutBtn.innerHTML = `
                <button class="btn-about-pr">Product</button>
                <button class="btn-about-pr">Specifications</button>
                <button class="btn-about-pr">Delivery</button>
        `

        const productDesc = document.createElement('p');
        productDesc.innerText = data.description;

        tabs.append(aboutBtn,productDesc);

        contentWrapper.append(fv,productH1,order,btnAddCart,tabs);

        // let productCard = document.createElement('div');
        // productCard.classList.add('card_item');
        // let img = document.createElement('img');
        // img.classList.add('item_img');
        // img.setAttribute('src', data.img);
        // let desc = document.createElement('p');
        // desc.innerText = data.description;
        // let category = document.createElement('p');
        // category.innerText = data.category;
        // let title = document.createElement('h2');
        // title.classList.add('card_title');
        // title.innerText = data.name;
        // let priceCard = document.createElement('p');
        // priceCard.classList.add('card_price');
        // priceCard.innerText = data.price;
        // let btnAdd = document.createElement('button');


        // if (localCard.some(data => data.id === +id)){ // просмотрите структуру объекта дата и перепишите условие
        //     btnAdd.innerText = 'Added';
        //     btnAdd.disabled = true;
        // }else{
        //     btnAdd.innerText = 'Add';
        // }


        // mainItem.append(title, category, img, desc, priceCard, btnAdd);

        const infoblock1 = document.createElement('section');
        infoblock1.classList.add('infoblock1');
        infoblock1.innerHTML =`
            <div class="wrapper"> 
                <div class="col2">
                    <div class="content-wrapper">
                        <div class="logo about_logo"><img src="../img/about-logo.png" alt="logo"></div>
                        <p class="quote">Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</p>
                        <p class="description">The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
                    </div>
                </div> 
                <div class="col1">
                    <img src="../img/contacts block bg.png" alt="about">
                </div>
            </div>  
        `
        

        const infoblock2 = document.createElement('section');
        infoblock2.classList.add('infoblock1');
        infoblock2.innerHTML = `
            <div class="wrapper">   
                <div class="about-col1">
                    <img src="../img/about-bg.png" alt="about">
                </div>
                <div class="about-col2">
                    <div class="content-wrapper">
                        <div class="logo about_logo"><img src="../img/about-logo.png" alt="logo"></div>
                        <p class="quote">Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</p>
                        <p class="description">The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
                        <div class="signature">
                            <div class="signature-desription">  
                                <p class="name">Zara Boltaeva</p>
                                <p class="position">CEO, Founder</p>
                            </div> 
                            <img src="../img/signature.png" alt="signature">
                        </div>
                    </div>
                </div>
            </div> 
        `
        

        const quoteSlider = document.createElement('section');
        quoteSlider.classList.add('quote-slider');
        quoteSlider.innerHTML = `
            <p>We care about your beauty, so we recommend that you consider other products</p>
            <div class="arrows">
                <a href="" class="arrow-left"> <img src="../img/arrow-left.png" alt="arrow-left"> </a>
                <a href="" class="arrow-right"> <img src="../img/arrow-right.png" alt="arrow-right"> </a>
            </div>
        `
        

        const products = document.createElement('section');
        products.classList.add('products');
        products.innerHTML = `
            <div class="catalog-grid">
                <div class="catalog-grid-item cat-item1">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item2">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item3">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item4">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
            </div>
        `
        

        mainItem.append(productCardBlock,infoblock1,infoblock2,quoteSlider,products);

        // console.log(data);
        // Добавить кнопку "В корзину"

        // btnAdd.addEventListener('click', () =>{
        //     if (addCard(data)){
        //         btnAdd.innerText = 'Added';
        //         btnAdd.disabled = true;
        //     }
        // })

        return elem;
    }

    // render();

    // elem.append(container);




    this.render = (id) => {
        this.ren(id)
        return elem;
    }
}

let product = new Catalog();

export default product;