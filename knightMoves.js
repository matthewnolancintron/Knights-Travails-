import * as GameBoardAndKnightFactory from "./KnightAndGameBoard.js";

/**
 * shows the shortest possible way to
 * get from one square to another
 * by outputting all squares the knight will
 * stop on along the way
 * 
 * board has 2-dimensional coordinates 
 * 
 * example input output:
    knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
    knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
    knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
 */
function knightMoves(start, end) {
  /**
   * Treat all possible moves the knight
   * could make as children in a tree.
   * don't allow any moves to go off the board
   */
  /**
   * from the starting coordinate of the board
   * find all possible coordinates the knight could
   * make a move to
   *
   * store coordiante or possible moves as children in a tree
   *
   */
  /**
     first calculate list of possible moves (coordiants) 
     that the knight can move to from the starting coordiante
     
     for now store the list of coordinates into an array and 
     log the result
     */
  /**
   * Possible ways a knight can move.
   *
   * moveSetA:
   *     definition A (don't know what to call it):
   *       2 spaces horizontally in one direction
   *       at a time (left or right),
   *       then move 1 space vertically in one direction
   *       at a time (up or down)
   *
   *     definition B (don't know what to call it):
   *     2 to the left and up 1,
   *     2 to the left and down 1,
   *     2 to the right and up 1,
   *     2 to the right and down 1,
   *
   *
   * moveSetB:
   *     definition A (don't know what to call it):
   *         2 spaces vertically in one direction
   *         at a time (up or down),
   *         then move 1 space horizontally in one direction
   *         at a time (left or right)
   *
   *     definition B (don't know what to call it):
   *     2 up and 1 to the left,
   *     2 up and 1 to the right,
   *     2 down and 1 to the left,
   *     2 down and 1 to the right,
   *
   *
   * All possible moves a knight can make
   * as long as the move is still in the bounds
   * of the board:
   *     2 to the left and up 1,
   *     2 to the left and down 1,
   *     2 to the right and up 1,
   *     2 to the right and down 1,
   *     2 up and 1 to the left,
   *     2 up and 1 to the right,
   *     2 down and 1 to the left,
   *     2 down and 1 to the right,
   *
   *
   * Moves are represented as x,y pair coordinates inside
   * an array. [x,y]
   *
   * //todo: formating gameBoard output
   * try console.group
   *
   *
   *
   *
   *   all possible moves if starting at
   *   coordinate [0,0] is:
   *
   *
   *
   *
   *
   */
  /**
   * once the list of possible moves part is work out
   * figure out how to represent a list of moves
   * or cooridnaites [[a,b],[c,d]] as children in a tree
   * I assume nodes maybe a linked list?
   */
  // return list of moves (shortest path)
}

//prints the game board formated to look like a chessboard
//color and bgColor set using ANSI codes
//works for me when using node. 
function printGameBoard(gameBoard) {
  // used to collect the rows of the board
  // and then print them
  let row = [];
  
  //used to track the columns, starts at column 0
  let columnNumber = 0;
  
  //used to track the start of a new row
  let rowNumber = 0;
  
  //used to alternate the styles of each coordinate on the board
  let styleOption = 0;

  //loops through the elements of the board
  //gathering the coordinates in a row 
  gameBoard.gameBoard.forEach((x, i) => {
    // let xCoord = x[0];
    let yCoord = x[1];

    //reset style option when it's even or gets to two.
    //might change expression to styleOption >= 2
    if (styleOption % 2 == 0) {
      styleOption = 0;
    }

    //gathers row data stylized and push to row array 
    //for later printing
    if (yCoord % 8 == columnNumber) {
      //decides styleOption (will alternate)
      if (i % 2 == styleOption) {
        //style a
        row.push(`\x1b[47m${x}\x1b[0m`);
      } else {
        //style b
        row.push(`\x1b[32m${x}\x1b[0m`);
      }
      rowNumber++;
    }

    //prints row data and resets it for the next row
    if (rowNumber == 8) {
      styleOption++;

      columnNumber++;

      rowNumber = 0;
      console.log(row.join(""));
      row = [];
    }

  });
}

let gameBoard = GameBoardAndKnightFactory.GameBoardFactory();

printGameBoard(gameBoard);

let knight = GameBoardAndKnightFactory.KnightFactory();
console.log(knight, "knight");

let shortestPath = knightMoves([0, 0], [1, 2]); //[[0,0],[1,2]]
console.log(shortestPath);
