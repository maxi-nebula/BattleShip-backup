/** @format */

import { indexOf } from "lodash";

function chooseRandomNumber() {
  const allBotGrids = document.querySelectorAll(".grid-item1");

  const random = Math.floor(Math.random() * allBotGrids.length);
  let gridValue = allBotGrids[random].value;

  return gridValue;
}

export default chooseRandomNumber;
