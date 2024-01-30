/** @format */

import botRotateFactor from "./botRotateFactor";
import placeShips from "./placeShips";
import placeshipOne from "./ship1";

function choosingBotPositions() {
  const rotateFactor = botRotateFactor();
  const allBotGrids = document.querySelectorAll(".grid-item1");
  const random = Math.floor(Math.random() * allBotGrids.length);

  let gridValue = allBotGrids[random].value;
  let modValue = gridValue % 10;
  console.log(gridValue, rotateFactor);
  for (let i = 1; i <= 1; i++) {
    const bShipOnePositions = placeshipOne(
      gridValue,
      modValue,
      i,
      rotateFactor
    );
    console.log(bShipOnePositions);
  }
}

export default choosingBotPositions;
