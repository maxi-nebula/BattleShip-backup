/** @format */
import calculateAvailablePositions from "./chooseNewPositions";
import rotateShip from "./rotator1";

function placeshipOne(grValue, modValue, clkCount, rotateFactor) {
  let availablePositions = calculateAvailablePositions(modValue);
  let shipOnePositions = [];
  let position = grValue;
  let finalPosition = modValue + 4;

  if (rotateFactor == false) {
    if (modValue <= 6 && modValue != 0) {
      for (let i = parseInt(modValue); i <= finalPosition; i++) {
        shipOnePositions.push(parseInt(position));
        position = parseInt(position) + 1;
      }
    } else if (availablePositions == 4) {
      {
        let initialPosition = parseInt(grValue) - 1;
        let finalPosition = parseInt(grValue) + 3;
        for (let i = initialPosition; i <= finalPosition; i++) {
          shipOnePositions.push(i);
        }
      }
    } else if (availablePositions == 3) {
      let initialPosition = parseInt(grValue) - 2;
      let finalPosition = parseInt(grValue) + 2;
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipOnePositions.push(i);
      }
    } else if (availablePositions == 2) {
      let initialPosition = parseInt(grValue) - 3;
      let finalPosition = parseInt(grValue) + 1;
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipOnePositions.push(i);
      }
    } else if (modValue == 0) {
      let initialPosition = parseInt(grValue) - 4;
      let finalPosition = parseInt(grValue);
      for (let i = initialPosition; i <= finalPosition; i++) {
        shipOnePositions.push(i);
      }
    }
  } else if (rotateFactor == true) {
    const ship1Vertical = rotateShip(grValue, modValue, rotateFactor);
    for (let pos in ship1Vertical) {
      shipOnePositions.push(ship1Vertical[pos]);
    }
  }

  return shipOnePositions;
}

export default placeshipOne;
