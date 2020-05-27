import React from 'react';
import {RoutesHome} from '../../routes';
import {BrowserRouter} from 'react-router-dom';
import logo from '../../assets/logo.jpeg'
import {NavBar} from './styles';
import {FcList} from "react-icons/fc";

import { primary, secondary, white, grey } from "../../styles/colors";
const Home: React.FC = () => {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="imagem mega plush"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <FcList/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Dispesas<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Dashboard</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Cadastros
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Operação</a>
                <a className="dropdown-item" href="#">PDV</a>
                <a className="dropdown-item" href="#">Parceiro</a>
              </div>
            </li>
          </ul>
        </div>
      </NavBar>
      <div id="route-home">
        <BrowserRouter >
          <RoutesHome/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Home;
