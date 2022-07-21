import React, { useState } from "react";
import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
  const [pokedex, setPokedex] = useState([]);

  const values = {
    pokedex,
    setPokedex,
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
