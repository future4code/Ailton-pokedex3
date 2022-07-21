import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import TipoPokemon from "./TipoPokemon";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.backgroundCardColor || "#729f92"};
  border-radius: 12px;
  padding: 10px;
  width: 440px;
  height: 210px;
  justify-content: space-between;
  margin-top: 70px;
  margin-right: 10px;
`;

const Imagem = styled.img`
  width: 193px;
  height: 193px;
  margin-top: -50px;
`;

const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

const SegundaColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetalhesButton = styled.span`
  font-family: "Poppins";
  font-style: normal;
  color: white;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;

const NumeroLabel = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

const Nome = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #ffffff;
`;

function CardPokemon(props) {
  const { name, url } = props;

  const [imagemUrl, setImagemUrl] = useState("");
  const [numero, setNumero] = useState("");
  const [tipos, setTipos] = useState([]);
  const [capturado, setCapturado] = useState(false);

  const navigate = useNavigate();

  const GoDetalhes = () => {
    navigate("/detalhe");
  };

  function backgroundCardColor(props) {
    const { tipo } = props;
    const backgroundCard = () => {
      switch (tipo) {
        case "grass":
          return "#729F92";
        case "flying":
          return "#EAAB7D";
        case "fire":
          return "#EAAB7D";

        default:
          return "#729F92";
      }
    };
  }

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

    // ["poison", "grass"]

    setImagemUrl(sprites.other.dream_world.front_default);
    setNumero(order);
  };

  return (
    <Card background={backgroundCardColor}>
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
