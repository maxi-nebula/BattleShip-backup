/** @format */
/** @format */
/** @format */

import calculateAvailablePositions from "./chooseNewPositions";
function rotateShip3(grVal, mVal, rtFactor) {
  console.log({ grVal, mVal, rtFactor });

  let initialPosition = parseInt(grVal);
  let finalPosition = parseInt(grVal) + 20;
  let ship1Vertical = [];
  let temp = (grVal / 10).toString();
  let digit = temp[0];

  if (digit < 8) {
    for (let i = initialPosition; i <= finalPosition; ) {
      ship1Vertical.push(i);
      i = i + 10;
    }
  } else {
    if (digit == 8) {
      let initialPosition = parseInt(grVal) - 20;
      let finalPosition = parseInt(grVal) + 10;
      for (let i = initialPosition; i <= finalPosition; ) {
        ship1Vertical.push(i);
        i = i + 10;
      }
    } else if (digit == 9) {
      let initialPosition = parseInt(grVal) - 30;
      let finalPosition = parseInt(grVal);
      for (let i = initialPosition; i <= finalPosition; ) {
        ship1Vertical.push(i);
        i = i + 10;
      }
    }
  }
  rtFactor == false;
  return ship1Vertical;
}

export default rotateShip3;
