// const pokemon = [
//     {name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", image: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", image: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle"}
//  ];

//  module.exports = pokemon;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true
    }
});

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;