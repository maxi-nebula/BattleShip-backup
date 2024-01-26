/** @format */

import calculateAvailablePositions from "./chooseNewPositions";
import rotateShip4 from "./rotator4";

function placeShipFour(grValue, modValue, clkCount, rotateFactor) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipFourPositions = [];
  let position = grValue;
  let finalPosition = modValue + 2;

  if (rotateFactor == false) {
    if (modValue <= 8 && modValue != 0) {
      for (let i = parseInt(modValue); i <= finalPosition; i++) {
        shipFourPositions.push(parseInt(position));
        position = parseInt(position) + 1;
      }
    } else if (availablePositions == 2) {
      let initialPosition = parseInt(grValue) - 1;
      let finalPosition = parseInt(grValue) + 1;
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipFourPositions.push(i);
      }
    } else if (availablePositions == 1) {
      let initialPosition = parseInt(grValue) - 2;
      let finalPosition = parseInt(grValue);
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipFourPositions.push(i);
      }
    } else if (modValue == 0) {
      let initialPosition = parseInt(grValue) - 2;
      let finalPosition = parseInt(grValue);
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipFourPositions.push(i);
      }
    }
  } else if (rotateFactor == true) {
    const ship4Vertical = rotateShip4(grValue, modValue, rotateFactor);
    for (let pos in ship4Vertical) {
      shipFourPositions.push(ship4Vertical[pos]);
    }
  }

  return shipFourPositions;
}

export default placeShipFour;
