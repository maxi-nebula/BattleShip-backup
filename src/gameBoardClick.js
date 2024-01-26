/** @format */
import placeShips from "./placeShips";
import "../src/style.css";
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
        } else {
          console.log("click count exceeded 5 ..starting game");
        }
      },
      { once: true }
    );
  });

  return gameBoardGrids;
}

export default gameBoardClick;
