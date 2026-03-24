const storageKey = "rgScoreData";

let timeoutCambio = null;
let tiempoInicio = 0;
let estadoJuego = "idle";

let reactionData = {
	lastTime: null,
	bestTime: null,
	tries: 0
};

const getElements = () => {
	const gameBox = document.querySelector(".rgGameBox");
	const pMessage = document.querySelector(".pMessageRg");
	const buttonIniciar = document.querySelector(".buttonIniciarRg");
	const pLastScore = document.querySelector(".divLast-score p");
	const pBestTime = document.querySelector(".divMejor-tiempo p");
	const pTries = document.querySelector(".divIntentos p");

	return {
		gameBox,
		pMessage,
		buttonIniciar,
		pLastScore,
		pBestTime,
		pTries
	};
};

const readStorage = () => {
	try {
		const raw = localStorage.getItem(storageKey);
		if (!raw) return;
		const parsed = JSON.parse(raw);
		if (typeof parsed?.tries === "number") reactionData.tries = parsed.tries;
		if (typeof parsed?.lastTime === "number") reactionData.lastTime = parsed.lastTime;
		if (typeof parsed?.bestTime === "number") reactionData.bestTime = parsed.bestTime;
	} catch (e) {}
};

const saveStorage = () => {
	try {
		localStorage.setItem(storageKey, JSON.stringify(reactionData));
	} catch (e) {}
};

const updateHeader = () => {
	const { pLastScore, pBestTime, pTries } = getElements();
	if (pLastScore) {
		pLastScore.textContent = reactionData.lastTime ? `${reactionData.lastTime} ms` : "-";
	}
	if (pBestTime) {
		pBestTime.textContent = reactionData.bestTime ? `${reactionData.bestTime} ms` : "-";
	}
	if (pTries) {
		pTries.textContent = `${reactionData.tries}`;
	}
};

const clearPendingRound = () => {
	if (timeoutCambio) {
		clearTimeout(timeoutCambio);
		timeoutCambio = null;
	}
	estadoJuego = "idle";
};

const setVisualState = (newState, texto, showButton = false, buttonText = "Iniciar") => {
	const { gameBox, pMessage, buttonIniciar } = getElements();
	if (!gameBox || !pMessage || !buttonIniciar) return;

	gameBox.classList.remove("estado-inicial", "estado-espera", "estado-listo", "estado-resultado");
	gameBox.classList.add(`estado-${newState}`);

	pMessage.textContent = texto;
	buttonIniciar.style.display = showButton ? "inline-flex" : "none";
	buttonIniciar.textContent = buttonText;
};

const resetToIdle = (customText) => {
	clearPendingRound();
	setVisualState(
		"inicial",
		customText || "Dale a iniciar, y cuando la pantalla se ponga roja, haz click lo más rapido que puedas!",
		true,
		"Iniciar"
	);
};

const prepararAhora = () => {
	estadoJuego = "ready";
	tiempoInicio = performance.now();
	setVisualState("listo", "AHORA!");
};

const startRound = () => {
	if (estadoJuego === "waiting" || estadoJuego === "ready") return;

	estadoJuego = "waiting";
	setVisualState("espera", "Estate atento...");

	const randomDelay = Math.floor(Math.random() * 2500) + 1500;
	timeoutCambio = setTimeout(prepararAhora, randomDelay);
};

const onGameBoxClick = () => {
	if (estadoJuego === "waiting") {
		clearPendingRound();
		setVisualState("resultado", "Te adelantaste... pulsa iniciar otra vez", true, "Iniciar");
		return;
	}

	if (estadoJuego !== "ready") return;

	const tiempoFinal = performance.now();
	const reactionTime = Math.round(tiempoFinal - tiempoInicio);

	reactionData.lastTime = reactionTime;
	reactionData.tries += 1;
	if (!reactionData.bestTime || reactionTime < reactionData.bestTime) {
		reactionData.bestTime = reactionTime;
	}

	saveStorage();
	updateHeader();

	estadoJuego = "result";
	setVisualState("resultado", `Tu reacción: ${reactionTime} ms`, true, "Iniciar otra vez");
};

const initReactionGame = () => {
	clearPendingRound();
	readStorage();
	updateHeader();

	const { gameBox, buttonIniciar } = getElements();
	if (!gameBox || !buttonIniciar) return;

	resetToIdle();

	buttonIniciar.addEventListener("click", (ev) => {
		ev.stopPropagation();
		startRound();
	});

	gameBox.addEventListener("click", onGameBoxClick);
};

export { clearPendingRound };
export default initReactionGame;
