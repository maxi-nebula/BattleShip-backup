/** @format */
import placeShips from "./placeShips";
import "../src/style.css";
import messageBoard from "./messageBoard";

const rotateBtn = document.getElementById("rotator");
const attackBtn = document.getElementById("attcakBtn");
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
        if (clickCount >= 5) {
          rotateBtn.className = "rotate_button_hide";
          attackBtn.className = "attack_button_appear";
          messageBoard("Prepare to attack...");
        }
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
