import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();
  const GoPokedex = () => {
    navigate("/pokedex");
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")

      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
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
