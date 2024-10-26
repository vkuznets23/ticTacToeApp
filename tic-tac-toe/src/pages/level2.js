import React, { useState } from 'react';
import Scoreboard from '../components/Scoreboard';
import Board from '../components/boardLevel2';

const Level2 = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [scores, setScores] = useState({ X: 0, O: 0 });

    return (
        <div>
            <Scoreboard currentPlayer={currentPlayer} scores={scores}/>
            <Board />
        </div>
    );
};

export default Level2;