/* eslint-disable jsx-a11y/alt-text */
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';
import { Link } from "react-router-dom";
import '../styles/App.css';

function Logo() {
  return (
      <div className="App">
        <Link to = "/boards">
          <div className="logo2">
            <img src={logo2} alt="logo" className="app-logo2" />
          </div>
        </Link>
        <header className="App-header">
          <Link to = "/boards">
            <img src={logo} alt="logo" className="App-logo" />
          </Link>
          <hr></hr>
        </header>
      </div>
  );
}

export default Logo;
