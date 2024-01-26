/** @format */

function rotateShip5(grVal, mVal, rtFactor) {
  let initialPosition = parseInt(grVal);
  let finalPosition = parseInt(grVal) + 10;
  let ship5Vertical = [];
  let temp = (grVal / 10).toString();
  let digit = temp[0];
  if (grVal == 100) {
    let initialPosition = parseInt(grVal) - 10;
    let finalPosition = parseInt(grVal);
    for (let i = initialPosition; i <= finalPosition; ) {
      ship5Vertical.push(i);
      i = i + 10;
    }
  }

  if (digit < 9) {
    for (let i = initialPosition; i <= finalPosition; ) {
      ship5Vertical.push(i);
      i = i + 10;
    }
  } else {
    if (digit == 9) {
      let initialPosition = parseInt(grVal) - 10;
      let finalPosition = parseInt(grVal);
      for (let i = initialPosition; i <= finalPosition; ) {
        ship5Vertical.push(i);
        i = i + 10;
      }
    }
  }

  return ship5Vertical;
}

export default rotateShip5;
