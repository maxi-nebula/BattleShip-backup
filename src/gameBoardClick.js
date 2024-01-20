/** @format */
import placeShips from "./placeShips";
import "../src/style.css";

let clickCount = 0;

function gameBoardClick() {
  const gameBoardGrids = document.querySelectorAll(".grid-item");

  gameBoardGrids.forEach((grid) => {
    grid.addEventListener(
      "click",
      (event) => {
        clickCount = clickCount + 1;
        if (clickCount <= 5) {
          placeShips(grid.value, clickCount);
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
