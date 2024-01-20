/** @format */
import removeEventListener from "./removeEventListener";
const occupiedPositions = [];

function logOccupiedPositions(incomingPositions) {
  for (const position in incomingPositions) {
    occupiedPositions.push(incomingPositions[position]);
  }
  removeEventListener(occupiedPositions);
  return occupiedPositions;
}

export default logOccupiedPositions;
