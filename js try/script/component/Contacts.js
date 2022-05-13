function Contacts(){
    this.title = 'Contacts'


    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    // console.log(homeLogo)
    homeLogo.classList.remove('logo-white');

    ymaps.ready(function() {
        
        var myMap = new ymaps.Map("map", {
            center: [25.18, 55.25],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
    }),
    
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [42, 42],
        iconImageOffset: [-5, -38]
    });
    
    myMap.geoObjects
    .add(myPlacemark);
       
    });
    
    const elem = document.createElement('div');
    elem.classList.add('contacts_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="wrapper-heading">
                <h1>Our contacts</h1>
            </div>
            <img class="contacts-bg" src="./img/contacts bg.png" alt="contacts-bg">
            <div class="contacts-block">
                <div class="contact-card">
                    <p class="contact-info-name">Call us</p>
                    <p>+1 (901) 650 - 45 - 50</p>
                </div>
                <div class="contact-card">
                    <p class="contact-info-name">Support</p>
                    <p class="contact-info">helpme@boltaeva.pro</p>
                </div>
                <div class="contact-card">
                    <p class="contact-info-name">Adress</p>
                    <p class="contact-info">UAE, Dubai, 54, 560 of.</p>
                </div>
                <div class="contact-card">
                    <p class="contact-info-name">Partners department</p>
                    <p class="contact-info">parthers@boltaeva.pro</p>
                </div>
            </div>
            <div id="map"></div>
            <section class="social-media-grid">
                <div class="social-media-quote">
                    <p>Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.</p>
                    <div class="icons-wrapper">
                        <div class="social-media-icons">
                            <a class="social-icon social-icon-fb" href=""></a>
                            <a class="social-icon icon-insta" href=""></a>
                            <a class="social-icon icon-tw" href=""></a>
                            <a class="social-icon icon-youtube" href=""></a>
                            <a class="social-icon icon-vk" href=""></a>
                        </div>
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
            </section>
            <section class="request-callback">
                <div class="request-col1">
                    <div class="request-content">
                        <div class="logo-input">
                            <a href="#">
                                <img src="./img/about-logo.png" alt="logo">
                            </a>
                        </div>
                        <h3>Request a call back</h3>
                        <div class="input-card">
                            <p>Surname, name and patronymic</p>
                            <input type="text" placeholder="Rosa More|">
                        </div>
                        <div class="input-card">
                            <p>Contact number</p>
                            <input type="tel" placeholder="+1 (901) 650 - 45 - 50">
                        </div>
                        <div class="input-card">
                            <p>Email</p>
                            <input type="email" placeholder="Rosamorena@gmail.com">
                        </div>
                        <div class="wrapper-btn-request">
                            <button class="btn-request"><p>Request call</p></button>
                        </div>
                    </div>
                </div>
                <div class="request-col2">
                    <img src="./img/contacts block bg.png" alt="contacts-block">
                </div>
            </section>
        </div>
    </main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Contacts();
let init = elem.init();
let title = elem.title;

export default init;
export {title};