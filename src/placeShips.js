/** @format */

import placeshipOne from "./ship1";
import placeShipTwo from "./ship2";
import placeShipThreeAndFour from "./ship3and4";
import placeShipFive from "./ship5";
import logOccupiedPositions from "./logOccupiedPositions";
import applyStyle from "./applyStyle";

const rotateBtn = document.getElementById("rotator");

let rotateFactor = false;
rotateBtn.addEventListener("click", () => {
  rotateFactor = true;
});

function placeShips(gridValue, clkCount, event) {
  let modValue = gridValue % 10;

  if (clkCount == 1) {
    const ship1Positions = placeshipOne(
      gridValue,
      modValue,
      clkCount,
      rotateFactor
    );

    applyStyle(ship1Positions);
    logOccupiedPositions(ship1Positions, event);
  } else if (clkCount == 2) {
    const ship2Positions = placeShipTwo(
      gridValue,
      modValue,
      clkCount,
      rotateFactor
    );

    console.log(gridValue);

    applyStyle(ship2Positions);
    logOccupiedPositions(ship2Positions, event);
  } else if (clkCount == 3) {
    const ship3Positions = placeShipThreeAndFour(gridValue, modValue, clkCount);

    applyStyle(ship3Positions);
    logOccupiedPositions(ship3Positions, event);
  } else if (clkCount == 4) {
    const ship4Positions = placeShipThreeAndFour(gridValue, modValue, clkCount);

    applyStyle(ship4Positions);
    logOccupiedPositions(ship4Positions, event);
  } else if (clkCount == 5) {
    const ship5Positions = placeShipFive(gridValue, modValue, clkCount);
    applyStyle(ship5Positions);

    logOccupiedPositions(ship5Positions, event);
  }
}

export default placeShips;
