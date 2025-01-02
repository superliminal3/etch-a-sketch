const body = document.querySelector("body");
const topContainer = document.createElement("div");

body.setAttribute("style", "margin: 0px; padding: 0px;");
topContainer.setAttribute("style", "display: flex; width: 100vw; justify-content: center; padding: 5px;");

const topButton = document.createElement("button");
topButton.addEventListener("click", function() {
	moreThan100: while (true) {
		let gridSizeIn = prompt("Enter new grid size (< 100): ");
		if (gridSizeIn > 100) {
			continue moreThan100;
		} else {
			drawGrid(gridSizeIn);
			break;
		}}});

topButton.textContent = "Change grid size";
topButton.setAttribute("style", "font-size: 24px; background: white; color: black;");

topContainer.appendChild(topButton);
body.appendChild(topContainer);

let gridSizeIn = 16;
let gidx = 0;

function createGridContainer() {
	let gridContainer = document.createElement("div");
	gridContainer.setAttribute("style", "display: flex; flex-wrap: wrap; width: 100vw;");
	gridContainer.setAttribute("id", "gridContainer");
	body.appendChild(gridContainer);
}

function drawGrid(gridSize) {
	if (gidx == 1) {
		body.removeChild(gridContainer);
	}
	createGridContainer();

	let tile = [];

	if (gidx == 1) {			// idk why, but without this		
		gridSize = gridSize / 1;	// gridSize in tileWidthCalc declaration
	}					// is multiplied by 10

	let tileWidthCalc = (100 / (gridSize + 1));
	let tileWidth = tileWidthCalc + "%";
	let tileMarginCalc = (((tileWidthCalc * 1) / (gridSize + 1)) / 2) + "%";
	let tileMargin = "round(down, " + tileMarginCalc + ", 1px)"; // disable margin when margin < 1px

	for (let i = 0; i < (gridSize * gridSize); i++) {
		tile[i] = document.createElement("div");
		gridContainer.appendChild(tile[i]);
		tile[i].setAttribute("style", "flex: 0 0 auto; background: black; aspect-ratio: 1/1;");
		tile[i].addEventListener("mouseover", function() {tile[i].style.setProperty("background", "green");});
		tile[i].style.setProperty("width", tileWidth);
		tile[i].style.setProperty("margin", tileMargin);
	}
	gidx = 1;
}

drawGrid(gridSizeIn);
