import React from 'react';
import crossIcon from '../icons/cross.svg'; // Путь к иконке крестика
import circleIcon from '../icons/circle.svg'; // Путь к иконке нолика
import '../styles/Cell.css'; // Подключите стили для клеток

const Cell = ({ value, onClick }) => {
    const cellClass = value ? 'cell occupied' : 'cell';
    return (
        <div className={cellClass}  onClick={onClick}>
            {value === 'X' ? <img src={crossIcon} alt="X" /> : value === 'O' ? <img src={circleIcon} alt="O" /> : null}
        </div>
    );
};

export default Cell;
