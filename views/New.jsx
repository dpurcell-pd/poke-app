import React from 'react'
const manyPokemon = require('../models/manyPokemon.js');
const Pokemon = require('../models/pokemon.js');

Pokemon.insertMany(manyPokemon)
.then(pokemon => {
    console.log(pokemon)
}).catch(error => {
    console.log(error)
}).finally(() => {
    Pokemon.db.close();
});

function New() {
  return (
    <div>
        <h1>Pokedex Entry Page</h1>
        <form action="/pokemon" method='POST'>
            <input type="text" name="name" placeholder="Enter pokemon name:" /> <br />
            <input type="text" name="image" placeholder="Enter image URL:" /> <br />           
            <input type="submit" value="Submit Pokedex Entry" /> <br />
        </form>
    </div>
  )
}

module.exports = New;