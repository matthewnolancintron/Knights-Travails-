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
     first calculate list of possible moves (coordiants) 
     that the knight can move to from the starting coordiante
     don't allow any moves to go off the board
     for now store the list of coordinates into an array and 
     log the result
     */
  /**
   *
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
   * left is minus
   * right is plus
   * up is plus
   * down is minus
   *
   * All possible moves if starting at
   * coordinate [0,0] is:
   *     2 to the left and up 1, [0-2,0+1] = [-2,1], outofbounds
   *     2 to the left and down 1, [0-2,0-1] = [-2,-1], outofbounds
   *     2 to the right and up 1, [0+2,0+1] = [2,1], possible move
   *     2 to the right and down 1, [0+2,0-1] = [2,-1], outofbounds
   *     2 up and 1 to the left, [0-1,0+2] = [-1,2], outofbounds
   *     2 up and 1 to the right, [0+1,0+2] = [1,2], possible move
   *     2 down and 1 to the left, [0-1,0-2] = [-1,-2], outofbounds
   *     2 down and 1 to the right, [0+1,0-2] = [1,-2], outofbounds
   * only possible moves from [0,0] is [1,2] and [2,1].
   *
   */

  //stores possible moves that can be made from starting coord
  let possibleMoves = [];

  //adding move A: 2 to the left and up 1, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e-2 : e+1));

  //adding move B: 2 to the left and down 1, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e-2 : e-1));

  //adding move C: 2 to the right and up 1, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e+2 : e+1));

  //adding move D: 2 to the right and down 1, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e+2 : e-1));
  
  //adding move E: 2 up and 1 to the left, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e-1 : e+2)); 

  //adding move F: 2 up and 1 to the right, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e+1 : e+2)); 

  //adding move G: 2 down and 1 to the left, to possibleMoves 
  possibleMoves.push(start.map((e,i)=> i==0 ? e-1 : e-2)); 

  //adding move H: 2 down and 1 to the right, to possibleMoves
  possibleMoves.push(start.map((e,i)=> i==0 ? e+1 : e-2)); 

  //filter possible moves down to only moves that are on the board
  possibleMoves = possibleMoves.filter(coord => (coord[0] > 0 && coord[0] < 8 ) && (coord[1] > 0 && coord[1] < 8 ));

  /**
   * 
   * "For this project,
   *  you’ll need to use a data structure that’s similar
   *  (but not identical) to a binary tree."
   * --- from odin project
   * 
   * 
   * figure out a data structure suitable for storing
   * possible moves such that they are children in a tree
   * 
   * Treat all possible moves the knight
   * could make as children in a tree.
   * 
   * possibleMoves is an array of arrays
   * it is also an array of edges 
   * which is called an edge list
   * to search it will use linear search to find a particular
   * edge or coord in this context
   * 
   * project ask for possible moves to be store in a data
   * structure similar to a tree.
   * Q:would an edge list be a suitable data structure?
   * A:todo: figure it out.
   * 
   */


  /**
   * once the list of possible moves part is worked out
   * figure out how to represent a list of moves
   * or cooridnaites [[a,b],[c,d]] as children in a tree
   * I assume nodes maybe a linked list?
   */
  /**
   * Decide which search algorithm is best to use for this case.
   * Hint: one of them could be a potentially infinite series.
   */
  /**
   * Use the chosen search algorithm to
   * find the shortest path between the starting square
   * (or node) and the ending square.
   * Output what that full path looks like, e.g.:
   * > knightMoves([3,3],[4,3])
      => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
   */
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
