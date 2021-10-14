'use strict';

let baseurl = `http://www.omdbapi.com/`;

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        let url = baseurl + `?t=${document.getElementById('inputTitle').value}` + `&apikey=f5c8e719`;
        getData(url).then(movie => {
            addMovie(movie);
        });
    });
};

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}

function addMovie(m) {
    document.getElementById('poster').src = m.Poster;
    document.getElementById('title').src = m.Title;
    document.getElementById('desc').src = m.Plot;
    document.getElementById('runtime').src = m.Runtime;

}