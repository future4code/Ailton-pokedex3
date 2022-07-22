import React from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "./CardPokemon";
import { ContainerHome, Headerheader, GlobalStyled } from "./Style";

function Pokedex() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

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

      <div>
        <h1>Pokedex</h1>
        <CardPokemon />
      </div>
    </ContainerHome>

  );
}
export default Pokedex;
