'use strict';
import dishes from './dishes.js';
// window.onload = loaded;

// function loaded() {
//     alert("Page is loaded");
// }
let orderdetails = {
    name: "Freya",
    email: "frefre@live.be",
    order: "20 chicken nuggets",
    printOrder() {
        document.getElementById('response').innerHTML = `The order for the customer ${orderdetails.name} is the following:
        ${orderdetails.order}. The customer may be notified by email:  ${orderdetails.email}`;
    },
};

function init() {
    console.log(dishes);
    const form = document.getElementById('orderform');
    form.addEventListener('submit', submitForm);
}

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    orderdetails.name = name;
    const email = document.getElementById('email').value;
    orderdetails.email = email;
    const order = document.getElementById('order').value;
    orderdetails.order = order;
    console.log(`${name} ${email} ${order}`);
    orderdetails.printOrder();
}

init();