function Delivery(){
    this.title = 'Delivery'
   
    const header = document.querySelector('header');
    header.classList.remove('home_header');
    const homeSlider = document.getElementById('home-slider');
    homeSlider.classList.remove('home_slider');
    const homeLogo = document.getElementById('logo-header');
    
    homeLogo.classList.remove('logo-white');
    
    const elem = document.createElement('div');
    elem.classList.add('delivery_component');
    elem.innerHTML = `
    <main class="main">
        <div class="wrapper">
            <div class="back-page">
                <a href="#">
                    <p>To back page</p>
                </a>
            </div>
            <h1>Delivery information</h1>
            <img class="bc-img" src="./img/bc-delivery.png" alt="bc-img">
            <p>Place an order on the website</p>
            <ul>
                <li>Select the desired product and its quantity, click the "Add to cart" button.</li>
                <li>Go to the "Shopping Cart" section.</li>
                <li>Enter the promo code you have and click the "Place an order" button.</li>
                <li>Specify your contact details (Recipient's full name, phone number, email address, delivery city) or recipient's contact details.</li>
                <li>Choose a delivery method (Courier, Pick-up point, Pickup, Russian Post, Fast delivery from the store).</li>
                <li>Select the delivery address.</li>
                <li>Choose a convenient payment method.</li>
                <li>Click the "Place an order" button.</li>
                <li>After placing an order, you will receive a message to your email address containing information about the order: the order number, the composition and cost of the order, and an SMS with the order number.</li>
                <li>Information about your orders (current and completed) You can always look in your account in the "My purchases" section.</li>
                <li>The maximum cost of 1 order is 400,000 rubles when paying on the website and 50,000 rubles when paying by card or cash upon receipt.</li>
                <li>If the cost of your order exceeds the maximum, we recommend placing several orders.</li>
            </ul>
            </div>
        </div>
    </main>
    `
    this.init = () => {
        return elem;
    }
}

let elem = Delivery;
let init = elem.init;
let title = new elem().title;
let returnHeader = elem.returnHeader;

export default elem;
export {title,init};