/** @format */
function botBoard(rows, columns) {
  const container = document.getElementById("container1");

  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);

  for (let c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    cell.value = `${c + 1}`;
    container.appendChild(cell).className = "grid-item";
  }
}

export default botBoard;
