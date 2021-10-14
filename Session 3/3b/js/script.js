'use strict';

let baseurl = `http://www.omdbapi.com/?&apikey=f5c8e719`;

window.onload = function () {

    let url = baseurl + `t=${movie}`;
};

async function getData(url) {
    let fetchUrl = await fetch(url);
    let response = await fetchUrl.json();

}