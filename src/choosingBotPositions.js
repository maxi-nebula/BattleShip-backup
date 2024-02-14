/** @format */

import botRotateFactor from "./botRotateFactor";

import placeshipOne from "./ship1";
import placeShipTwo from "./ship2";
import placeShipThree from "./ship3";
import placeShipFour from "./ship4";
import placeShipFive from "./ship5";
import chooseRandomNumber from "./botRandomNumber";
import applyStyle from "./applyStyle";
import playerAttack from "./playerAttack";

let allPlayerpositions = [];
function choosingBotPositions() {
  const allBotGrids = document.querySelectorAll(".grid-item1");
  const allPlayerGrids = document.querySelectorAll(".grid-item1");

  allPlayerGrids.forEach((grid) => {
    allPlayerpositions.push(grid.value);
  });

  const availablePositions = [];
  const availablePositionsBackUp = [];
  allBotGrids.forEach((grid) => {
    availablePositions.push(grid.value);
    availablePositionsBackUp.push(grid.value);
  });
  const logBotChosenPostions = [];

  for (let i = 1; i <= 5; i++) {
    if (i == 1) {
      let gridValue = chooseRandomNumber(availablePositions);
      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipOnePositions = placeshipOne(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      // applyStyle(bShipOnePositions, "grid-item1");

      bShipOnePositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });

      let x = availablePositions.length;

      while (x--) {
        for (let j = 0; j < bShipOnePositions.length; j++) {
          if (availablePositions[x] == bShipOnePositions[j]) {
            availablePositions.splice(bShipOnePositions[j] - 1, 1);
          }
        }
      }
    } else if (i == 2) {
      let gridValue = chooseRandomNumber(availablePositions);

      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipTwoPositions = placeShipTwo(
        gridValue,
        modValue,
        i,
        rotateFactor
      );
      // applyStyle(bShipTwoPositions, "grid-item1");
      bShipTwoPositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });

      let x = availablePositions.length;

      while (x--) {
        for (let j = 0; j < bShipTwoPositions.length; j++) {
          if (availablePositions[x] == bShipTwoPositions[j]) {
            availablePositions.splice(bShipTwoPositions[j] - 1, 1);
          }
        }
      }
    } else if (i == 3) {
      let gridValue = chooseRandomNumber(availablePositions);

      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipThreePositions = placeShipThree(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      bShipThreePositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });
      //applyStyle(bShipThreePositions, "grid-item1");

      let x = availablePositions.length;

      while (x--) {
        for (let j = 0; j < bShipThreePositions.length; j++) {
          if (availablePositions[x] == bShipThreePositions[j]) {
            availablePositions.splice(bShipThreePositions[j] - 1, 1);
          }
        }
      }
    } else if (i == 4) {
      let gridValue = chooseRandomNumber(availablePositions);

      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipFourPositions = placeShipFour(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      bShipFourPositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });
      //  applyStyle(bShipFourPositions, "grid-item1");

      let x = availablePositions.length;
      while (x--) {
        for (let j = 0; j < bShipFourPositions.length; j++) {
          if (availablePositions[x] == bShipFourPositions[j]) {
            availablePositions.splice(bShipFourPositions[j] - 1, 1);
          }
        }
      }
    } else if (i == 5) {
      let gridValue = chooseRandomNumber(availablePositions);

      const rotateFactor = botRotateFactor();

      let modValue = gridValue % 10;
      const bShipFivePositions = placeShipFive(
        gridValue,
        modValue,
        i,
        rotateFactor
      );

      bShipFivePositions.forEach((position) => {
        logBotChosenPostions.push(position);
      });
      // applyStyle(bShipFivePositions, "grid-item1");
    }
  }

  allBotGrids.forEach((grid) => {
    grid.addEventListener("click", () => {
      const isAttacked = playerAttack(
        grid,
        logBotChosenPostions,
        allPlayerpositions
      );
    });
  });
}

export default choosingBotPositions;
