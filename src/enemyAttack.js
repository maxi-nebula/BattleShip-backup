/** @format */

import logOccupiedPositions from "./logOccupiedPositions";
import setNextTarget from "./setNextTarget";
import chooseRandomNumber from "./botRandomNumber";

let isPlayerAttacked = false;
let hitTrigger = 0;

function enemyAttack(botchosenPosition, incomingTriggerStatus) {
  if (incomingTriggerStatus == 0) {
    console.log("hit trigger is 0..");
    hitTrigger == 0;
  }
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
      isPlayerAttacked = true;
      hitTrigger = 1;
    }
  });

  return { isPlayerAttacked, botchosenPosition, hitTrigger };
}

export default enemyAttack;
