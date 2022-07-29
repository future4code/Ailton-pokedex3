import styled, { createGlobalStyle } from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.background || "#729f92"};
  border-radius: 12px;
  padding: 10px;
  width: 440px;
  height: 210px;
  justify-content: space-between;
  margin-top: 70px;
  margin-right: 10px;
`;

export const Imagem = styled.img`
  width: 193px;
  height: 193px;
  margin-top: -50px;
`;

export const PrimeiraColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SegundaColuna = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetalhesButton = styled.span`
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

export const NumeroLabel = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

export const Nome = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #ffffff;
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5e5e5e;
`;

export const Headerheader = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;

  img {
    max-width: 307px;
    max-height: 113px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  button {
    background-color: #33a4f5;
    border: 1px solid #33a4f5;
    font-size: 20px;
    color: white;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    padding: 4px, 10px, 4px, 10px;
    position: absolute;
    right: 15px;
    top: 6%;
  }
`;

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css2?family=Carter+One&family=Dancing+Script&family=Permanent+Marker&display=swap');  
  }

  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');  
  }
`;

export const Pokemons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 40px;
`;

export const GreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #729F92;
  border-radius: 36px;
  padding: 3% 6% 3%;
  justify-content: space-evenly;
  margin: 6%;
`
export const MovesContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  width: 260px;
  padding-left: 4%;
`
export const StatsContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  width: 220px;
  padding-left: 4%;
`