import * as GameBoardAndKnightFactory from './KnightAndGameBoard.js';

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
function knightMoves(start,end){
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

    // return list of moves (shortest path)
}

let shortestPath = knightMoves([0,0],[1,2]); //[[0,0],[1,2]]
console.log(shortestPath);

