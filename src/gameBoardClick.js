/** @format */
import placeShips from "./placeShips";
import "../src/style.css";
import logOccupiedPositions from "./logOccupiedPositions";
const rotateBtn = document.getElementById("rotator");
let clickCount = 0;
let rotateFactor = false;
rotateBtn.addEventListener("click", () => {
  rotateFactor = true;
});

function gameBoardClick() {
  const gameBoardGrids = document.querySelectorAll(".grid-item");

  gameBoardGrids.forEach((grid) => {
    grid.addEventListener(
      "click",
      (event) => {
        clickCount = clickCount + 1;
        if (clickCount <= 5) {
          placeShips(grid.value, clickCount, rotateFactor);
          rotateFactor = false;
        }
      },
      { once: true }
    );
  });

  return gameBoardGrids;
}

export default gameBoardClick;
