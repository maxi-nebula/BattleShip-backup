/** @format */

import { indexOf } from "lodash";

function chooseRandomNumber(availablePositions) {
  //const allBotGrids = document.querySelectorAll(".grid-item1");

  const random = Math.floor(Math.random() * availablePositions.length);
  let gridValue = availablePositions[random];

  return gridValue;
}

export default chooseRandomNumber;
