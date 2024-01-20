/** @format */

function calculateAvailablePositions(Value, rotateFactor) {
  let noOfAvailablePosition = 0;
  if (rotateFactor == false) {
    if (Value == 0) {
      noOfAvailablePosition == 1;
    } else {
      for (let i = Value; i <= 10; i++) {
        noOfAvailablePosition = noOfAvailablePosition + 1;
      }
    }
  } else if (rotateFactor == true) {
    for (let i = Value; i <= 9; i++) {
      noOfAvailablePosition = noOfAvailablePosition + 1;
    }
  }

  return noOfAvailablePosition;
}

export default calculateAvailablePositions;
