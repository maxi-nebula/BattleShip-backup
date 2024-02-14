/** @format */

import logOccupiedPositions from "./logOccupiedPositions";
import setNextTarget from "./setNextTarget";
import chooseRandomNumber from "./botRandomNumber";
import messageBoard from "./messageBoard";

let isPlayerAttacked = false;
let hitTrigger = 0;

function enemyAttack(botchosenPosition, incomingTriggerStatus) {
  console.log(`incoming trigger is ${incomingTriggerStatus}`);
  if (incomingTriggerStatus == 0) {
    hitTrigger == 0;
  }
  const convertedBotChosenPostion = parseInt(botchosenPosition);
  console.log(convertedBotChosenPostion);

  const playerOccupiedPostions = logOccupiedPositions();

  playerOccupiedPostions.forEach((occupiedPosition) => {
    if (occupiedPosition == botchosenPosition) {
      isPlayerAttacked == true;

      const hitGrid = document.getElementById(`p${convertedBotChosenPostion}`);
      console.log(hitGrid);
      hitGrid.className = "mark_red";
      messageBoard("Your ship has been hit by the enemy.. ");
      isPlayerAttacked = true;
      hitTrigger = 1;
    }
  });

  return { isPlayerAttacked, botchosenPosition, hitTrigger };
}

export default enemyAttack;
