import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHome, Headerheader, GlobalStyled } from "./Style";
//import axios from "axios";
import { GlobalContext } from "../global/GlobalContext";
import CardPokemon from "./CardPokemon";

function Pokedex() {
  const navigate = useNavigate();

  const { pokemons } = useContext(GlobalContext);
  console.log(pokemons);

  const voltar = () => {
    navigate(-1);
  };

  /*const showCaptured = pokemons.map((pokemon)=>{
    return (
      <CardPokemon key={pokemon.id} />
    )
  }) */

  return (
    <ContainerHome>
      <GlobalStyled />
      <Headerheader>
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
          alt="Pokemon"
        />
        <button onClick={voltar}>Voltar </button>
      </Headerheader>

      <h1>Pokedex</h1>
      {pokemons.map((item) => {
        return (
        <p>{item.name.toUpperCase()}</p>
        );
      })}
    </ContainerHome>
  );
}
export default Pokedex;
