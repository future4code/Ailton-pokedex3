import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
  const [pokedex, setPokedex] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPokedex(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return pokedex;
};

export default useRequestData;
