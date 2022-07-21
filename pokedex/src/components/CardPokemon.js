import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: #729f92;
  border-radius: 12px;
  padding: 10px;
  width: 440px;
  justify-content: space-between;
`;

const Imagem = styled.img`
  width: 193px;
  height: 193px;
`;

const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

const SegundaColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

function CardPokemon(props) {
  const { name, url } = props;

  const [pokemon, setPokemon] = useState([]);
  const [click, setClick] = useState(false);
  const [imagemUrl, setImagemUrl] = useState("");
  const [numero, setNumero] = useState("");
  const [tipos, setTipos] = useState([]);
  const [capturado, setCapturado] = useState(false);

  const handleClick = (event) => {
    setCapturado(!capturado);
    // setClick((event.currentTarget.disabled = true));
    console.log("button clicked");
  };

  useEffect(() => {
    if (url) {
      obterInfoPokemon();
    }
  }, [url]);

  const obterInfoPokemon = async () => {
    const res = await axios.get(url);
    const { sprites, order, types } = res.data; // técnica destructuring

    setTipos(
      types.map(({ type }) => {
        const { name } = type;
        return name;
      })
    );

    // ["poison", "grass"]

    setImagemUrl(sprites.other.dream_world.front_default);
    setNumero(order);
  };

  return (
    <Card>
      <PrimeiraColuna>
        <span>#{numero}</span>
        <span>{name.toUpperCase()}</span>
        {tipos.map((tipo) => (
          <span>{tipo}</span>
        ))}
        <button>Ver detalhes</button>
      </PrimeiraColuna>

      <SegundaColuna>
        <Imagem src={imagemUrl} alt={name} />
        <button onClick={handleClick} disabled={capturado}>
          Capturar
        </button>
      </SegundaColuna>
    </Card>
  );
}

export default CardPokemon;
