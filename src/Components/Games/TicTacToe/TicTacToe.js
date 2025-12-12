const lineas_ganadoras = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let board = ["", "", "", "", "", "", "", "", ""];
let turno = "X";
let scores = { X: 0, O: 0, ties: 0 };
let gameActive = true;

const getElements = () => {
  const casillas = Array.from(document.querySelectorAll('.casillattt'));
  const pTttWinner = document.querySelector('.p-ttt-winner');

  return { casillas, pTttWinner };
}

const initTicTacToe = () => {
  const { casillas, pTttWinner } = getElements();
  const newGameButton = document.querySelector(".new-game-ttt");
  const restartButton = document.querySelector(".restart-ttt");
  pTttWinner.textContent = `Turno del jugador: ${turno}`
  casillas.forEach((casilla, index) => {
    casilla.addEventListener('click', () => {
      //Caso 1: juego inactivo y casilla llena, no hacer nada
      if (!gameActive || board[index]) return;
      //Caso 2: juego activo y casilla vacía
      if (gameActive && board[index] === "") {
        casilla.textContent = turno;
        board[index] = turno;
        const result = checkWinner();
        if (result) {
          gameActive = false;
        if (pTttWinner) pTttWinner.textContent = `Ganador: ${result.winner}`;
          if (result.winner === "X") {
            const el = document.querySelector('.divJugador-X p');
            let value = Number(el.textContent) || 0;
            value++;
            el.textContent = value;
              try {
                const payload = { winner: 'Jugador X', date: Date.now() };
                localStorage.setItem('tttLastScore', JSON.stringify(payload));
                const pUlt = document.querySelector('.div-ultima p');
                if (pUlt) pUlt.textContent = `Última puntuación: ${payload.winner} - ${new Date(payload.date).toLocaleString()}`;
              } catch (e) {}
          } else if (result.winner === "O") {
            const el = document.querySelector('.divJugador-O p');
            let value = Number(el.textContent) || 0;
            value++;
            el.textContent = value;
          
              try {
                const payload = { winner: 'Jugador O', date: Date.now() };
                localStorage.setItem('tttLastScore', JSON.stringify(payload));
                const pUlt = document.querySelector('.div-ultima p');
                if (pUlt) pUlt.textContent = `Última puntuación: ${payload.winner} - ${new Date(payload.date).toLocaleString()}`;
              } catch (e) {}
          }
          return; 
        }
        if (board.every(cell => cell !== "")) {
         gameActive = false;
         if (pTttWinner) pTttWinner.textContent = 'Empate';
         const tiesEl = document.querySelector('.divEmpates p');
         let t = Number(tiesEl?.textContent) || 0;
         t++;
         if (tiesEl) tiesEl.textContent = t;
         scores.ties = t;
          
           try {
             const payload = { winner: 'Empate', date: Date.now() };
             localStorage.setItem('tttLastScore', JSON.stringify(payload));
             const pUlt = document.querySelector('.div-ultima p');
             if (pUlt) pUlt.textContent = `Última puntuación: ${payload.winner} - ${new Date(payload.date).toLocaleString()}`;
           } catch (e) {}
         return;
        }
        turno = turno === 'X' ? 'O' : 'X';
        pTttWinner.textContent = `Turno del jugador: ${turno}`;
      }
    });
  });

  const clearUI = () => {
    casillas.forEach(casilla => {
        casilla.textContent = "";
    });
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    turno = "X";
    pTttWinner.textContent = `Turno del jugador: ${turno}`;
  }

  newGameButton.addEventListener('click', () => {
    clearUI();
  });
  
  restartButton.addEventListener('click', () => {
    clearUI();
    scores = { X: 0, O: 0, ties: 0 };
    const elX = document.querySelector('.divJugador-X p');
    const elT = document.querySelector('.divEmpates p');
    const elO = document.querySelector('.divJugador-O p');
    if (elX) elX.textContent = '0';
    if (elT) elT.textContent = '0';
    if (elO) elO.textContent = '0';
  })

}

const checkWinner = () => {
  for (const [a, b, c] of lineas_ganadoras) {
    
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] }; 
    }
}}

export default initTicTacToe;