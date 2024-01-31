/** @format */
import "../src/style.css";

function applyStyle(occupiedPositions, item) {
  const gameBoardGrids = document.querySelectorAll(`.${item}`);

  for (const position in occupiedPositions) {
    gameBoardGrids.forEach((grid) => {
      if (grid.value == occupiedPositions[position]) {
        grid.className = "ship";
      }
    });
  }
}

export default applyStyle;
