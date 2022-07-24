import React, { useState, useEffect } from "react";
import { GlobalContext } from "../global/GlobalContext";
import axios from "axios";
export default function GlobalState(props) {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokeDetails, setPokedetails] = useState([])

  useEffect(() => {
    getPokemons();
  }, [pokedex, pokeDetails]);

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
    pokeDetails,
    setPokedetails,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
