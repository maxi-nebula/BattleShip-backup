/** @format */

import placeshipOne from "./ship1";
import placeShipTwo from "./ship2";
import placeShipThree from "./ship3";
import placeShipFour from "./ship4";
import placeShipFive from "./ship5";
import logOccupiedPositions from "./logOccupiedPositions";
import applyStyle from "./applyStyle";
import messageBoard from "./messageBoard";
const startButton = document.getElementById("startBtn");

function placeShips(gridValue, clkCount, rf) {
  let modValue = gridValue % 10;

  if (clkCount == 1) {
    const ship1Positions = placeshipOne(gridValue, modValue, clkCount, rf);

    messageBoard("Placing your Carrier.....");

    applyStyle(ship1Positions, "grid-item");
    logOccupiedPositions(ship1Positions);
  } else if (clkCount == 2) {
    const ship2Positions = placeShipTwo(gridValue, modValue, clkCount, rf);
    messageBoard("Placing your Combat Ship.....");
    applyStyle(ship2Positions, "grid-item");
    logOccupiedPositions(ship2Positions);
  } else if (clkCount == 3) {
    const ship3Positions = placeShipThree(gridValue, modValue, clkCount, rf);
    messageBoard("Placing your Cruiser.....");
    applyStyle(ship3Positions, "grid-item");
    logOccupiedPositions(ship3Positions);
  } else if (clkCount == 4) {
    const ship4Positions = placeShipFour(gridValue, modValue, clkCount, rf);
    messageBoard("Placing your Submarine.....");
    applyStyle(ship4Positions, "grid-item");
    logOccupiedPositions(ship4Positions);
  } else if (clkCount == 5) {
    const ship5Positions = placeShipFive(gridValue, modValue, clkCount, rf);
    messageBoard("Placing your Destroyer.....");
    applyStyle(ship5Positions, "grid-item");

    logOccupiedPositions(ship5Positions);

    startButton.style.visibility = "visible";

    function startGame() {
      startButton.style.visibility = "hidden";
      messageBoard("Starting game, choose a target to attack");
    }

    startButton.addEventListener("click", () => {
      const enemyBoard = document.getElementById("container1");
      const enemylabel = document.getElementById("enemy_name");
      enemyBoard.style.visibility = "visible";
      enemylabel.style.visibility = "visible";
      startGame();
    });
  }
}

export default placeShips;
