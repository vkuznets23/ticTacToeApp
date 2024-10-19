import React from 'react';
import crossIcon from '../icons/cross.svg';
import circleIcon from '../icons/circle.svg';
import './Scoreboard.css'; // Подключите стили для scoreboard

const Scoreboard = ({ currentPlayer, scores }) => {
    return (
        <div className="scoreboard">
            <div className={`player player1 ${currentPlayer === 'X' ? 'active' : ''}`}>
                <span className="player-icon">
                    <img src={crossIcon} alt="X" className="iconCross"/>
                </span>
                <span className="player-name">Player 1</span>
            </div>
            <span className="score">
                {scores.X}  :  {scores.O}
            </span>
            <div className={`player player2 ${currentPlayer === 'O' ? 'active' : ''}`}>
                <span className="player-icon">
                    <img src={circleIcon} alt="O" className="iconCircle"/>
                </span> 
                <span className="player-name">Player 2</span>
            </div>
        </div>
    );
};

export default Scoreboard;
