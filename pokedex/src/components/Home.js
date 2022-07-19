import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const GoPokedex = () => {
    navigate("/pokedex");
  };

  return (
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
  );
}
export default Home;
