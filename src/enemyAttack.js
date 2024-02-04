/** @format */

import logOccupiedPositions from "./logOccupiedPositions";
import logAttackedPositions from "./logAttackedPositions";
import chooseRandomNumber from "./botRandomNumber";
let isPlayerAttacked = false;
function enemyAttack(botchosenPosition) {
  const convertedBotChosenPostion = parseInt(botchosenPosition);
  console.log(convertedBotChosenPostion);

  const playerOccupiedPostions = logOccupiedPositions();

  playerOccupiedPostions.forEach((occupiedPosition) => {
    if (occupiedPosition == botchosenPosition) {
      isPlayerAttacked == true;
      console.log("hit");
      const hitGrid = document.getElementById(`p${convertedBotChosenPostion}`);
      console.log(hitGrid);
      hitGrid.className = "mark_red";
    }
  });

  return isPlayerAttacked;
}

export default enemyAttack;
