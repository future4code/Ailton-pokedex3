import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalheDoPokemon from "../components/DetalheDoPokemon";
import Home from "../components/Home";
import Pokedex from "../components/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="detalhes" element={<DetalheDoPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};
