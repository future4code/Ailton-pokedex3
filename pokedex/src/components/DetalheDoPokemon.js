import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { createGlobalStyle } from "styled-components";
import { useParams } from "react-router-dom";
import { ContainerHome, Headerheader } from "./Style";

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

function DetalheDoPokemon() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };
  const {id} = useParams()

  const [details, setDetails] = useState([]);
  //const [movesList, setMovesList] = useState([]);

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/2`) //TEM QUE SER O ID DO POKEMON POR USEPARAMNS
    .then((response)=>{
      setDetails(response.data)
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[id])

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
          {details?.moves?.map(({move})=>{
            return ( 
              <div key={move.id}>
                <p key={move.name}>{move.name}</p>
              </div>
             )         
          })}
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