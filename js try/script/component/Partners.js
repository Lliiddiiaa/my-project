function Partners(){

    this.title = 'Partners'
    
    
    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    
    homeLogo.classList.remove('logo-white');
    
    const elem = document.createElement('div');
    elem.classList.add('partners_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="back-page">
                <a href="#">
                    <p>To back page</p>
                </a>
            </div>
            <h1>Partnership information</h1>
            <img class="bc-img" src="../img/bc-partners.png" alt="partners">
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            <div class="btn-wrapper">
                <button class="btn-partner"><p>Become a partner</p></button>
            </div>
            <div class="quote-text">
                <p>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail </p>
            </div>
            <div class="quote-card">
                <div class="quote-card-content">
                    <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. </p>
                    <div class="card-signature">
                        <div class="icon-signature-block"> 
                            <img src="../img/icon-signature-about.png" alt="icon-signature-about">
                            <div class="signature-description">  
                                <p class="name">Zara Boltaeva</p>
                                <p class="position">CEO, Founder</p>
                            </div>
                        </div> 
                        <img src="../img/signature.png" alt="signature">
                    </div>
                </div>
            </div>
        </div>
    </main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = Partners;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {title,init};