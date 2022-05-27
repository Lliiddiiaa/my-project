import {catalogData} from "./catalogApi.js";
import spinner from "./spinner.js";


function Home(){
    this.title ='Home'
    const header = document.querySelector('header');
    header.classList.add('home_header');
    const homeLogo = document.getElementById('logo-header');
    homeLogo.classList.add('logo-white');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.add('home_slider');

    const elem = document.createElement('div');
    elem.classList.add('home_component');
    

    const mainHome = document.createElement('main');
    mainHome.classList.add('main');
    elem.append(mainHome);

    const sectionCatalog = document.createElement('section');
    sectionCatalog.classList.add('catalog');
    mainHome.append(sectionCatalog);

    const catalogWrapper= document.createElement('div');
    catalogWrapper.classList.add('wrapper');
    sectionCatalog.append(catalogWrapper);

    const homeCatalogGrid= document.createElement('div');
    homeCatalogGrid.classList.add('catalog-grid');
    catalogWrapper.append(homeCatalogGrid);
    
    let dataDb = []; 

    const render = async (data) => {
        let spin = spinner();
        catalogWrapper.append(spin);
        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard);

        data = await catalogData();
        catalogWrapper.removeChild(spin);
        
        const category1 = document.createElement('div');
        category1.classList.add('catalog-grid-item');
        category1.classList.add('category-item');
        category1.classList.add('care-category');
        category1.innerHTML =`
            <div class="category-desc">
                <p>Care</p>
                <div class="arrows">
                    <a href="" class="arrow-left"> <img src="../../img/arrow-left.png" alt="arrow-left"> </a>
                    <a href="" class="arrow-right"> <img src="../../img/arrow-right.png" alt="arrow-right"> </a>
                </div>
            </div>
        `
        homeCatalogGrid.append(category1);

        function block1(data) {
            
            data = data.slice(0, 6);

            data.forEach(d => {
                let CatalogGridItem = document.createElement('div');
                CatalogGridItem.classList.add('catalog-grid-item');
                CatalogGridItem.classList.add('item-common');
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
                priceCard.innerText = d.data.price + '$';
    
                let btnAdd = document.createElement('button');
                btnAdd.classList.add('btn-catalog-add');
                if (localCard && localCard.some(g => g.id === d.id)){
                    btnAdd.innerText = 'Added';
                    btnAdd.disabled = true;
                }else{
                    btnAdd.innerText = 'Add';
                    btnAdd.disabled = false;
                }
    
    
                cardDesc.append(title,priceCard);
                CatalogGridItem.append(imgLinc, cardDesc, btnAdd);
                homeCatalogGrid.append(CatalogGridItem);
                
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

        block1(data);
        
        const category2 = document.createElement('div');
        category2.classList.add('catalog-grid-item');
        category2.classList.add('category-item');
        category2.classList.add('beauty-category');
        category2.innerHTML =`
            
                <div class="category-desc">
                    <p>Beauty</p>
                    <div class="arrows">
                        <a href="" class="arrow-left"> <img src="./img/arrow-left.png" alt="arrow-left"> </a>
                    <a href="" class="arrow-right"> <img src="./img/arrow-right.png" alt="arrow-right"> </a>
                    </div>
                </div>
            
        `

        homeCatalogGrid.append(category2);

        const category3 = document.createElement('div');
        category3.classList.add('catalog-grid-item');
        category3.classList.add('category-item');
        category3.classList.add('brows-category');
        category3.innerHTML =`
            
                <div class="category-desc">
                    <p>Brows</p>
                    <div class="arrows">
                        <a href="" class="arrow-left"> <img src="./img/arrow-left.png" alt="arrow-left"> </a>
                        <a href="" class="arrow-right"> <img src="./img/arrow-right.png" alt="arrow-right"> </a>
                    </div>
                </div>
            
        `

        homeCatalogGrid.append(category3);
        
        function block2(data) {
            
            data = data.slice(7, 10);
            // console.log(data);

            data.forEach(d => {
                let CatalogGridItem = document.createElement('div');
                CatalogGridItem.classList.add('catalog-grid-item');
                CatalogGridItem.classList.add('item-common');
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
                priceCard.innerText = d.data.price + '$';
    
                let btnAdd = document.createElement('button');
                btnAdd.classList.add('btn-catalog-add');
                if (localCard && localCard.some(g => g.id === d.id)){
                    // console.log(d)
                    // console.log(d.id)
                    btnAdd.innerText = 'Added';
                    btnAdd.disabled = true;
                }else{
                    btnAdd.disabled = false;
                    btnAdd.innerText = 'Add';
                }
    
    
                cardDesc.append(title,priceCard);
                CatalogGridItem.append(imgLinc, cardDesc, btnAdd);
                homeCatalogGrid.append(CatalogGridItem);
                
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

        block2(data);
        
    }

    render(dataDb);

    const sectionAbout = document.createElement('section');
    sectionAbout.classList.add('about');
    sectionAbout.innerHTML = `
        <div class="wrapper">
            <div class="about-col1">
                <img src="./img/about-bg.png" alt="about">
            </div>
            <div class="about-col2">
                <div class="content-wrapper">
                    <div class="logo about_logo"><img src="./img/about-logo.png" alt="logo"></div>
                        <p class="quote">Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</p>
                        <p class="description">The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
                        <div class="signature">
                            <div class="signature-desription">  
                            <p class="name">Zara Boltaeva</p>
                            <p class="position">CEO, Founder</p>
                        </div> 
                        <img src="./img/signature.png" alt="signature">
                    </div>
                </div>
            </div>
        </div>
    `
    
    const sectionInsta = document.createElement('section');
    sectionInsta.classList.add('instagram');
    sectionInsta.innerHTML = `
            <div class="wrapper">
                <div class="instagram-quote">
                    <p>Boltaeva - this is a real society of girls who show love to themselves</p>
                    <div class="insta-button-wrapper">
                        <a href="#">Instagram</a>
                    </div>
                </div>
                <div class="instagram-grid">
                    <div class="instagram-grid-item inst-item1">
                        <img src="./img/item1-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item2">
                        <img src="./img/item2-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item3">
                        <img src="./img/item1-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item4">
                        <img src="./img/item2-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item5">
                        <img src="./img/item3-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item6">
                        <img src="./img/item4-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item7">
                        <img src="./img/item3-insta-grid.png" alt="">
                    </div>
                    <div class="instagram-grid-item inst-item8">
                        <img src="./img/item4-insta-grid.png" alt="">
                    </div>
                </div>
            </div>
        `
    mainHome.append(sectionAbout, sectionInsta);
            
    
    this.init = () => {
        return elem;
    }
}

let elem = Home;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {title, init};