import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html,body{
    height: 100%;
    background-color: #514663;
    font-family: 'Nunito', sans-serif;
  }
`;