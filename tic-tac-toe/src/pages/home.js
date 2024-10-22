import React from 'react';
import crossIcon from '../icons/cross.svg';
import circleIcon from '../icons/circle.svg';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <div className="bgCrossesAndCircles">
            <img src={crossIcon} alt="X" className="crossMain"/>
            <img src={circleIcon} alt="O" className="circleMain"/>
            <img src={crossIcon} alt="X" className="crossMain"/>
      </div>
      <Link to="/game" className="button-link">Start Game</Link>
    </div>
  );
};

export default Home;
