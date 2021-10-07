'use strict';

let pokemonlist = {
    init() {
        const content = document.getElementById("pokemonList");
        content.innerHTML = " ";
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {})
            .then(response => response.json())
            .then(data => {
                data.results.forEach(function (pokemon) {
                    const pokList = `
                    <div class="pokemon">
                        <img src="https://picsum.photos/200" alt="">
                        <h1 id="name">${pokemon.name}</h1>
                        <div id="types"></div>
                        <button id="addTeam"></button>
                    </div>`;
                    content.insertAdjacentHTML("beforeend", pokList);
                });
            });
    }
};

pokemonlist.init();