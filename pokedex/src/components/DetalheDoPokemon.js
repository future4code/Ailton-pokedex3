import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import styled, { createGlobalStyle } from "styled-components";

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


function DetalheDoPokemon() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };

  const [details, setDetails] = useState([]);
  //const [movesList, setMovesList] = useState([]);

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/1`) //TEM QUE SER O ID DO POKEMON POR USEPARAMNS
    .then((response)=>{
      setDetails(response.data)
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  return (

    <ContainerHome>
      <GlobalStyled />
      <Headerheader>
        <img
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
          alt="Pokemon"
        />
          <button onClick={voltar}>Voltar</button>
      </Headerheader>
      <div>
        <h1>DetalheDoPokemon</h1>
        <div>
          <h3> Moves </h3>
          {details?.moves?.map((move)=>{
            return ( 
              <div key={move.id}>
                <p key={move.name}>{move.name}</p>
              </div>
             )         
          }
          )}
        </div>
        <div>
          <h3>Stats</h3>
          {details?.stats?.map((stat)=>{
            return(
              <div key={stat.id}>
                <b>{stat.name}</b><text>{stat.base_stat}</text>
              </div>
            )
          })} 
        </div>
      </div>
    </ContainerHome>
  );
}
export default DetalheDoPokemon;