import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Logo from './components/Logo';
import Boards from './components/Boards';
import Board from './components/Board';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Logo />
      <Boards><Board /></Boards>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
