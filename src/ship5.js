/** @format */

import calculateAvailablePositions from "./chooseNewPositions";

function placeShipFive(grValue, modValue, clkCount) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipFivePositions = [];
  let position = grValue;
  let finalPosition = modValue + 1;
  if (modValue <= 9 && modValue != 0) {
    for (let i = parseInt(modValue); i <= finalPosition; i++) {
      shipFivePositions.push(parseInt(position));
      position = parseInt(position) + 1;
    }
  } else if (availablePositions == 1) {
    let initialPosition = parseInt(grValue);
    let finalPosition = parseInt(grValue) + 1;
    for (let i = initialPosition; i <= finalPosition; i++) {
      shipFivePositions.push(i);
    }
  } else if (modValue == 0) {
    let initialPosition = parseInt(grValue) - 1;
    let finalPosition = parseInt(grValue);
    for (let i = initialPosition; i <= finalPosition; i++) {
      shipFivePositions.push(i);
    }
  }

  return shipFivePositions;
}

export default placeShipFive;
