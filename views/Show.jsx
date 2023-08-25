import React from "react";

function Show({ pokemon }) {
  const capitalize = (name) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const wordRemainder = name.slice(1);
    const wordCapitalized = firstLetter + wordRemainder;
    return wordCapitalized;
  };

  const formatImageSRC = (image) => {
    const sourceName = image.includes('.jpg') ? image : image + '.jpg';
    return sourceName;
  }

  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{capitalize(pokemon.name)}</h2>
      <img src={`${formatImageSRC(pokemon.image)}`} alt={`${pokemon.name}`} />
      <br />   <br />
      <a href="/pokemon">Back</a>
    </div>
  );
}

module.exports = Show;
