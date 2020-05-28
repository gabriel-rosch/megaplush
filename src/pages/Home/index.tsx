import React from 'react';
import {RoutesHome} from '../../routes';
import {BrowserRouter} from 'react-router-dom';
import logo from '../../assets/logo.jpeg'
import {NavBar} from './styles';
import {FcMenu} from "react-icons/fc";

const Home: React.FC = () => {
  return (
    <>
      <NavBar className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="imagem mega plush"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <FcMenu/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <a href="/home/despesas">Despesas</a>
            </li>
            <li>
              <a href="/home/dashboard">Dashboard</a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Cadastros
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/home/operacao">Operação</a>
                <a className="dropdown-item" href="/home/pdv">PDV</a>
                <a className="dropdown-item" href="/home/parceiro">Parceiro</a>
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
