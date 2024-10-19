import React, { useState, useEffect } from 'react';
import timerIcon from '../icons/ph_timer.svg';
import restartIcon from '../icons/restart.svg';
import helpIcon from '../icons/help.svg';
import Board from './Board';
import './GameContainer.css'; // Подключите стили для game container

const GameContainer = ( { currentPlayer, setCurrentPlayer, updateScore }) => {

    const [board, setBoard] = useState(Array(9).fill(null)); // Состояние доски
    const [time, setTime] = useState(0); // Состояние для хранения времени
    const [timerActive, setTimerActive] = useState(false);

    const resetGame = () => {
        setBoard(Array(9).fill(null)); // Сброс доски
        setCurrentPlayer('X');
        setTime(0); // Сброс времени
        setTimerActive(true);
    };

    useEffect(() => {
        let timer;
        if (timerActive) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1); // Увеличиваем время каждую секунду
            }, 1000);
        }
        return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
    }, [timerActive]);


    return (
        <div className="game-container">
            <div className="left-containert">
                <div className="restart-container" onClick={resetGame}>
                    <img src={restartIcon} alt="restart" className="iconRestart"/>
                    <span className="restart">restart</span>
                </div>
                <div className="levels-container">
                    <span className="level">level 1</span>
                </div>
            </div>
            <Board 
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                setTimerActive={setTimerActive}
                setTime={setTime}
                updateScore={updateScore}
                time={time}
            />
            <div className="right-containert">
                <div className="timer-container">
                    <img src={timerIcon} alt="timer" className="iconTimer"/>
                    <span className="timer">
                        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
                    </span>
                </div>
                <div className="rules-container">
                    <img src={helpIcon} alt="rules" className="rulesIcon"/>
                    <span className="rules-button">rules</span>
                </div>
            </div>
        </div>
    );
};

export default GameContainer;
