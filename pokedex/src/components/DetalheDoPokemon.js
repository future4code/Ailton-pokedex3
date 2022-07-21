import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DetalheDoPokemon() {

  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };
  const [details, setDetails] = useState([]);

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/stat/1/`) //${id}
    .then((res)=>{
      setDetails(res)
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div>
      <h1>DetalheDoPokemon</h1>
      <button onClick={voltar}>Voltar</button>
      <div>
        
      </div>
    </div>
  );
}
export default DetalheDoPokemon;
