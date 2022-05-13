function Home(){
    this.title ='Home'
    const header = document.querySelector('header');
    header.classList.add('home_header');
    const homeSlider = document.querySelector('header-slider');
    console.log(homeSlider)
    homeSlider.classList.add('home_slider');
    console.log(header);
    const elem = document.createElement('div');
    elem.classList.add('home_component');
    elem.innerHTML = `
    <main class="main">
    <section class="catalog">
        <div class="wrapper">
            <div class="catalog-grid">
                <div class="catalog-grid-item category-item care-category">
                    <div class="category-desc">
                        <p>Care</p>
                        <div class="arrows">
                            <a href="" class="arrow-left"> <img src="./img/arrow-left.png" alt="arrow-left"> </a>
                            <a href="" class="arrow-right"> <img src="./img/arrow-right.png" alt="arrow-right"> </a>
                        </div>
                    </div>
                </div>
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
                <div class="catalog-grid-item cat-item5">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item6">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item category-item beauty-category">
                    <div class="category-desc">
                        <p>Beauty</p>
                        <div class="arrows">
                            <a href="" class="arrow-left"> <img src="./img/arrow-left.png" alt="arrow-left"> </a>
                            <a href="" class="arrow-right"> <img src="./img/arrow-right.png" alt="arrow-right"> </a>
                        </div>
                    </div>
                </div>
                <div class="catalog-grid-item category-item brows-category">
                    <div class="category-desc">
                        <p>Brows</p>
                        <div class="arrows">
                            <a href="" class="arrow-left"> <img src="./img/arrow-left.png" alt="arrow-left"> </a>
                            <a href="" class="arrow-right"> <img src="./img/arrow-right.png" alt="arrow-right"> </a>
                        </div>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item7">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item8">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
                <div class="catalog-grid-item cat-item9">
                    <div class="card-description">
                        <p>Perfect brows</p>
                        <p>54 €</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
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
    </section>
    <section class="instagram">
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
    </section>
</main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Home();
let init = elem.init();
let title = elem.title;

export default init;
export {title};