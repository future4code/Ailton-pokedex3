import React from "react";
import styled from "styled-components";
import Poison from "./icones/Poison";
import Grass from "./icones/Grass";
import Fire from "./icones/Fire";
import Fly from "./icones/Fly";
import Bug from "./icones/Bug";
import Water from "./icones/Water";
import Normal from "./icones/Normal";

const Card = styled.div`
  background: ${(props) => props.background || "#ad61ae"};

  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  padding: 5px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
  }
`;

function TipoPokemon(props) {
  const { tipo } = props;

  const getBackgroundColor = () => {
    switch (tipo) {
      case "grass":
        return "#70B873";
      case "fire":
        return "#F44900";
      case "flying":
        return "#6892B0";
      case "bug":
        return "#316520";
      case "water":
        return "#33A4F5";
      case "normal":
        return "#8A8A8A";
      default:
        return "#ad61ae";
    }
  };

  return (
    <Card background={getBackgroundColor}>
      {tipo === "poison" && <Poison />}
      {tipo === "grass" && <Grass />}
      {tipo === "fire" && <Fire />}
      {tipo === "flying" && <Fly />}
      {tipo === "bug" && <Bug />}
      {tipo === "water" && <Water />}
      {tipo === "normal" && <Normal />}

      <span>{tipo}</span>
    </Card>
  );
}

export default TipoPokemon;
