/** @format */
import messageBoard from "./messageBoard";
import enemyAttack from "./enemyAttack";
import chooseRandomNumber from "./botRandomNumber";
import logAttackedPositions from "./logAttackedPositions";
import { indexOf } from "lodash";

function playerAttack(grid, logBotChosenPostions, allPlayerpositions) {
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
  /* function removeTargetedPlayerPosition(allPlayerpositions, targetedPosition) {
    return allPlayerpositions.filter(function (ele) {
      return ele != targetedPosition;
    });
  }*/

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
  const targetedPlayerPosition = chooseRandomNumber(allPlayerpositions);
  const alreadyAttackedPositions = logAttackedPositions(targetedPlayerPosition);
  console.log(targetedPlayerPosition);

  allPlayerpositions = removeTargetedPlayerPosition(
    allPlayerpositions,
    targetedPlayerPosition
  );

  return isEnemyAttacked;
}
export default playerAttack;
