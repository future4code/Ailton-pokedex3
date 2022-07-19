import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  );
}
export default Home;
