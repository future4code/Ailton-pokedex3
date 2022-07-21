import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";

import CardPokemon from "./CardPokemon";
import axios from "axios";

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css2?family=Carter+One&family=Dancing+Script&family=Permanent+Marker&display=swap');  
  }

  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Carter+One&family=Dancing+Script&family=Permanent+Marker&display=swap');  
  }
`;

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5e5e5e;
`;

const Headerheader = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;

  img {
    max-width: 307px;
    max-height: 113px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  button {
    background-color: #33a4f5;
    border: 1px solid #33a4f5;
    font-size: 20px;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    padding: 4px, 10px, 4px, 10px;
    position: absolute;
    right: 15px;
    top: 6%;
  }
`;

const Pokemons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 40px;
`;

function Home() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const GoPokedex = () => {
    navigate("/pokedex");
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    );

    setPokemons(res.data.results);
  };

  return (
    <ContainerHome>
      <GlobalStyled />
      <Headerheader>
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
          alt="Pokemon"
        />
        <button onClick={GoPokedex}>Pokedex</button>
      </Headerheader>

      <div>
        <h1>Todos Pokémons</h1>
        <Pokemons>
          {pokemons.map(({ url, name }) => (
            <CardPokemon url={url} name={name} />
          ))}
        </Pokemons>
      </div>
    </ContainerHome>
  );
}
export default Home;
