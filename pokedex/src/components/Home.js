import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import CardPokemon from "./CardPokemon";

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

// const Card = styled.p`
//   width: 440px;
//   height: 210px;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   margin-left: 0px;
//   margin-top: 0px;
// `;

//const PokeLogo = styled.img``

function Home() {
  const navigate = useNavigate();
  const GoPokedex = () => {
    navigate("/pokedex");
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

        <CardPokemon />
      </div>
    </ContainerHome>
  );
}
export default Home;
