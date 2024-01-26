/** @format */

function calculateAvailablePositions(Value) {
  let noOfAvailablePosition = 0;

  if (Value == 0) {
    noOfAvailablePosition == 1;
  } else {
    for (let i = Value; i <= 10; i++) {
      noOfAvailablePosition = noOfAvailablePosition + 1;
    }
  }

  return noOfAvailablePosition;
}

export default calculateAvailablePositions;
