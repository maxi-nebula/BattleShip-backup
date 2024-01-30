/** @format */

import gameBoard from "./gameBoard";
import gameBoardClick from "./gameBoardClick";
import choosingBotPositions from "./choosingBotPositions";

gameBoard(10, 10, "container", "grid-item");
gameBoard(10, 10, "container1", "grid-item1");

const gBC = gameBoardClick();
choosingBotPositions();
