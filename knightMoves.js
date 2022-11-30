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
  //stores possible moves that can be made from starting coord
  let possibleMovesFromStartToEnd = [start];

  //generate possible moves and store to list
  possibleMovesFromStartToEnd.push(
    possibleMovesFromAStartingCoordinate(possibleMovesFromStartToEnd[0])
  );

  //todo:
  let indexOfShortestPath;

  /**
   * checks and generates a list of possible moves
   * and returns a list of possible moves for each of
   * those moves if
   * the end move wasn't in the list of move generated
   * 
   * only generate moves if check fails 
   * 
   * could also return the index of the 
   * move or moves that match the end
   * 
   */
  function checkAndGenerateUntilEnd(
    startingCoordinate,
    endingCoordinate,
    list
  ) {


    if (!isEndMoveInListOfPossibleMoves(list, end)) {
      //
      /**
       * if
       *  after checking for end move and it is not present
       *  anywhere in possible moves
       * then
       *  for each move in possible moves
       *  check that moves child or it's list of possible moves
       *  from its self for the end move
       */
      //list.forEach(x=>someFunc(x))
    } else {
      //end move was in the that list of possible moves
      //use that path as output for knightMoves after
      //formatting it
    }

  }

  /**
   * generate list of possible moves from start to end
   * and if end isn't in that list then generate the
   * list of moves for each move in that list until
   * end move is reached
   *
   * generate list
   * check list for end
   *  if not found repeat
   *  else stop move to next step
   *
   * rather than generate all possible paths from start to end
   * and for each of those paths and so on without checking for
   * end in between I could be wasting computations when end could
   * have already been reached but instead if I had separated
   * those steps generate all then check all
   *
   * instead genearte then check and repeat only if needed
   * as to not waste time computing extra uneccesarry steps
   */

  //checking for end move in the
  //list of possible moves from start

  /**
   * if any of the possible move at this step
   * are the end move then move at that index
   * is the shortest path to the end
   */

  /**
   * check for end move with a
   * "move" order or level order traversal recursively
   *
   * create function that recurivly checks
   * each move in possible moves to see if end move is present
   *
   * base case is when end move is present in that level
   *
   * recursive case is to then check the next level
   * of moves to see if end move is present
   */

  /**
   * finding all possible moves from a starting
   * point to the end point and doing so for each
   * path that is found.
   *
   * then check each possible move in the possible moves
   * array if none of the elements are the end move
   * or don't contain the end move as child then
   * check each possible move from the moves currently
   * in possible moves and check again until an end move
   * is found.
   *
   * what if end move is found but the other moves
   * don't have a move equal to the end move yet
   * but could if an additional calculation was run.
   *
   * I don't think it would matter in this case
   * since one of nodes got to the end move sooner
   * it's a shorter path possibly the shortest path
   * if no other element also contains the end path
   * if two elements share the end move at the same
   * step of looking for possible moves then they are
   * the paths are the same length in terms of the number
   * of moves to reach the end.
   */

  /**
   * "For this project,
   *  you’ll need to use a data structure that’s similar
   *  (but not identical) to a binary tree."
   * 
   * "Treat all possible moves the knight could
   *  make as children in a tree"
   * ---from odin project
   * 
   * if each possible move is a child in a tree then
   * what should the root be?
   * should the starting move be the root and all
   * possible moves be the children nodes?
   * or should each possible move be a tree
   * of it's own just a path to the end.
   * 
   * 
   * figure out a data structure suitable for storing
   * possible moves such that they are children in a tree
   * 
   * Treat all possible moves the knight
   * could make as children in a tree.
   * 
   * //edge list
   * possibleMoves is an array of arrays
   * it is also an array of edges 
   * which is called an edge list
   * to search it will use linear search to find a particular
   * edge or coord in this context
   *
   *  
   * project ask for possible moves to be store in a data
   * structure similar to a tree.
   * Q:would an edge list be a suitable data structure?
   * A:I'm not sure maybe?
   * It's what I have now so it works in that sense...
   * Q:does it sore possible moves or edges suchs that
   * they are children in a tree?
   * A:I don't think it does. does it?
   * 
   * //adjacency list
   * For each vertext i store an array of vertices adjacent to it.
   * an array of |V| adjacency lists one per vertex
   * 
   * it's an array of arrays like an edge list expect it stores
   * list of adjacent verticies instead of a list of edges
   * 
   * I don't think adjaceny list would be a good fit
   * edge list seems like a better fit from what I know right
   * now.
   * 
   * right now each possible move is an array with two elements
   * representing an x and y coordinate 
   * that two element array gets stored into an array
   * this array that holds the coordiantes is 
   * the possible moves list
   * each element could be a root 
   * each element is the start of a path towards the
   * desired end coordiante
   * 
   * to change [x,y] into a tree like structure
   * I could add a third and fourth element l and r
   * this could be the tree struct [[x,y],l,r]
   * first element is the coordinate [x,y]
   * second element is the left child node
   * third element is the right child node
   * 
   * if a node has no children then 
   * the third element the left child node
   * will just hold the value null
   * same is true for the right child node.
   * 
   * example of leaf node
   * [[x,y],l=null,r=null]
   * 
   * example of a non leaf node:
   * [[x,y],[[x,y],l,r],[[x,y],l,r]];
   * 
   * I don't think left or right has significant meaning
   * like in a binary tree in this context
   * So instead of left and right child nodes
   * there are just nodes
   * 
   * redo: 
   * a node is a 2 element array -> [1,2]
   * first element is a coordiante and a possible move
   * --> [[x,y], ?]
   * second element is a child node if present else
   * it's node in the case of a leaf node 
   * [[x,y],childNode=null] or [[x,y],[[x,y],childNode=null]]
   * 
   * redo the redo:
   * after thinking about finding end move in possible moves
   * and how that leads to finding the shortest move
   * 
   * I realized that child node or a node in general is
   * not [[x,y],childNode] with Child Node just being
   * another coordiante with it's own child node or not
   * child node is a list of all possible moves that can
   * be made from it's parent node
   * the possible moves list its self is a node 
   * example:
   *  [[[x,y],listOfPossibleMoveFromParent]]
   * which might look like this:
   * 
   * //list of possible moves from start
   * [
   *  // child node 1: an array with two elements
   *     first element is the first possible move from start
   *     second element is a list of possible moves from
   *     the first possible move from start.
   *  [
   *    //first possible move
   *    [x,y],
   *     //list of possible moves from first possible move
   *     [
   *      //first possible move from first possible move
   *      [[x,y],],
   *      //second possible move from second possible move
   *      [[x,y],],
   *      //third possible move from first possible move
   *      [[x,y],],
   *    ]
   *  ],
   * 
   *  // same as child node 1 expect it's for child node 2
   *  [
   *    //second possible move
   *    [x,y],  
   *    //list of possible moves from second possible move
   *    [
   *      //first possible move from second possible move
   *      [[x,y],],
   *      //second possible move from second possible move
   *      [[x,y],],
   *    ]
   *  ],
   * ]
   * 
   * should start move be in list of possible moves
   * instead of 
   * [[[x,y],list], [[x,y],list]]
   * would be this:
   * //start  //a list of possible moves from start
   * [ [x,y], [[[x,y],list], [[x,y],list]]]
   * 
   * //vertical visualization
   * [
   *  //start
   *  [x,y],
   * 
   *  //list of possible moves from start
   *  [
   *    //first possible move from start
   *    [
   *      [x,y],
   *      list or null
   *    ],
   * 
   *    //second possible move from start
   *    [
   *     [x,y],
   *     list or null
   *    ]
   *  ]
   
   * ]
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

//helper functions for knightMoves

//generates all possible moves from a starting coordinate
//and returns possible list of move as an array
function possibleMovesFromAStartingCoordinate(
  startingCoordinate,
  possibleMoves = []
) {
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
  /**
   * think of way to reduce the lines of code
   * that have:
   * possibleMoves.push(start.map((e,i)=> i==0 ? e +/- num : e +/- num));
   * 
   * could write 
   * possibleMoves.push(start.map((e,i)=> i==0 ? e +/- num : e +/- num));
     once and have a loop call it multiple times with all the
     variations
   *    
  //array method similar to a loop maybe better in this context?
     [1,1,-1,-1,2,2,-2,-2].forEach((x,n,a)=>{
      if(Math.abs(x) == 1){
        possibleMoves.push(start.map((e,i)=> i==0 ? e + x  : e + a[5 + n%2]  ));
      }

      if(Math.abs(x) == 2){
        possibleMoves.push(start.map((e,i)=> i==0 ? e + x : e + a[1 + n%2 ]));
      }
     });

     // oneline version but at what cost?
     [1,1,-1,-1,2,2,-2,-2].forEach((x,n,a) => Math.abs(x) == 1 ? possibleMoves.push(start.map((e,i) => i==0 ? e + x : e + a[5 + n%2])) : possibleMoves.push(start.map((e,i)=> i==0 ? e + x : e + a[1 + n%2 ])));

     why shorten the multiple .push to possible moves and replace
     with a more compact version?
     
     does it have benefits 
     Takes less lines of code, and the logic feels more elegant to me

     does it have a trade off?
     take more brain power to understand what's going on
     and a possible description to explain it to someone
     or future self
     it uses array so it uses temporary space

     does it change performance?
     if so how?
     does less lines of code equal better performance?
     not sure how to figure out the answer to this question
   */

  //adding move A: 2 to the left and up 1, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e - 2 : e + 1)).concat(null)
  );

  //adding move B: 2 to the left and down 1, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e - 2 : e - 1)).concat(null)
  );

  //adding move C: 2 to the right and up 1, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e + 2 : e + 1)).concat(null)
  );

  //adding move D: 2 to the right and down 1, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e + 2 : e - 1)).concat(null)
  );

  //adding move E: 2 up and 1 to the left, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e - 1 : e + 2)).concat(null)
  );

  //adding move F: 2 up and 1 to the right, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e + 1 : e + 2)).concat(null)
  );

  //adding move G: 2 down and 1 to the left, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e - 1 : e - 2)).concat(null)
  );

  //adding move H: 2 down and 1 to the right, to possibleMoves
  possibleMoves.push(
    startingCoordinate.map((e, i) => (i == 0 ? e + 1 : e - 2)).concat(null)
  );

  //filter possible moves down to only moves that are on the board
  possibleMoves = possibleMoves.filter(
    (coord) => coord[0] > 0 && coord[0] < 8 && coord[1] > 0 && coord[1] < 8
  );

  return possibleMoves;
}

//checks for end move in a list of possible moves
//and returns true if it is and false otherwise.
function isEndMoveInListOfPossibleMoves(list, end) {
  return list.some((node, index) => {
    let xCoordOfNode = node[0][0];
    let ycoordOfNode = node[0][1];
    let childNodeAListOfPossibleMoves = node[1];
    //todo: don't forget to store index of node that is
    //equal to end move to indexOfShortestPath

    //xCoordOfEnd             //yCoordOfEnd
    return xCoordOfNode == end[0] && ycoordOfNode == end[1];
  });
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
// console.log(knight, "knight");

let shortestPathToOneTwo = knightMoves([0, 0], [1, 2]); //[[0,0],[1,2]]
// console.log(shortestPathToOneTwo);

let shortestPathToFourThree = knightMoves([3, 3], [4, 3]);
// console.log(shortestPathToFourThree);
