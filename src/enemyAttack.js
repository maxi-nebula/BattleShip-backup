/** @format */

import logOccupiedPositions from "./logOccupiedPositions";
import logAttackedPositions from "./logAttackedPositions";
import chooseRandomNumber from "./botRandomNumber";

function enemyAttack() {
  let isPlayerAttacked = false;
  const botchosenPosition = chooseRandomNumber();
  console.log(`target positon is ${botchosenPosition}`);
  const playerOccupiedPostions = logOccupiedPositions();

  playerOccupiedPostions.forEach((occupiedPosition) => {
    if (occupiedPosition == botchosenPosition.value) {
      isPlayerAttacked == true;
    } else {
      isPlayerAttacked == false;
    }
  });
  console.log(isPlayerAttacked);

  return isPlayerAttacked;
}

export default enemyAttack;
