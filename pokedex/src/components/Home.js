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
  display:flex;
  flex-direction: column;
  margin-right: 5%;
  margin-left: 3%;
`
const Headerheader = styled.div`
    width: 100%;
    border: 4px solid red;
    background-color: white;
    align-items: center;
    justify-content: center;
    >div{
      position:relative;
      >img{
        max-width: 500px;
      max-height: 300px;
      position: absolute;

      }
    }
`
//const PokeLogo = styled.img``

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
    <div>
      <div>
      <h1>Pokemon</h1>
      <button onClick={GoPokedex}>Pokedex</button>
      {pokemon?.map((item) => {
        console.log(item);
           return (
          <p key={item.id}>
            {item.name} <button>capturar</button>
          </p>
        );
      })}
    </div>
    <ContainerHome>
      <GlobalStyled />
      <Headerheader>
        <div>
          <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="Pokemon"/> 
        </div>
        <div>
          <button>Pokedex</button>
        </div>
      </Headerheader>

      <main>
        <h1>Home</h1>

      <button onClick={GoPokedex}>Pokedex</button>
      </main>

    </ContainerHome>

    </div>
  );
}
export default Home;
