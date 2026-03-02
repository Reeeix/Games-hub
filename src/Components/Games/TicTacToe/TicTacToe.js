const lineasGanadoras = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
const tttScoreStorageKey = "tttScoreData";

let board = ["", "", "", "", "", "", "", "", ""];
let turno = "X";
let scores = { X: 0, O: 0, ties: 0 };
let gameActive = true;

const getElements = () => {
  const casillas = Array.from(document.querySelectorAll('.casillattt'));
  const pTttWinner = document.querySelector('.p-ttt-winner');
  const elX = document.querySelector('.divJugador-X p');
  const elT = document.querySelector('.divEmpates p');
  const elO = document.querySelector('.divJugador-O p');

  return { casillas, pTttWinner, elX, elT, elO };
};

const saveScores = () => {
  try {
    localStorage.setItem(tttScoreStorageKey, JSON.stringify(scores));
  } catch (e) {}
};

const readScores = () => {
  try {
    const raw = localStorage.getItem(tttScoreStorageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    scores = {
      X: Number(parsed?.X) || 0,
      O: Number(parsed?.O) || 0,
      ties: Number(parsed?.ties) || 0
    };
  } catch (e) {
    scores = { X: 0, O: 0, ties: 0 };
  }
};

const renderScores = () => {
  const { elX, elT, elO } = getElements();
  if (elX) elX.textContent = `${scores.X}`;
  if (elT) elT.textContent = `${scores.ties}`;
  if (elO) elO.textContent = `${scores.O}`;
};

const paintWinningLine = (line, casillas) => {
  line.forEach((index) => {
    const casilla = casillas[index];
    if (casilla) casilla.classList.add("casilla-ganadora");
  });
};

const initTicTacToe = () => {
  const { casillas, pTttWinner } = getElements();
  const newGameButton = document.querySelector(".new-game-ttt");
  const restartButton = document.querySelector(".restart-ttt");

  readScores();
  renderScores();
  if (pTttWinner) pTttWinner.textContent = `Turno del jugador: ${turno}`;

  casillas.forEach((casilla, index) => {
    casilla.addEventListener('click', () => {
      if (!gameActive || board[index]) return;

      casilla.textContent = turno;
      board[index] = turno;

      const result = checkWinner();
      if (result) {
        gameActive = false;
        paintWinningLine(result.line, casillas);
        if (pTttWinner) pTttWinner.textContent = `Ganador: ${result.winner}`;
        scores[result.winner] += 1;
        saveScores();
        renderScores();
        return;
      }

      if (board.every(cell => cell !== "")) {
        gameActive = false;
        scores.ties += 1;
        saveScores();
        renderScores();
        if (pTttWinner) pTttWinner.textContent = 'Empate';
        return;
      }

      turno = turno === 'X' ? 'O' : 'X';
      if (pTttWinner) pTttWinner.textContent = `Turno del jugador: ${turno}`;
    });
  });

  const clearUI = () => {
    casillas.forEach(casilla => {
      casilla.textContent = "";
      casilla.classList.remove("casilla-ganadora");
    });
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    turno = "X";
    if (pTttWinner) pTttWinner.textContent = `Turno del jugador: ${turno}`;
  };

  if (newGameButton) {
    newGameButton.addEventListener('click', () => {
      clearUI();
    });
  }

  if (restartButton) {
    restartButton.addEventListener('click', () => {
      clearUI();
      scores = { X: 0, O: 0, ties: 0 };
      saveScores();
      renderScores();
    });
  }
};

const checkWinner = () => {
  for (const [a, b, c] of lineasGanadoras) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return null;
};

export default initTicTacToe;