import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { Main } from './styles';

const Login: React.FC = () => {
  return (
    <Main id="login">
      <img src={logo} alt="logo" />
      <form>
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
        <Link to='/home'>
          <button>Entrar</button>
        </Link>
      </form>
    </Main>
  );
};

export default Login;
