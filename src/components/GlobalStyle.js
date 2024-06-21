// src/components/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  input, button {
    display: block;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
  }
  button {
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: #0056b3;
  }
  form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  h2 {
    text-align: center;
  }
  nav {
    background: #007bff;
    padding: 10px;
    color: #fff;
    text-align: center;
  }
  nav a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
