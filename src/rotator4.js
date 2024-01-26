/** @format */

function rotateShip4(grVal, mVal, rtFactor) {
  let initialPosition = parseInt(grVal);
  let finalPosition = parseInt(grVal) + 20;
  let ship4Vertical = [];
  let temp = (grVal / 10).toString();
  let digit = temp[0];
  if (grVal == 100) {
    let initialPosition = parseInt(grVal) - 20;
    let finalPosition = parseInt(grVal);
    for (let i = initialPosition; i <= finalPosition; ) {
      ship4Vertical.push(i);
      i = i + 10;
    }
  }

  if (digit < 8) {
    for (let i = initialPosition; i <= finalPosition; ) {
      ship4Vertical.push(i);
      i = i + 10;
    }
  } else {
    if (digit == 8) {
      let initialPosition = parseInt(grVal) - 10;
      let finalPosition = parseInt(grVal) + 10;
      for (let i = initialPosition; i <= finalPosition; ) {
        ship4Vertical.push(i);
        i = i + 10;
      }
    } else if (digit == 9) {
      let initialPosition = parseInt(grVal) - 20;
      let finalPosition = parseInt(grVal);
      for (let i = initialPosition; i <= finalPosition; ) {
        ship4Vertical.push(i);
        i = i + 10;
      }
    }
  }

  return ship4Vertical;
}

export default rotateShip4;
