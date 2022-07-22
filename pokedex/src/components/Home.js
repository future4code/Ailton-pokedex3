import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "./CardPokemon";
import axios from "axios";
import { ContainerHome, GlobalStyled, Headerheader, Pokemons } from "./Style";

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
          {pokemons.map(({ url, name }, index) => (
            <CardPokemon key={index} url={url} name={name} pokeId={index + 1} />
          ))}
        </Pokemons>
      </div>
    </ContainerHome>
  );
}
export default Home;
