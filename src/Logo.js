/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.png';
import logo2 from './logo2.png';
import { BrowserRouter, Link } from "react-router-dom";
import './App.css';

function Logo() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <div className="logo2">
            <img src={logo2} alt="logo" className="app-logo2" />
          </div>
        </Link>
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="logo" className="App-logo" />
          </Link>
          <hr></hr>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default Logo;
