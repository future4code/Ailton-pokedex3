import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { ContainerHome, Headerheader, GlobalStyled, GreenContainer, MovesContainer, StatsContainer } from "./Style";
import { GlobalContext } from "../global/GlobalContext";

function DetalheDoPokemon() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };
  const { pokeDetails } = useContext(GlobalContext);
  console.log(pokeDetails);
  
  const [details, setDetails] = useState([]);

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${19}`)
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
      <GreenContainer>
        <h1>Detalhe Do Pokemon</h1>
        <div>
          {details?.map?.((picture)=>{
            return (
              <div key={picture.id}>
                <img src={picture.sprites.back_default} alt={picture.name}/>
                <img src={picture.sprites.back_default} alt={picture.name}/>
              </div>

            )
          })}
        </div>
        <MovesContainer>
          <h3> Moves </h3>
          {details?.moves?.filter((move, index)=>{
            if( index < 10){
              return move;
            }
          }).map(({move})=>{
            return ( 
              <div key={move.id}>
                <p key={move.name}>{move.name.toUpperCase()}</p>
              </div>
             )         
          })}
        </MovesContainer>
        <StatsContainer>
          <h3>Stats</h3>
          {details?.stats?.map(({stat})=>{
            return(
              <div key={stat.id}>
                <p>{stat.name.toUpperCase()}: {stat.base_stat}</p>
              </div>
            )
          })} 
        </StatsContainer>
      </GreenContainer>
    </ContainerHome>
  );
}
export default DetalheDoPokemon;