/** @format */

function chooseRandomNumber(availablePositions) {
  //const allBotGrids = document.querySelectorAll(".grid-item1");
  console.log("choose random number");
  console.log(availablePositions);

  const random = Math.floor(Math.random() * availablePositions.length);
  let gridValue = availablePositions[random];

  return gridValue;
}

export default chooseRandomNumber;
