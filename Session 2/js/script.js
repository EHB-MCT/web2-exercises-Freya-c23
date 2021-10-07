'use strict';

import Team from "./team.js";

function getData() {
    const content = document.getElementById("pokemonList");
    content.innerHTML = " ";
    let team = new Team();
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(function (poke) {
                fetch(poke.url)
                    .then(response => response.json())
                    .then(data2 => {
                        const pokList = `
                        <div class="pokemon">
                            <img src="${data2.sprites.front_default}" alt="">
                            <p>nr.${data2.id}</p>
                            <h1 id="name">${poke.name}</h1>
                            <div id="types">${data2.types}</div>
                            <button id="${data2.id}">add to team</button>
                        </div>`;
                        content.insertAdjacentHTML("beforeend", pokList);
                    });
            });
        });
}

getData();