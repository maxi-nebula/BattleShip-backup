/** @format */
const attackedPositions = [];

function logAttackedPositions(incomingPositions) {
  attackedPositions.push(incomingPositions);

  return attackedPositions;
}

export default logAttackedPositions;
