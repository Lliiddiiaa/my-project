import {catalogData} from "./catalogApi.js";
import spinner from "./spinner.js";

function Catalog(){
    this.title = 'Catalog'
     // ----------------------------------------------------------------КАК СДЕЛАТЬ ТАК, ЧТОБЫ ЭТО ВЫПОЛНИЛОСЬ БЕЗ ПЕРЕЗАГРУЗКИ
     const header = document.querySelector('header');
     header.classList.remove('home_header');
     const homeSlider = document.getElementById('home-slider');
     homeSlider.classList.remove('home_slider');
     // ----------------------------------------------------------------КАК СДЕЛАТЬ ТАК, ЧТОБЫ ЭТО ВЫПОЛНИЛОСЬ БЕЗ ПЕРЕЗАГРУЗКИ
    const elem = document.createElement('div');
    elem.classList.add('catalog_component');
    // elem.innerHTML = `<h1>Catalog</h1>`
    const main = document.createElement('div');
    main.classList.add('main');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
    const filtersNav = document.createElement('div');
    filtersNav.classList.add('filters-nav');
    const catalogH1 = document.createElement('h1');
    catalogH1.innerText = `Care cosmetics`;
    const btnCare = document.createElement('button');
    btnCare.innerText = `Care cosmetics`;
    const btnDecorative = document.createElement('button');
    btnDecorative.innerText = `Decorative cosmetics`;
    const btnEyebrow = document.createElement('button');
    btnEyebrow.innerText = `Eyebrow cosmetics`;
    const btnAccessories = document.createElement('button');
    btnAccessories.innerText = `Accessories`;
    const catalogImgBc = document.createElement('img');
    catalogImgBc.setAttribute('src', `../img/about-img2.png`);
    catalogImgBc.classList.add('bc-img');
    const catalogGrid = document.createElement('div');
    catalogGrid.classList.add('catalog-grid');
    const sectionCatalog = document.createElement('section');
    sectionCatalog.classList.add('infoblock2');
    sectionCatalog.innerHTML = `
        <div class="wrapper">   
            <div class="about-col1">
                <img src="../img/contacts block bg.png" alt="about">
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

    filtersNav.append(btnCare,btnDecorative,btnEyebrow,btnAccessories);
    
    wrapper.append(filtersNav,catalogH1,catalogImgBc,catalogGrid,sectionCatalog);

    let dataDb = []; 

    const render = async (data) => {
        let spin = spinner();
        wrapper.append(spin);
        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard);

        data = await catalogData();
        wrapper.removeChild(spin);
        // console.log(dataDb);
        // console.log(dataDb.data);  
        data.forEach(d => {
            let CatalogGridItem = document.createElement('div');
            CatalogGridItem.classList.add('catalog-grid-item');
            let imgLinc = document.createElement('a');
            imgLinc.setAttribute('href', `#productcard/${d.id}`); //тут стоит, все таки, написать productcard а не card
            let img = document.createElement('img');
            img.classList.add('card_img');
            img.setAttribute('src', d.data.img);
            imgLinc.append(img);
            let titleLinc = document.createElement('a');
            titleLinc.setAttribute('href', `#productcard/${d.id}`); //тут стоит, все таки, написать productcard а не card
            titleLinc.innerText = d.data.name;
            let title = document.createElement('h2');
            title.classList.add('card_title');
            title.append(titleLinc)
            let priceCard = document.createElement('p');
            priceCard.classList.add('card_price');
            priceCard.innerText = d.data.price;

            let btnAdd = document.createElement('button');
            if (localCard && localCard.some(d => d.id === d.id)){
                btnAdd.innerText = 'Added';
                btnAdd.disabled = true;
            }else{
                btnAdd.innerText = 'Add';
            }

            CatalogGridItem.append(imgLinc, title, priceCard, btnAdd);
            catalogGrid.append(CatalogGridItem);
            
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

    elem.append(wrapper)

    this.init = () => {
        return elem;
    }
}

let elem = new Catalog();
let init = elem.init();
let title = elem.title;

export default init;
export {title};