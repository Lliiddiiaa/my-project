const list = document.querySelector('.filters-nav'); 
const items = document.querySelectorAll('.block_item');
const listItems = document.querySelectorAll('.list_item');


function filter() {

    list.addEventListener('click', event => { 
        const targetId = event.target.dataset.id
        const target = event.target
        console.log(targetId)

        if(target.classlist.contains('list_item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classlist.add('active');
        }
        
        switch(targetId) {
            // case 'all':
            //     getFilters('block_item')
            //     break
            case 'care':
                getFilters(targetId)
                break
            case 'decorative':
                getFilters(targetId)
                break
            case 'eyebrow':
                getFilters(targetId)
                break
            case 'accessories':
                getFilters(targetId)
                break
        }
    })
}

filter();

function getFilters(className) {
    data.forEach(d => {
        if(data.data.category === className) {
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
        } 
    } )  
}