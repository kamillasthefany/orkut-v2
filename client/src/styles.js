import styled, { createGlobalStyle } from 'styled-components';
import { AlurakutStyles } from '../src/lib/Commons';
// import { themes } from './themes/index';

export const CSSReset = createGlobalStyle`
  body {
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: asap; 
  }
`;

export const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9D9D9;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

export const MainContainer = styled.div` `;