'use strict';
window.onload = function () {
    let inputNumber = document.getElementById("button").addEventListener('click', e => {
        e.preventDefault();
        let number = document.getElementById('numb').value;
        console.log(number);
        compareNumber(document.getElementById('numb').value).then(message => {
            document.getElementById('text').innerText = message;
        });
    });
}

function compareNumber() {
    return new Promise(function (resolve, reject) {
        resolve("juist");
    });

    let compNumber = Math.floor(Math.random() * 21);


    // let promise = new Promise(function (resolve, reject) {
    //     resolve(compNumber);
    //     reject(isNaN(inputNumber));
    // });

    // promise.then(
    //     result => console.log(result, "You have guessed the mystery number!"),
    //     error => console.log(error, "That is not a valid number")
    // );
}

compareNumber();