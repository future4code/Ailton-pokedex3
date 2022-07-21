import React from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={voltar}>Voltar </button>
    </div>
  );
}
export default Pokedex;
