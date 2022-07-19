import React from "react";
import { useNavigate } from "react-router-dom";

function DetalheDoPokemon() {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>DetalheDoPokemon</h1>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}
export default DetalheDoPokemon;
