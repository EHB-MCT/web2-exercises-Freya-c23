'use strict';

let baseurl = `http://www.omdbapi.com/`;

window.onload = function () {
    let movie = "Parasite";
    let url = baseurl + `?s=${movie}` + `&apikey=f5c8e719`;
    getData(url);
};

async function getData(url) {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
}