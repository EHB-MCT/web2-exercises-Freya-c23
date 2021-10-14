'use strict';

function randomNumber() {
    let compNumber = Math.floor(Math.random() * (21 - 1) + 1);
    let inputNumber = document.getElementById("button").addEventListener('submit', e => {
        e.preventDefault();
        let number = document.getElementById('numb').value;
        console.log(number);
    });

    let promise = new Promise(function (resolve, reject) {
        resolve(compNumber);
        reject(isNaN(inputNumber));
    });

    promise.then(
        result => console.log(result, "You have guessed the mystery number!"),
        error => console.log(error)
    );
}

randomNumber();