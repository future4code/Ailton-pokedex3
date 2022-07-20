import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  margin-left: 3%;
  background-color: #dddddd;
  width: 1440px;
`;
const Headerheader = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 160px;
  left: 0px;
  top: 0px;
  > div {
    position: relative;
    > img {
      max-width: 307px;
      max-height: 113px;
      position: absolute;
      margin-top: 21px;
      margin-left: 566px;
    }
    > button {
      background-color: #33a4f5;
      border: 1px solid #33a4f5;
      font-size: 20px;
      color: white;
      width: 150px;
      height: 50px;
      margin-top: 41px;
      margin-left: 1250px;
      border-radius: 8px;
      padding: 4px, 10px, 4px, 10px;
    }
  }
`;

const Card = styled.p`
  width: 440px;
  height: 210px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-top: 0px;
`;

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
    <ContainerHome>
      <Headerheader>
        <div>
          <img
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
            alt="Pokemon"
          />
        </div>
        <div>
          <button onClick={GoPokedex}>Pokedex</button>
        </div>
      </Headerheader>

      <div>
        <h1>Pokemon</h1>

        {pokemon?.map((item) => {
          console.log(item);
          return (
            <Card key={item.id}>
              {item.name} <button>capturar</button>
            </Card>
          );
        })}
      </div>
    </ContainerHome>
  );
}
export default Home;
