'use strict';

let pokemonlist = {
    init() {
        const content = document.getElementById("pokemonList");
        content.innerHTML = " ";
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {})
            .then(response => response.json())
            .then(data => {});
    }
};