function Workprocess(){

    this.title = 'Workprocess'
    
    // ----------------------------------------------------------------КАК СДЕЛАТЬ ТАК, ЧТОБЫ ЭТО ВЫПОЛНИЛОСЬ БЕЗ ПЕРЕЗАГРУЗКИ
    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    // console.log(homeLogo)
    homeLogo.classList.remove('logo-white');
    // ----------------------------------------------------------------КАК СДЕЛАТЬ ТАК, ЧТОБЫ ЭТО ВЫПОЛНИЛОСЬ БЕЗ ПЕРЕЗАГРУЗКИ
    const elem = document.createElement('div');
    elem.classList.add('workprocess_component');
    elem.innerHTML = `
        <main class="main">
            <div class="wrapper">
                <div class="back-page">
                    <a href="#">
                        <p>To back page</p>
                    </a>
                </div>
                <h1>Working process</h1>
                <p class="main-text">The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
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
                <p class="main-text">The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. </p>
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/wafe6kDBb6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            </div>
        </main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = Workprocess;
let init = elem.init;
let title = elem.title;
let returnHeader = elem.returnHeader;

export default elem;
export {title,init};