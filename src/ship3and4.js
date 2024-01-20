/** @format */
/** @format */

import calculateAvailablePositions from "./chooseNewPositions";

function placeShipThreeAndFour(grValue, modValue, clkCount) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipThreePositions = [];
  let position = grValue;
  let finalPosition = modValue + 2;
  if (modValue <= 8 && modValue != 0) {
    for (let i = parseInt(modValue); i <= finalPosition; i++) {
      shipThreePositions.push(parseInt(position));
      position = parseInt(position) + 1;
    }
  } else if (availablePositions == 2) {
    let initialPosition = parseInt(grValue) - 1;
    let finalPosition = parseInt(grValue) + 1;
    for (let i = initialPosition; i <= finalPosition; i++) {
      shipThreePositions.push(i);
    }
  } else if (availablePositions == 1) {
    let initialPosition = parseInt(grValue) - 2;
    let finalPosition = parseInt(grValue);
    for (let i = initialPosition; i <= finalPosition; i++) {
      shipThreePositions.push(i);
    }
  } else if (modValue == 0) {
    let initialPosition = parseInt(grValue) - 2;
    let finalPosition = parseInt(grValue);
    for (let i = initialPosition; i <= finalPosition; i++) {
      shipThreePositions.push(i);
    }
  }

  return shipThreePositions;
}

export default placeShipThreeAndFour;
