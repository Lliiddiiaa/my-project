// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyD09g__xhneIStnn-Fo908RR1n0tjm_8dw",
    authDomain: "boltaeva-shop-firebase.firebaseapp.com",
    projectId: "boltaeva-shop-firebase",
    storageBucket: "boltaeva-shop-firebase.appspot.com",
    messagingSenderId: "855032240067",
    appId: "1:855032240067:web:a063cc5c2cb10a5d538f76",
    measurementId: "G-D4EYPFJL33"
  };


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// console.log(db);

let data = [];

const root = document.getElementById('app');

async function getData(){
    const queryDoc = await getDocs(collection(db, 'boltaeva-shop-firebase'));
    let dataDb = [];
    queryDoc.forEach(doc => {
        dataDb.push({
            id: doc.id,
            data: doc.data(),
        });
    });
    if (data.length === 0){
        data = dataDb;
    }

    render();
}

function render(){
    root.innerHTML = '';
    let container = document.createElement('div');
    let ul = document.createElement('ul');
    data.forEach(d => {
        let li = document.createElement('li');
        let card = document.createElement('div');
        card.style.backgroundColor = "black";
        card.style.width = "300px";
        card.style.height = "500px";
        let img = document.createElement('img');
        img.setAttribute('src', d.data.img);
        img.setAttribute('alt', '#');
        card.append(img);
        let name = document.createElement('h1');
        name.innerText = d.data.name;
        let description = document.createElement('span');
        description.innerText = d.data.description;
        let price = document.createElement('span');
        price.innerText = d.data.price;
        li.append(card, description, price, name);
        ul.append(li);
    });
    container.append(ul);
    root.append(container);
}

getData();
