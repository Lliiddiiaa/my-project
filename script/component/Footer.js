function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
    <footer class="footer">
    <div class="wrapper">
        <div class="footer-top">
            <div class="logo footer-logo"></div>
        </div>
        <div class="footer-bottom">
            <div class="footer-company">
                <h3>Company</h3>
                <p>The brand strives to create respect for its products among the audience, so that the presence of the company's products is a sign of prestige.</p>
                <div class="mobile-buttons">
                    <button class="social-btn email"><p>E-mail</p></button>
                    <button class="social-btn whats"><p>Whatsapp</p></button>
                </div>
                <div class="footer-icons">
                    <a class="icon icon-fb" href=""></a>
                    <a class="icon icon-insta" href=""></a>
                    <a class="icon icon-tw" href=""></a>
                    <a class="icon icon-youtube" href=""></a>
                    <a class="icon icon-vk" href=""></a>
                </div>
                <div class="footer-signature">
                    <img src="./img/signature.png" alt="">
                </div>
            </div>
            <div class="footer-middle">
                <div class="footer-navigation">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#catalog">Product catalog</a></li>
                        <li><a href="#about">About company</a></li>
                        <li><a href="#bonusprogram">Bonus program</a></li>
                        <li><a href="#workprocess">Work process</a></li>
                        <li><a href="#partners">Partners</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-products">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="">Care cosmetics</a></li>
                        <li><a href="">Eyebrow cosmetics</a></li>
                        <li><a href="">Decorative cosmetics</a></li>
                        <li><a href="">New in the collection</a></li>
                        <li><a href="">Box and complect</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-contacts">
                <h3>Contacts</h3>
                <p>We are open to new opportunities, so you can contact our company representatives for any questions</p>
                <div class="social-media">
                    <a class="email" href="">E-mail</a>
                    <a class="whats" href="">Whatsapp</a>
                </div>
            </div>
        </div>
    </div>
</footer>
    `
    this.init = () => {
        return elem;
    }
}

export default new Footer().init()