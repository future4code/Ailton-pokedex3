import React from "react";

function CardPokemon(props) {
  const { id, name } = props.pokemon;

  return (
    <section>
      <h1>Card pokemon</h1>
      <span>{name.toUpperCase()} - </span>
      <span>Nº: {id}</span>
      <br />
      <button>Adicionar a Pokedex</button>
      <button>Ver detalhes</button>
      <hr />
    </section>
  );
}

export default CardPokemon;
