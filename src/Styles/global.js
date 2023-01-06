import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
   
   
    //Variáveis de cores
    --cor-primaria:#19525E;  
    --cor-secundaria: #8BE3F7;
    --cor-complementar-1: #3EDEBE;
    --cor-complementar-2: #1C1C1C;
    --cor-complementar-3: #2D96AD;
    --cor-complementar-4: #F7F7F7;

  }
  
  input, button{
    cursor: pointer;
  }

`;