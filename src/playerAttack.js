/** @format */

function playerAttack(position, logBotChosenPostions) {
  let isAttacked = false;
  logBotChosenPostions.forEach((bposition) => {
    if (bposition == position) {
      console.log("Its a hit..");
      isAttacked = true;
    }
  });
  return isAttacked;
}
export default playerAttack;
