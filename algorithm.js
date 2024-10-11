const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const crossSVG = '<img src="src/cross.svg" alt="X" class="icon"/>';
const circleSVG = '<img src="src/circle.svg" alt="O" class="icon"/>';

//winnig patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

const checkWinner = () => {
    for(let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            setTimeout(() => {
                alert(`${board[a]} wins!`);
                resetGame();
            }, 100);
            return true;
        }
    }
    return false;
};

const checkTie = () => {
    if (!board.includes('') && !checkWinner()) {
      setTimeout(() => {
        alert("It's a tie!");
        resetGame();
      }, 100);
      return true;
    }
    return false;
};


  //@ e - событие которое произошло 
  //@ e.target - элемент, на котором произошло событие
  //@ dataset — это объект, который содержит все атрибуты элемента,
  //начинающиеся с префикса data-. Например, если у элемента есть атрибут data-index="0",
  //то это можно получить через dataset.index
const handleClick = (e) => {
    const index = e.target.dataset.index;
    /* e — объект события.
    e.target — элемент, на котором произошло событие.
    e.target.dataset — объект, содержащий все data- атрибуты элемента.
    e.target.dataset.index — значение атрибута data-index. */
    if (board[index] !== "") //ячейка уже занята
        return ;
    board[index] = currentPlayer;

    if (currentPlayer === 'X') {
        e.target.innerHTML = crossSVG;
      } else {
        e.target.innerHTML = circleSVG;
      }

    if (checkWinner()) {
        return;
    }
    if (checkTie()) {
        return;
    }

    //change the player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

  // Reset game
const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
