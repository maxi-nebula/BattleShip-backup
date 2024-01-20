/** @format */
import "../src/style.css";

function applyStyle(occupiedPositions) {
  const gameBoardGrids = document.querySelectorAll(".grid-item");
  for (const position in occupiedPositions) {
    gameBoardGrids.forEach((grid) => {
      if (grid.value == occupiedPositions[position]) {
        grid.className = "ship";
      }
    });
  }
}

export default applyStyle;
