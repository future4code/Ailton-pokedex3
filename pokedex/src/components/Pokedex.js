import React from "react";
import { useNavigate } from "react-router-dom";

function Pokedex() {
  const navigate = useNavigate();

  const GoDetalhes = () => {
    navigate("/detalhe");
  };

  const voltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <button onClick={voltar}>Voltar </button>
      <button onClick={GoDetalhes}>Detalhes do Pokemon </button>
    </div>
  );
}
export default Pokedex;
