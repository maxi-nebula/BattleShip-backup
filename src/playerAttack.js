/** @format */
import messageBoard from "./messageBoard";
import enemyAttack from "./enemyAttack";
import chooseRandomNumber from "./botRandomNumber";
import logAttackedPositions from "./logAttackedPositions";
import setNextTarget from "./setNextTarget";
import { indexOf } from "lodash";

const calculateTarget = true;
let isPlayerAttacked = false;
let trigger = 0;
let possibleNextTargets = [];

function playerAttack(grid, logBotChosenPostions, allPlayerpositions) {
  console.log(`trigger is ${trigger}`);
  let isEnemyAttacked = false;

  logBotChosenPostions.forEach((bposition) => {
    if (bposition == `${grid.value}`) {
      isEnemyAttacked = true;
    }
  });

  if (isEnemyAttacked == true) {
    messageBoard("It's a hit..");
    grid.classList.add("mark_hit");
    grid.innerHTML = "X";
  } else if (isEnemyAttacked == false) {
    messageBoard("It's a miss..");
  }

  function removeTargetedPlayerPosition(
    allPlayerpositions,
    targetedPlayerPosition
  ) {
    //  console.log(allPlayerpositions.indexOf(targetedPlayerPosition));
    allPlayerpositions.splice(
      allPlayerpositions.indexOf(targetedPlayerPosition),
      1
    );
    return allPlayerpositions;
  }
  if (trigger == 0) {
    const targetedPlayerPosition = chooseRandomNumber(
      allPlayerpositions,
      trigger
    );
    const alreadyAttackedPositions = logAttackedPositions(
      targetedPlayerPosition
    );

    allPlayerpositions = removeTargetedPlayerPosition(
      allPlayerpositions,
      targetedPlayerPosition
    );
    isPlayerAttacked = enemyAttack(targetedPlayerPosition);
    trigger = isPlayerAttacked.hitTrigger;
    if (trigger == 1) {
      possibleNextTargets = setNextTarget(isPlayerAttacked.botchosenPosition);
    }
  } else if (trigger == 1) {
    console.log(possibleNextTargets);
    const targetedPlayerPosition = chooseRandomNumber(possibleNextTargets);
    possibleNextTargets = removeTargetedPlayerPosition(
      possibleNextTargets,
      targetedPlayerPosition
    );
    if (possibleNextTargets.length != 0) {
      trigger == 1;
      isPlayerAttacked = enemyAttack(targetedPlayerPosition, trigger);
    } else {
      console.log("array is empty");
      trigger == 0;
      isPlayerAttacked = enemyAttack(allPlayerpositions, trigger);
    }
  }

  //trigger = isPlayerAttacked.hitTrigger;
  /*else if (isPlayerAttacked.isPlayerAttacked == true) {
    const possibleNextTargets = setNextTarget(
      isPlayerAttacked.botchosenPosition
    );
    console.log(possibleNextTargets);
    const targetedPlayerPosition = chooseRandomNumber(possibleNextTargets);
    isPlayerAttacked = enemyAttack(targetedPlayerPosition);
  }*/

  return isEnemyAttacked;
}
export default playerAttack;
