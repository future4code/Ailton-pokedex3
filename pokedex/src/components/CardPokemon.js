import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TipoPokemon from "./TipoPokemon";
//import useRequestData from "../hooks/useRequestData";
import { Card, Imagem, PrimeiraColuna, SegundaColuna, DetalhesButton, NumeroLabel, Nome } from "./Style";

function CardPokemon(props) {
  const { name, url } = props;

  const [imagemUrl, setImagemUrl] = useState("");
  const [numero, setNumero] = useState("");
  const [tipos, setTipos] = useState([]);
  const [capturado, setCapturado] = useState(false);
  const [background, setBackground] = useState("");
  //const [pokeData, getPokeData] = useRequestData("/detalhe", {})

  const navigate = useNavigate();

  const GoDetalhes = () => {
    navigate("/detalhe");
  };

  const backgroundCardColor = (tipo) => {
    console.log(tipo);
    switch (tipo) {
      case "whater":
        return "#71C3FF";
      case "grass":
        return "#729F92";
      case "flying":
        return "#EAAB7D";
      case "fire":
        return "#EAAB7D";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762";
      default:
        return "#729f92";
    }
  };

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
      types.map(({ type, slot }) => {
        const { name } = type;
        return { slot, name };
      })
    );

    setImagemUrl(sprites.other.dream_world.front_default);
    setNumero(order);
  };

  useEffect(() => {
    if (tipos.length > 0) {
      const tipoPrincipal = tipos.find((tipo) => tipo.slot === 1);
      setBackground(backgroundCardColor(tipoPrincipal.name));
    }
  }, [tipos]);

  return (
    <Card background={background}>
      <PrimeiraColuna>
        <NumeroLabel>#{numero}</NumeroLabel>
        <Nome>{name.toUpperCase()}</Nome>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {tipos.map(({ name }, index) => (
            <TipoPokemon key={index} tipo={name} />
          ))}
        </div>

        <DetalhesButton onClick={GoDetalhes}>Detalhes</DetalhesButton>
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
