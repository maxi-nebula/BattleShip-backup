/** @format */

import logOccupiedPositions from "./logOccupiedPositions";
import setNextTarget from "./setNextTarget";
import chooseRandomNumber from "./botRandomNumber";
import messageBoard from "./messageBoard";
import checkWinner from "./checkWinner";

let isPlayerAttacked = false;
let hitTrigger = 0;

function enemyAttack(botchosenPosition, incomingTriggerStatus) {
  let checkWinnerTrigger = 0;
  if (incomingTriggerStatus == 0) {
    hitTrigger == 0;
  }
  const convertedBotChosenPostion = parseInt(botchosenPosition);
  console.log(convertedBotChosenPostion);

  const playerOccupiedPostions = logOccupiedPositions();

  playerOccupiedPostions.forEach((occupiedPosition) => {
    if (occupiedPosition == botchosenPosition) {
      isPlayerAttacked == true;
      checkWinnerTrigger = 1;

      const hitGrid = document.getElementById(`p${convertedBotChosenPostion}`);
      console.log("here");

      hitGrid.className = "mark_red";
      messageBoard("Your ship has been hit by the enemy.. ");
      isPlayerAttacked = true;
      hitTrigger = 1;
      const retunedPositions = checkWinner(
        convertedBotChosenPostion,
        retunedPositions
      );
    }
  });

  /* if (checkWinnerTrigger == 1) {
    checkWinner(convertedBotChosenPostion);
    console.log(checkWinnerTrigger);
  }*/
  return { isPlayerAttacked, botchosenPosition, hitTrigger };
}

export default enemyAttack;
