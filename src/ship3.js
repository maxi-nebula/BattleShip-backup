/** @format */

import calculateAvailablePositions from "./chooseNewPositions";
import rotateShip3 from "./rotator3";
function placeShipThree(grValue, modValue, clkCount, rotateFactor) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipThreePositions = [];
  let position = grValue;
  let finalPosition = modValue + 2;

  if (rotateFactor == false) {
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
  } else if (rotateFactor == true) {
    const ship3Vertical = rotateShip3(grValue, modValue, rotateFactor);
    for (let pos in ship3Vertical) {
      shipThreePositions.push(ship3Vertical[pos]);
    }
  }

  return shipThreePositions;
}

export default placeShipThree;
