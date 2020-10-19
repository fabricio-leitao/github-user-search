import React from 'react';
import './styles.scss';
import Button from '../../core/components/Button';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">
      Desafio do Capítulo 3, <br />
      Bootcamp DevSuperior
    </h1>
    <p className="home-text">
      Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
      Favor observar as instruções passadas no capítulo sobre a elaboração{' '}
      <br />
      deste projeto. <br />
      Este design foi adaptado a partir de Ant Design System for Figma, de
      Mateusz Wierzbicki:{' '}
      <a href="mailto:antforfigma@gmail.com" className="home-email">
        antforfigma@gmail.com
      </a>
    </p>
    <Link to="/search">
      <Button buttonText="Começar" />
    </Link>
  </div>
);

export default Home;
