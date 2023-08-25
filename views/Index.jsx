import React from "react";

function Index({ pokemon }) {
  const capitalize = (name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const wordRemainder = name.slice(1);
    const wordCapitalized = firstLetter + wordRemainder;
    return wordCapitalized;
  };

  return (
    <div>
       <nav>
        <a href="/pokemon/new">Create New Pokemon</a>
      </nav>
      <h1>See All The Pokemon!</h1>
      {pokemon.map((pokemon, index) => {
        return (
          <li key={index}>
            <a href={`/pokemon/${id}`}>{capitalize(pokemon.name)}</a>
            <br />
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
