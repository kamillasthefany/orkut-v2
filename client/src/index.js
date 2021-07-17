import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={themes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

