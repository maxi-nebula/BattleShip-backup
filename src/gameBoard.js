/** @format */
import "../src/style.css";

function gameBoard(rows, columns, htmlElement, clsName) {
  const container = document.getElementById(`${htmlElement}`);

  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);

  for (let c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    cell.value = `${c + 1}`;
    cell.id = `p${c + 1}`;
    container.appendChild(cell).className = `${clsName}`;
  }
}

export default gameBoard;
