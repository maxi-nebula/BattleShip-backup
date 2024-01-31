/** @format */

import botRotateFactor from "./botRotateFactor";

import placeshipOne from "./ship1";
import placeShipTwo from "./ship2";
import chooseRandomNumber from "./botRandomNumber";
import { indexOf } from "lodash";

function choosingBotPositions() {
  const allBotGrids = document.querySelectorAll(".grid-item1");
  const availablePositions = [];
  const availablePositionsWithout = [];
  allBotGrids.forEach((grid) => {
    availablePositions.push(grid.value);
  });
  const logBotChosenPostions = [];

  for (let i = 1; i <= 2; i++) {
    if (i == 1) {
      let gridValue = chooseRandomNumber();
      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipOnePositions = placeshipOne(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      bShipOnePositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });
      console.log(logBotChosenPostions);
    } else if (i == 2) {
      let gridValue = chooseRandomNumber();

      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipTwoPositions = placeShipTwo(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      bShipTwoPositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });
    }
  }
}

export default choosingBotPositions;
