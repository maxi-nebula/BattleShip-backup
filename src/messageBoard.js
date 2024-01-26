/** @format */
import "../src/style.css";

function messageBoard(message) {
  const board = document.getElementById("messagebrd");
  board.innerHTML = message;
}

export default messageBoard;
