// Select all cells in the game board
const cells = document.querySelectorAll('.cell');


// Initialize variables for the current player and the game board state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// SVG markup for the player icons
const crossSVG = '<img src="src/cross.svg" alt="X" class="icon"/>';
const circleSVG = '<img src="src/circle.svg" alt="O" class="icon"/>';

// Initialize scores for both players
let player1Score = 0;
let player2Score = 0;

// Select player elements from the DOM
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

// Set player 1 as the active player at the start of the game
player1.classList.add('active');

// Timer variables
let seconds = 0;
let timerInterval;
const timerDisplay = document.querySelector('.timer');

// Function to start the timer
const startTimer = () => {
    timerInterval = setInterval(() => {
        seconds++; // Increment seconds
        const minutes = Math.floor(seconds / 60); // Calculate minutes
        const remainingSeconds = seconds % 60; // Remaining seconds

        // Format time in "mm:ss"
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        timerDisplay.textContent = formattedTime; // Update timer display
    }, 1000); // Update every second
};
startTimer(); // Start the timer

// Winning patterns for the game
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

const popup = document.querySelector('.popup');
const popupPlayer = document.getElementById('popup-player');
const popupClose = document.getElementById('popup-close');
const blurBackground = document.getElementById('blur-background');

// Function to show the popup
const showPopup = (winner) => {
  popupPlayer.textContent = winner; // Set the winner's name in the popup
  popup.style.display = 'flex';
  blurBackground.style.display = 'block';

  if (winner.includes('X')) {
    popup.classList.add('popup-win-x');
    popup.classList.remove('popup-win-o');
    popup.classList.remove('popup-tie');
    popupClose.classList.add('popup-button-win-x');
    popupClose.classList.remove('popup-button-win-o');
    popupClose.classList.remove('popup-button-tie');
  } else if (winner.includes('O')) {
    popup.classList.add('popup-win-o');
    popup.classList.remove('popup-win-x');
    popup.classList.remove('popup-tie');
    popupClose.classList.add('popup-button-win-o');
    popupClose.classList.remove('popup-button-win-x');
    popupClose.classList.remove('popup-button-tie');
  } else {
    popup.classList.add('popup-tie');
    popup.classList.remove('popup-win-x');
    popup.classList.remove('popup-win-o');
    popupClose.classList.add('popup-button-tie');
    popupClose.classList.remove('popup-button-win-x');
    popupClose.classList.remove('popup-button-win-o');
  }

  // Disable further clicks on the game board
  cells.forEach(cell => cell.style.pointerEvents = 'none');
};

// Function to hide the popup
const hidePopup = () => {
  popup.style.display = 'none'; // Hide the popup
  blurBackground.style.display = 'none';

  popup.classList.remove('popup-win-x', 'popup-win-o');
  popupClose.classList.remove('popup-button-win-x', 'popup-button-win-o');

  // Enable clicks on the game board
  cells.forEach(cell => cell.style.pointerEvents = 'auto');
};

popupClose.addEventListener('click', () => {
  hidePopup(); // Hide the popup
  resetGame(); // Reset the game
});

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern; // Destructure pattern into variables
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setTimeout(() => {
            showPopup(`Congrats! ${board[a]} wins!`); // Показываем попап
            // Обновляем счет победителя
            if (board[a] === 'X') {
                player1Score++;
                document.getElementById('player1-score').textContent = player1Score;
            } else {
                player2Score++;
                document.getElementById('player2-score').textContent = player2Score;
            }
        }, 100);
        return true;
        }
    }
    return false; // Return false if there is no winner
};

// Function to check for a tie
const checkTie = () => {
    if (!board.includes('') && !checkWinner()) {
        setTimeout(() => {
            showPopup("It's a tie!"); // Show the popup if it's a tie
            resetGame(); // Reset the game
        }, 100);
        return true; // Return true if there is a tie
    }
    return false; // Return false if not a tie
};

// Handle click events on the game cells
const handleClick = (e) => {
    const index = e.target.dataset.index; // Get the index from data attribute
    if (board[index] !== "") // Check if the cell is already occupied
        return; // Exit the function if occupied

    // Update the board state and cell content
    board[index] = currentPlayer;
    e.target.innerHTML = currentPlayer === 'X' ? crossSVG : circleSVG;
    e.target.classList.add('occupied');

    // Check for a winner or tie after each move
    if (checkWinner() || checkTie()) {
        return; // Exit if there is a winner or tie
    }

    // Change the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // Change active player styling
    if (currentPlayer === 'X') {
        player1.classList.add('active');
        player2.classList.remove('active');
    } else {
        player1.classList.remove('active');
        player2.classList.add('active');
    }
};

// Reset the game to its initial state
const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', '']; // Reset board state
    currentPlayer = 'X'; // Set current player back to X
    cells.forEach(cell => cell.textContent = ''); // Clear all cell contents
};

const restartButton = document.querySelector('.restart');
if (restartButton) {
    restartButton.addEventListener('click', resetGame);
  } else {
    console.error('Button with class .restart not found');
  }

// Add click event listeners to each cell
cells.forEach(cell => cell.addEventListener('click', handleClick));
