import {catalogData} from "./catalogApi.js";
import spinner from "./spinner.js";

function Catalog(){
    this.title = 'Catalog'
     
     const header = document.querySelector('header');
     header.classList.remove('home_header');
     const homeSlider = document.getElementById('home-slider');
     homeSlider.classList.remove('home_slider');
     const homeLogo = document.getElementById('logo-header');
     
     homeLogo.classList.remove('logo-white');
     
    const elem = document.createElement('div');
    elem.classList.add('catalog_component');
    // elem.innerHTML = `<h1>Catalog</h1>`
    const main = document.createElement('div');
    main.classList.add('main');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
    const filtersNav = document.createElement('ul');
    filtersNav.classList.add('filters-nav');
    const catalogH1 = document.createElement('h1');
    catalogH1.innerText = `Care cosmetics`;
    const btnCare = document.createElement('li');
    btnCare.classList.add('btnCare');
    btnCare.classList.add('list_item');
    btnCare.setAttribute('data-id', 'care');
    btnCare.innerText = `Care cosmetics`;
    const btnDecorative = document.createElement('li');
    btnDecorative.classList.add('btnDecorative');
    btnDecorative.classList.add('list_item');
    btnDecorative.setAttribute('data-id', 'decorative');
    btnDecorative.innerText = `Decorative cosmetics`;
    // console.log('why')
    const btnEyebrow = document.createElement('li');
    btnEyebrow.classList.add('btnEyebrow');
    btnEyebrow.classList.add('list_item');
    btnEyebrow.setAttribute('data-id', 'eyebrow');
    btnEyebrow.innerText = `Eyebrow cosmetics`;
    const btnAccessories = document.createElement('li');
    btnAccessories.classList.add('btnAccessories');
    btnAccessories.classList.add('list_item');
    btnAccessories.setAttribute('data-id', 'accessories');
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

        data.forEach(d => {
            let CatalogGridItem = document.createElement('div');
            CatalogGridItem.classList.add('catalog-grid-item');
            CatalogGridItem.classList.add('block_item');
            // CatalogGridItem.classList.add("${d.category}");
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

            // let btnAdd = document.createElement('button');
            // btnAdd.classList.add('btn-catalog-add');
            // if (localCard && localCard.some(d => d.id === d.id)){
            //     // console.log(localCard)
            //     // console.log(d.id)
            //     btnAdd.innerText = 'Added';
            //     btnAdd.disabled = true;
            // }else{
            //     btnAdd.innerText = 'Add';
            // }


            cardDesc.append(title,priceCard);
            // CatalogGridItem.append(imgLinc, cardDesc, btnAdd);
            CatalogGridItem.append(imgLinc, cardDesc);
            catalogGrid.append(CatalogGridItem);
            
            // btnAdd.addEventListener('click', () => {
            //     import('./Card.js')
            //         .then(module => {
            //             if (module.addCard(d)){
            //                 console.log(d)
            //                 btnAdd.innerText = 'Added';
            //                 btnAdd.disabled = true;
            //             }
            //         })
            // })
        })
    }

    render(dataDb);
//----------------------------------------------------------------------фильтрация 
    // const list = document.querySelector('.filters-nav'); 
    // const items = document.querySelectorAll('.block_item');
    // const listItems = document.querySelectorAll('.list_item');
    
    
    // function filter() {
    
    //     list.addEventListener('click', event => { 
    //         const targetId = event.target.dataset.id
    //         const target = event.target
    //         console.log(targetId)
    
    //         if(target.classlist.contains('list_item')) {
    //             listItems.forEach(listItem => listItem.classList.remove('active'))
    //             target.classlist.add('active');
    //         }
            
    //         switch(targetId) {
    //             case 'care':
    //                 getFilters(targetId)
    //                 break
    //             case 'decorative':
    //                 getFilters(targetId)
    //                 break
    //             case 'eyebrow':
    //                 getFilters(targetId)
    //                 break
    //             case 'accessories':
    //                 getFilters(targetId)
    //                 break
    //         }
    //     })
    // }
    
    // filter();
    
    // function getFilters(className) {
    //     data.forEach(d => {
    //         if(data.data.category === className) {
    //             let CatalogGridItem = document.createElement('div');
    //             CatalogGridItem.classList.add('catalog-grid-item');
    //             CatalogGridItem.classList.add('block_item');
    //             // CatalogGridItem.classList.add("${d.category}");
    //             let imgLinc = document.createElement('a');
    //             imgLinc.setAttribute('href', `#productcard/${d.id}`); 
    //             let img = document.createElement('img');
    //             img.classList.add('card_img');
    //             img.setAttribute('src', d.data.img);
    //             imgLinc.append(img);
    //             let cardDesc = document.createElement('div');
    //             cardDesc.classList.add('card_description');
    //             let titleLinc = document.createElement('a');
    //             titleLinc.setAttribute('href', `#productcard/${d.id}`); 
    //             titleLinc.innerText = d.data.name;
    //             let title = document.createElement('h2');
    //             title.classList.add('card_title');
    //             title.append(titleLinc)
    //             let priceCard = document.createElement('p');
    //             priceCard.classList.add('card_price');
    //             priceCard.innerText = d.data.price;
    
    //             // let btnAdd = document.createElement('button');
    //             // btnAdd.classList.add('btn-catalog-add');
    //             // if (localCard && localCard.some(d => d.id === d.id)){
    //             //     // console.log(localCard)
    //             //     // console.log(d.id)
    //             //     btnAdd.innerText = 'Added';
    //             //     btnAdd.disabled = true;
    //             // }else{
    //             //     btnAdd.innerText = 'Add';
    //             // }
    
    
    //             cardDesc.append(title,priceCard);
    //             // CatalogGridItem.append(imgLinc, cardDesc, btnAdd);
    //             CatalogGridItem.append(imgLinc, cardDesc);
    //             catalogGrid.append(CatalogGridItem);
                
    //             // btnAdd.addEventListener('click', () => {
    //             //     import('./Card.js')
    //             //         .then(module => {
    //             //             if (module.addCard(d)){
    //             //                 console.log(d)
    //             //                 btnAdd.innerText = 'Added';
    //             //                 btnAdd.disabled = true;
    //             //             }
    //             //         })
    //             // })
    //         } 
    //     } )  
    // }
//-------------------------------------------------------------------------------------
    elem.append(wrapper)

    this.init = () => {
        return elem;
    }
}

let elem = Catalog;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export { title, init };