import React, { useState, useEffect } from "react";
import axios from "axios";

function CardPokemon() {
  // const { id, name } = props.pokemon;

  const [pokemon, setPokemon] = useState([]);
  const [listaPokemon, setListaPokemon] = useState([]);
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    setClick((event.currentTarget.disabled = true));
    console.log("button clicked");
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const listaPoke = [];
    listaPokemon.map((poke) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)

        .then((res) => {
          listaPoke.push(res.data);
          console.log(res.data);
          if (listaPoke.length === 20);
          {
            setListaPokemon(listaPoke);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [listaPokemon]);

  return (
    <section>
      {pokemon?.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <p>{item.name.toUpperCase()}</p>
            {/* <img
              src={pokemon.sprites.other.dream_world.front_default} // 
              alt={pokemon.name}
            /> */}
            <button onClick={handleClick}>Capturar</button>
            <button>Ver detalhes</button>
          </div>
        );
      })}
    </section>
  );
}

export default CardPokemon;
