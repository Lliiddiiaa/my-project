function About(){

    this.title = 'About'
    
    
    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    
    homeLogo.classList.remove('logo-white');
   
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="back-page">
                <a href="#">
                    <p>To back page</p>
                </a>
            </div>
            <h1>About Boltaeva</h1>
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            <img class="bc-img" src="./img/about-img1.png" alt="">
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. </p>
            <div class="about-numbers">
                <div class="number-card">
                    <h2>600+</h2>
                    <p>Man on the team</p>
                </div>
                <div class="number-card">
                    <h2>1.6 m</h2>
                    <p> Followers at social network</p>
                </div>
                <div class="number-card">
                    <h2>35</h2>
                    <p>offline shop</p>
                </div>
                <div class="number-card">
                    <h2>64</h2>
                    <p>products of own production</p>
                </div>
                <div class="number-card">
                    <h2>2x</h2>
                    <p>Revenue growth every year</p>
                </div>
                <div class="number-card">
                    <h2>3+</h2>
                    <p>Location at world</p>
                </div>
            </div>
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            <img class="bc-img"  src="./img/about-img2.png" alt="">
            <div class="quote-text">
                <p>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</p>
            </div>
            <div class="quote-card">
                <div class="quote-card-content">
                    <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. </p>
                    <div class="card-signature">
                        <div class="icon-signature-block"> 
                            <img src="./img/icon-signature-about.png" alt="icon-signature-about">
                            <div class="signature-description">  
                                <p class="name">Zara Boltaeva</p>
                                <p class="position">CEO, Founder</p>
                            </div>
                        </div> 
                        <img src="./img/signature.png" alt="signature">
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

let elem = About;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export { title, init };

