function BonusProgram(){

    this.title = 'Bonusprogram'
    
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
    elem.classList.add('bonusprogram_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="back-page">
                <a href="#">
                    <p>To back page</p>
                </a>
            </div>
            <h1>Loyalty program</h1>
            <img class="bc-img" src="../img/about-img2.png" alt="bc-img">
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
            <div class="loyalty-numbers">
                <div class="number-card">
                    <h2>5%</h2>
                    <p>Low level</p>
                </div>
                <div class="number-card">
                    <h2>10%</h2>
                    <p> Standart level</p>
                </div>
                <div class="number-card">
                    <h2>15%</h2>
                    <p>Max level</p>
                </div>
            </div>
            <p>The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market. The brand seeks to build respect among the audience for its products, so that the presence of the company's products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the mass market.</p>
        </div>
    </main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = BonusProgram;
let init = elem.init;
let title = elem.title;
let returnHeader = elem.returnHeader;

export default elem;
export { title, init };

