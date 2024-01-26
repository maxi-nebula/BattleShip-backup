/** @format */

import calculateAvailablePositions from "./chooseNewPositions";
import rotateShip2 from "./rotator2";

function placeShipTwo(grValue, modValue, clkCount, rotateFactor) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipTwoPositions = [];
  let position = grValue;
  let finalPosition = modValue + 3;
  console.log(`rotate factor inside ship 2 is ${rotateFactor}`);
  if (rotateFactor == false) {
    if (modValue <= 7 && modValue != 0) {
      for (let i = parseInt(modValue); i <= finalPosition; i++) {
        shipTwoPositions.push(parseInt(position));
        position = parseInt(position) + 1;
      }
    } else if (availablePositions == 3) {
      let initialPosition = parseInt(grValue) - 1;
      let finalPosition = parseInt(grValue) + 2;
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipTwoPositions.push(i);
      }
    } else if (availablePositions == 2) {
      let initialPosition = parseInt(grValue) - 2;
      let finalPosition = parseInt(grValue) + 1;
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipTwoPositions.push(i);
      }
    } else if (modValue == 0) {
      let initialPosition = parseInt(grValue) - 3;
      let finalPosition = parseInt(grValue);
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipTwoPositions.push(i);
      }
    }
  } else if (rotateFactor == true) {
    const ship2Vertical = rotateShip2(grValue, modValue, rotateFactor);
    for (let pos in ship2Vertical) {
      shipTwoPositions.push(ship2Vertical[pos]);
    }
  }

  return shipTwoPositions;
}

export default placeShipTwo;
