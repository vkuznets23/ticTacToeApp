import React from 'react';
import Cell from './Cell'; // Make sure the path to Cell is correct
import '../styles/Board.css';

const BoardLvl2 = () => {
    // Create an array to represent the cells in the board
    const board = Array(16).fill(null);

    return (
        <div>
            <div className="game-board-lvl2">
                {board.map((_, index) => (
                    <Cell 
                        key={index} 
                        value={null} // Replace this with any initial value you need
                        onClick={() => console.log(`Cell ${index} clicked`)} // Replace with your click handling logic
                    />
                ))}
            </div>
        </div>
    );
};

export default BoardLvl2;
