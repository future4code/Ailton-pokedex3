import React, { useState, useEffect } from "react";
import { GlobalContext } from "../global/GlobalContext";
import axios from "axios";
export default function GlobalState(props) {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, [pokedex]);

  const getPokemons = async () => {
    const pokePromises = pokedex.map(async (item) => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${item}`
      );

      return response.data;
    });
    const resolved = await Promise.all(pokePromises);

    setPokemons(resolved);
  };

  const values = {
    pokedex,
    setPokedex,
    pokemons,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
