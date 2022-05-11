import {catalogData} from "./catalogApi.js";
import spinner from "./spinner.js";

function Catalog(){
    this.title = 'Catalog'
    const elem = document.createElement('div');
    elem.classList.add('catalog_component');
    elem.innerHTML = `<h1>Catalog</h1>`
    const container = document.createElement('div');
    container.classList.add('catalog_container');
    let dataDb = []; 

    const render = async (dataDb) => {
        let spin = spinner();
        container.append(spin);
        let localCard = localStorage.getItem('card');
        localCard = JSON.parse(localCard);

        data = await catalogData();
        container.removeChild(spin);
        console.log(dataDb);
        console.log(dataDb.data);  
        data.forEach(d => {
            let productCard = document.createElement('div');
            productCard.classList.add('card');
            let imgLinc = document.createElement('a');
            imgLinc.setAttribute('href', `#catalog/${d.id}`);
            let img = document.createElement('img');
            img.classList.add('card_img');
            img.setAttribute('src', d.data.img);
            imgLinc.append(img);
            let titleLinc = document.createElement('a');
            titleLinc.setAttribute('href', `#catalog/${dataDb.id}`);
            titleLinc.innerText = d.data.name;
            let title = document.createElement('h2');
            title.classList.add('card_title');
            title.append(titleLinc)
            let priceCard = document.createElement('p');
            priceCard.classList.add('card_price');
            priceCard.innerText = d.data.price;
            let btnAdd = document.createElement('button');
            if (localCard && localCard.some(d => d.id === data.id)){
                btnAdd.innerText = 'Added';
                btnAdd.disabled = true;
            }else{
                btnAdd.innerText = 'Add';
            }
            productCard.append(imgLinc, title, priceCard, btnAdd);
            container.append(productCard);
            // console.log(data);
            // Добавить кнопку "В корзину"
            btnAdd.addEventListener('click', () => {
                import('./Card.js')
                    .then(module => {
                        if (module.addCard(data)){
                            btnAdd.innerText = 'Added';
                            btnAdd.disabled = true;
                        }
                    })
            })
        })
    }

    render(dataDb);

    elem.append(container)

    this.init = () => {
        return elem;
    }
}

let elem = new Catalog();
let init = elem.init();
let title = elem.title;

export default init;
export {title};