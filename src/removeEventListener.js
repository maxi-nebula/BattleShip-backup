/** @format */

function removeEventListener(occupiedPositions, event) {
  const gameBoardGrids = document.querySelectorAll(".grid-item");

  for (const position in occupiedPositions) {
    gameBoardGrids.forEach((grid) => {
      if (grid.value == occupiedPositions[position]) {
        console.log(grid);
        grid.removeEventListener("click");
      }
    });
  }
}

export default removeEventListener;
