import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const GoPokedex = () => {
    navigate("/pokedex");
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={GoPokedex}>Pokedex</button>
    </div>
  );
}
export default Home;
