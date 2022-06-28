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
    background-color: #B22727;
    font-family: 'Nunito', sans-serif;

    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  }
`;