/** @format */
import logOccupiedPositions from "./logOccupiedPositions";
import messageBoard from "./messageBoard";
import logAttackedPositions from "./logAttackedPositions";
const playerPositions = logOccupiedPositions();
function checkWinner(incomingPlayerAttackedPosition, balancePositions) {
  function removeTargetedPlayerPosition(
    balancePositions,
    incomingPlayerAttackedPosition
  ) {
    balancePositions.splice(
      balancePositions.indexOf(incomingPlayerAttackedPosition),
      1
    );
  }

  removeTargetedPlayerPosition(
    balancePositions,
    incomingPlayerAttackedPosition
  );
  console.log(balancePositions);

  if ((balancePositions.length = 0)) {
    messageBoard("Enemy has sunken all your ships.You lost your battle.");
  }

  return balancePositions;
}

export default checkWinner;
