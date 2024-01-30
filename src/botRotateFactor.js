/** @format */

function botRotateFactor() {
  const rotateFactors = [true, false];
  const random = Math.floor(Math.random() * rotateFactors.length);
  let bRotateFactor = rotateFactors[random];

  return bRotateFactor;
}

export default botRotateFactor;
