import {itemApi,catalogData} from "./catalogApi.js";
import spinner from "./spinner.js";
import {addCard} from "./Card.js";
// import lineSlider from "./script.js";

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

        const amountBlock = document.createElement('div');
        amountBlock.classList.add('amount-block');
        order.append(amountBlock);
        const btnMinus = document.createElement('button');
        btnMinus.innerText = "-";
        const amount = document.createElement('p');
        amount.innerText = '1';
        const btnPlus = document.createElement('button');
        btnPlus.innerText = "+";
        const price = document.createElement('p');
        price.innerText = data.price; 
        price.classList.add('pricetext');
        amountBlock.append(btnMinus,amount,btnPlus);
        order.append(amountBlock,price);

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
        // const ArrowLeft = document.createElement('button');
        // const ArrowImg = document.createElement('img');
        // ArrowImg.setAttribute('src','./img/arrow-left.png');
        // ArrowLeft.append(ArrowImg);
        // ArrowLeft.classList.add('arrowNav');
        // ArrowLeft.classList.add('prev');
        // products.append(ArrowLeft);


        const productsSlider = document.createElement('div');
        // productsSlider.classList.add('productsSlider');
        productsSlider.classList.add('sliderWrapper');
        productsSlider.setAttribute('id','sliderWrapper');
        products.append(productsSlider);
        const catalogGrid = document.createElement('div');
        catalogGrid.classList.add('catalog-grid');
        catalogGrid.classList.add('carousel');
        catalogGrid.setAttribute('id','carousel');
        productsSlider.append(catalogGrid);
        const content = document.createElement('div');
        content.setAttribute('id','content');
        catalogGrid.append(content);
        
        
        let dataDb = []; 

        const render = async (data) => {
            
            let localCard = localStorage.getItem('card');
            localCard = JSON.parse(localCard);

            data = await catalogData();
                 
            data.forEach(d => {
                // let li = document.createElement('li');
                let CatalogGridItem = document.createElement('div');
                CatalogGridItem.classList.add('catalog-grid-item');
                CatalogGridItem.classList.add('itemLine');
                let imgLinc = document.createElement('a');
                imgLinc.setAttribute('href', `#productcard/${d.id}`); 
                let img = document.createElement('img');
                img.classList.add('card_img');
                img.setAttribute('src', d.data.img);
                imgLinc.append(img);
                let cardDesc = document.createElement('div');
                cardDesc.classList.add('card_description');
                let titleLinc = document.createElement('a');
                titleLinc.setAttribute('href', `#productcard/${d.id}`); 
                titleLinc.innerText = d.data.name;
                let title = document.createElement('h2');
                title.classList.add('card_title');
                title.append(titleLinc)
                let priceCard = document.createElement('p');
                priceCard.classList.add('card_price');
                priceCard.innerText = d.data.price;

                let btnAdd = document.createElement('button');
                btnAdd.classList.add('btn-catalog-add');
                if (localCard && localCard.some(d => d.id === d.id)){
                    btnAdd.innerText = 'Added';
                    btnAdd.disabled = true;
                }else{
                    btnAdd.innerText = 'Add';
                }


                cardDesc.append(title,priceCard);
                CatalogGridItem.append(imgLinc, cardDesc, btnAdd);
                content.append(CatalogGridItem);
                
            
                btnAdd.addEventListener('click', () => {
                    import('./Card.js')
                        .then(module => {
                            if (module.addCard(d)){
                                btnAdd.innerText = 'Added';
                                btnAdd.disabled = true;
                            }
                        })
                })
            })
        }

        render(dataDb);

        

        // const ArrowRight = document.createElement('button');
        // const ArrowImgR = document.createElement('img');
        // ArrowImgR.setAttribute('src','./img/arrow-right.png');
        // ArrowRight.append(ArrowImgR);
        // ArrowRight.classList.add('arrowNav');
        // ArrowRight.classList.add('next');
        // products.append(ArrowRight);

        const prev  = document.createElement('button');
        prev.setAttribute('id','prevLine');
        prev.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
        `

        const next = document.createElement('button');
        next.setAttribute('id','nextLine');
        next.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
        `

        productsSlider.append(prev,next);

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