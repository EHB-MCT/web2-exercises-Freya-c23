'use strict';
window.onload = function () {
    randomNumber();
    document.getElementById("button").addEventListener('click', e => {
        let message = '';
        compareNumber(document.getElementById('numb').value).then(
            result => addMessage(result, 'S'),
            error => addMessage(error, 'E')
        );
    });
};

function compareNumber(nr) {
    return new Promise(function (resolve, reject) {
        if (nr < compNumber) reject('Go higher');
        else if (nr > compNumber) reject('Go lower');
        else if (nr == compNumber) resolve('JEEEEJ');
    });
}

function randomNumber() {
    let compNumber = Math.floor(Math.random() * 21);
    return compNumber;
}