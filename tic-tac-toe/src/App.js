import React, { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import GameContainer from './components/GameContainer';

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [scores, setScores] = useState({ X: 0, O: 0 });

    const updateScore = (winner) => {
        if (winner) {
            setScores((prevScores) => ({
                ...prevScores,
                [winner]: prevScores[winner] + 1, // Increment the score of the winner
            }));
        }
    };

    return (
        <div className="App">
            <Scoreboard currentPlayer={currentPlayer} scores={scores} />
            <GameContainer 
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                updateScore={updateScore}
            />
        </div>
    );
}

export default App;
