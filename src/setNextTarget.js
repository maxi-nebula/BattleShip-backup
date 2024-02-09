/** @format */

function setNextTarget(hitTarget) {
  const modHitTarget = hitTarget % 10;
  let temp = (hitTarget / 10).toString();
  let digit = temp[0];
  const possibleTargets = [];

  let hitTarget1 = hitTarget;
  for (let i = modHitTarget; i > 1; i--) {
    hitTarget1 = parseInt(hitTarget1) - 1;
    possibleTargets.push(parseInt(hitTarget1));
  }
  let hitTarget2 = hitTarget;
  for (let i = modHitTarget; i < 10; i++) {
    hitTarget2 = parseInt(hitTarget2) + 1;

    possibleTargets.push(parseInt(hitTarget2));
  }
  return possibleTargets;
}

export default setNextTarget;
