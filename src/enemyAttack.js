/** @format */
import chooseRandomNumber from "./botRandomNumber";
function enemyAttack(playerPositions) {
  console.log("enemy is choosing a target");
  const enemyChosenPosition = chooseRandomNumber(playerPositions);
  console.log(enemyChosenPosition);
}

export default enemyAttack;
