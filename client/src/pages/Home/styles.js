//import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import { AlurakutStyles } from '../../lib/Commons';

export const Container = styled.div`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
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
`;


