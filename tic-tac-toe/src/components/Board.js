import React, { useState } from 'react'
import Cell from './Cell';
import '../styles/Board.css';
import '../styles/Popup.css'

const Board = ({ board, setBoard, currentPlayer, setCurrentPlayer, setTimerActive, setTime, updateScore }) => {
    const [winner, setWinner] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Winning patterns for the game
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Function to check for a winner
    const checkWinner = (newBoard) => {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern; // Destructure pattern into variables
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
                return newBoard[a]; // Return the winner ('X' or 'O')
            }
        }
        return null; // Return null if there is no winner
    };

    const handleClick = (index) => {
        if (board[index] || checkWinner(board)) {
            return; // Exit if the cell is occupied or there is already a winner
        }

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        console.log(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setWinner(winner);
            setPopupVisible(true);
            setTimerActive(false);
            updateScore(winner);
        } else if (newBoard.every(cell => cell)) {
            setPopupVisible(true);
            setTimerActive(false);
        } else {
            if (setCurrentPlayer) {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            } else {
                console.error("setCurrentPlayer is not defined");
            }
        }
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setBoard(Array(9).fill(null)); // Сбрасываем доску
        setCurrentPlayer('X'); // Сбрасываем текущего игрока
        setWinner(null); // Сбрасываем победителя
        setTime(0);
        setTimerActive(true);
    };

    return (
        <div>
            <div className="game-board">
                {board.map((cell, index) => (
                    <Cell 
                    key={index} 
                        value={cell} 
                        onClick={() => handleClick(index)} 
                    />
                ))}
            </div>
            {isPopupVisible && <div className="blur-background active"></div>}
            {isPopupVisible && (
                <div className="popup">
                    <div className={`popup-content ${winner === 'X' ? 'popup-win-x' : winner === 'O' ? 'popup-win-o' : 'popup-tie'}`}>
                        <h2 id="popup-player">{winner ? `Congrats! ${winner} wins!` : "It's a tie!"}</h2>
                        <button 
                            className={`popup-button ${winner === 'X' ? 'popup-button-win-x' : winner === 'O' ? 'popup-button-win-o' : 'popup-button-tie'}`} 
                            onClick={handleClosePopup}
                        >New Game
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Board;
