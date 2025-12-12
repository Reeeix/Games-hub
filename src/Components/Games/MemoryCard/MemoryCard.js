import { arrayMcg } from "./MemoryCardHeader";

let seleccionadas = [];
let movimientos = 0;
let parejas = 0;
let bloqueado = false; 

let segundos = 0;
let intervalo;
let temporizadorIniciado = false; 
const iniciarTemporizador = () => {
  if (temporizadorIniciado) return; 
  temporizadorIniciado = true; 
  intervalo = setInterval(() => {
    segundos++;
    const tiempoEl = document.querySelector(".divTiempo p");
    if (tiempoEl) tiempoEl.textContent = segundos;
  }, 1000);}

const pararTemporizador = () => {
  clearInterval(intervalo);
  temporizadorIniciado = false; 
}

function actualizarHeader(movimientos, parejas) {
  document.querySelector(".divMovimientos p").textContent = movimientos;
  document.querySelector(".divParejas p").textContent = parejas;
}

const clearScoreandBoard = () => {
  seleccionadas = [];
  movimientos = 0;
  parejas = 0;
  bloqueado = false;
  segundos = 0;
  pararTemporizador();
  document.querySelector(".divTiempo p").textContent = segundos;
  document.querySelectorAll(".casillamcg p").forEach(p => p.classList.add("hidden"));
  actualizarHeader(0, 0);
}

const initMeMoryCard = () => {
  const casillas = Array.from(document.querySelectorAll(".casillamcg"));
  casillas.forEach((casilla) => {
    casilla.addEventListener("click", () => {
      manejarClick(casilla);
    });});
  const botonNuevaPartida = document.querySelector(".newgame-button-mcg");
  botonNuevaPartida.addEventListener("click", () => {
    clearScoreandBoard();
  })};

function manejarClick(casilla) {
  iniciarTemporizador();
  const p = casilla.querySelector("p");
  if (bloqueado) return;
  if (!p.classList.contains("hidden")) return;
  p.classList.remove("hidden");
  seleccionadas.push(casilla);
  movimientos++;
  actualizarHeader(movimientos, parejas)
  if (seleccionadas.length === 2) {
    bloqueado = true;
    const [primera, segunda] = seleccionadas;
    const id1 = primera.dataset.id;
    const id2 = segunda.dataset.id;
    const emoji1 = primera.querySelector("p").textContent;
    const emoji2 = segunda.querySelector("p").textContent;
    if (emoji1 === emoji2 && id1 !== id2) {
      parejas++;
      actualizarHeader(movimientos, parejas)
      seleccionadas = []; 
      bloqueado = false;
    } else {
      setTimeout(() => {
        primera.querySelector("p").classList.add("hidden");
        segunda.querySelector("p").classList.add("hidden");
        seleccionadas = []; 
        bloqueado = false;
      }, 1000);}}
  if (parejas === 8) {
    pararTemporizador();
    arrayMcg[3].Movimientos = movimientos;
    arrayMcg[3].Tiempo = segundos;
    try {
      const payload = { movimientos, tiempo: segundos, date: Date.now() };
      localStorage.setItem('mcgLastScore', JSON.stringify(payload));
    } catch (e) {}
    const divPuntuacion = document.querySelector('.divÚltima-puntuación');
    if (divPuntuacion) {
      divPuntuacion.classList.remove('hidden');
      const parrafo = divPuntuacion.querySelector('p');
      if (parrafo) parrafo.textContent = `${movimientos}mov/${segundos}s`;
    }}};

export default initMeMoryCard;