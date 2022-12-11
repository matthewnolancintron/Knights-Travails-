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
  // keeps track of moves that have already been genearated
  let listOfMovesThatHaveAListOfPossibleMoves = [];

  //stores possible moves that can be made from starting coord
  let possibleMovesFromStartToEnd = [start];

  //generate possible moves and store to list
  possibleMovesFromStartToEnd.push(
    possibleMovesFromAStartingCoordinate(possibleMovesFromStartToEnd[0])
  );

  /**
   * since the starting move now has a list of possible moves
   * it will be added to listOfMovesThatHaveAListOfPossibleMoves
   */
  listOfMovesThatHaveAListOfPossibleMoves.push(start);

  /**
   * checks and generates a list of possible moves
   * and returns a list of possible moves for each of
   * those moves if
   * the end move wasn't in the list of moves generated
   *
   * only generate moves if check fails
   *
   * could also return the index of the
   * move or moves that match the end
   *
   */
  let movesStartToEnd = checkAndGenerateUntilEnd(
    start,
    end,
    possibleMovesFromStartToEnd,
    listOfMovesThatHaveAListOfPossibleMoves
  );

  let shortestPath = findShortestPathToTheEnd(movesStartToEnd, end);

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
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e - 2 : e + 1)),
  ]);

  //adding move B: 2 to the left and down 1, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e - 2 : e - 1)),
  ]);

  //adding move C: 2 to the right and up 1, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e + 2 : e + 1)),
  ]);

  //adding move D: 2 to the right and down 1, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e + 2 : e - 1)),
  ]);

  //adding move E: 2 up and 1 to the left, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e - 1 : e + 2)),
  ]);

  //adding move F: 2 up and 1 to the right, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e + 1 : e + 2)),
  ]);

  //adding move G: 2 down and 1 to the left, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e - 1 : e - 2)),
  ]);

  //adding move H: 2 down and 1 to the right, to possibleMoves
  possibleMoves.push([
    startingCoordinate.map((e, i) => (i == 0 ? e + 1 : e - 2)),
  ]);

  // console.log(possibleMoves);

  //filter possible moves down to only moves that are on the board
  possibleMoves = possibleMoves.filter(
    (coord) =>
      coord[0][0] > 0 && coord[0][0] < 8 && coord[0][1] > 0 && coord[0][1] < 8
  );

  // console.log(possibleMoves)
  return possibleMoves;
}

//checks for end move in a list of possible moves
//and returns true if it is and false otherwise.
//
function isEndMoveInListOfPossibleMoves(list, end) {
  // console.log(list[1],'list');
  return list[1].some((node, index) => {
    // console.log(node,'node')
    let xCoordOfNode = node[0][0];
    // console.log(xCoordOfNode,'xCoordOfNode');
    let ycoordOfNode = node[0][1];
    //todo: don't forget to store index of node that is
    //equal to end move to indexOfShortestPath
    //xCoordOfEnd             //yCoordOfEnd
    return xCoordOfNode == end[0] && ycoordOfNode == end[1];
  });
}

function checkAndGenerateUntilEnd(
  startingCoordinate,
  endingCoordinate,
  list,
  listOfMovesThatHaveAListOfPossibleMoves
) {
  //
  /**
   * I think this is a breadth first aproach of generating a path
   * that reaches the end move.
   *
   * I had an issues with moves generating paths
   * with moves that contained them selves
   * creating an infinite series.
   *
   * also the looping back onto
   * iself, would cause an infinte loop
   * and exceed the call stack.
   */

  //details about the infinite series issuse
  /**
   * issue:
   * check and genereate will create an infinite series
   * because some moves genereate possible moves
   * that contain a move that genearted itself
   * causing an infinite loop to occur.
   *
   * possible solution:js set data structure
   * if a move is to generate a possible
   * move that is known to generaete itself
   * or if a move is to genreate a move that's
   * already been generated or visited
   * then that move that has already been generated
   * and has already genereated a list of possible moves
   * should not generate a list of possible moves
   * as it is not a path to the end it is a path
   * that loops back on itself (or to the start?)
   *
   * create an array (stack or que?)
   * that holds moves that have been already
   * generaeted or visited ()
   * when a move generates a list of possible moves
   * each move it generates will get passed into
   * that array
   * when each move in a move's possible moves array
   * is about to generate it's own list of possible moves
   * first check if that move has already been
   * visisted or generated and if it has then
   * don't genearte a list of possible moves for it
   *
   * the move should go to generated moves if the move
   * has been generated and if it has a list of generated moves
   *
   * the start [[3,3]]
   * doesn't have possible move generated yet
   * then some code adds the generated moves to it
   * the move is now [[3,3],[[x,y][x,y][x,y]]]
   * now the move [3,3] can be moved to the generatedMoves list
   *
   * generatedmoves isn't a list that keeps track of moves
   * generated but instead keeps track of the moves
   * that have a list of possible moves.
   * listOfMovesThatHaveAListOfPossibleMoves is a more accurate name
   * and it will be updated to that.
   */

  /**
   * if
   *  after checking for end move and it is not present
   *  anywhere in possible moves
   * then
   *  for each move in possible moves
   *  check for the end move in that move's child which is a
   *  list of possible moves that can be made from it
   */
  if (!isEndMoveInListOfPossibleMoves(list, endingCoordinate)) {
    /**
     * check if a move in possible moves has a list of possible
     * moves
     */
    list[1].forEach((move, index, array) => {
      /*
       * if a move doesn't have a second element
       * then it doesn't have a list of possible moves
       */
      if (move[1] === undefined) {
        /**
         * using a conditional and an array that
         * tracks moves that have already generated
         * a path of possible moves before generating
         * a path of possible moves for a move
         * is my solution for avoiding exceeding the
         * call stack
         *
         * I think going about this in a depth first
         * kind of aproach might avoid that issuse
         * all together but might have it's own
         * issues.
         *
         * todo: explore depth first way of checking
         * and generating to the end move.
         * explore pro and cons against the current
         * level order version. (I think the current version
         * is a level order version I'm not certain as of now.)
         */

        /**
         only generate list of possible moves
         if the move hasn't already had a
         list of possible moves created for it
         */
        if (
          !listOfMovesThatHaveAListOfPossibleMoves.some(
            (alreadygeneratedMove) =>
              alreadygeneratedMove[0] === move[0][0] &&
              alreadygeneratedMove[1] === move[0][1]
          )
        ) {
          //create list of possible moves for the current move
          move.push(
            //start
            possibleMovesFromAStartingCoordinate(move[0])
          );

          /**
           * move now has a list of possible moves
           * it will be added to listOfMovesThatHaveAListOfPossibleMoves
           */
          listOfMovesThatHaveAListOfPossibleMoves.push(move[0]);
        }

        /*
         * if the move has a list of possible moves
         */
        if (!(move[1] === undefined)) {
          // console.log(move[0], "move");
          // console.log(move[1],'list of possible moves');

          //start, end, possible move from start to end
          return checkAndGenerateUntilEnd(
            move[0],
            endingCoordinate,
            move,
            listOfMovesThatHaveAListOfPossibleMoves
          );
        }
        //else ignore doing so for that move
      }
    });
  } else {
    //end move was in list's move's(list[0]'s)
    //list of possible moves list(list[1])
    /**
     * list [0] is the move
     * list [1] is that moves list of possible moves that can
     * be made from list[0] (move)
     **/
    /**
      should I return the first move that has a list
      of possible moves that leads to the end or instead
      add the moves as well as other moves that meet those 
      condition to a list to be searched through later?

      if the first move that meets the condtions of containing
      a list of possible moves that contains the end move
      as a possible move also the shortest path to that move?
      
      does the current "check and generate to the end" function
      genearte paths to the end recursively(yes) and also
      finds and returns the shortest path
      to the end?(
        Question:
        if the first move that meets the condtions of containing
        a list of possible moves that contains the end move
        as a possible move is it also the shortest path to that
        move?

        My Thoughts on that question:
        I would have to find a way to
        test and verify that
        todo: find a way to test the question
        above.
        todo: find a way to verify the test

        if:
          after testing the first is also the shortest
          and verifying the test
        then:
          yes

        else if: it sometimes does
        then:
          maybe there is a pattern
          and something to be learned

        else:
          it does not after test and verification
        then:
          no, based on the test and verification.
      );
      as for both(depends on the question above)
      
      
      rather than just returning the list of moves
      start to end
      could add the moves that contained the end move to a
      a data strucure that store paths that leads to an end.

      if using this function as a help function would need
      to make the data structure for it.

      I could make that a global variable or
      make it local to the knight moves function
      and pass it as an argument to check and generate.
      then check and generate would require an additional
      parameter could call that paramter 
      listToTrackMovesThatAlreadyGeneratedMoves
      
      that would work well if I could back track 
      from child node to parent but with the 
      current way the moves are implemented
      I cannot.
      I would need to update the data structure
      that I use for the moves to behave similar
      to a link list where the nodes have a
      previous and next move prop
      then I could look through the moves that make 
      it to the end and count how many moves it took
      each move to make it to the end and select 
      the moves with lowest count  
      
      For now I will just return the list that was passed 
      in backout in a mutated state.

      I might come back later to try the other possible 
      solution if I feel like.
      */
  }
  return list;
}

/*
  Decide which search algorithm is best to use for this case.
  Hint: one of them could be a potentially infinite series.

  I'll use a depth first type search algorithm 

  start from start move's first possible move
  and check if that's the end move
  if not
  then look through that moves possible moves
  and repeat, if after checking first possible
  move from start and end isn't found anywhere 
  down the hierachy, then check the second move doing the same
  as was done for first move repeat that process

  until a possible move from start that contains end
  is found along the way count how many moves it took
  that path to reach the end 
  all paths that reach the end will have the index
  from start's list of possible moves and the number
  moves it took stored as an object with props
  indexOfPossibleMoveFromStartToEnd and numberOfMovesItTook
  each object will be passed to an array contain all of the
  paths that reach the end

  then the array will be filtered to contain the object with
  the lowest numberOfMovesItTook value
  
  the function will then return that objects index
  or should it just return the object, just return the object
*/

function depthSearch(list, end, possiblePathToEnd, listOfPathsToEnd) {
  let endX = end[0];
  let endY = end[1];

  if (list[1] != undefined) {
    for (let i = 0; i < list[1].length; i++) {
      let moveInQuestion = list[1][i];
      let moveInQuestionX = list[1][i][0][0];
      let moveInQuestionY = list[1][i][0][1];
      if (moveInQuestionX == endX && moveInQuestionY == endY) {
        //add ending move as last move in possible chain to end
        possiblePathToEnd.push(moveInQuestion[0]);

        //add possibleChainToEnd to listOfChains to end
        listOfPathsToEnd.push(possiblePathToEnd);

        //add a signal to clear the array to the end of it
        possiblePathToEnd.push("needs clear");
      } else {
        if (moveInQuestion[1] != undefined) {
          if (
            possiblePathToEnd[possiblePathToEnd.length - 1] == "needs clear"
          ) {
            possiblePathToEnd = [];
          }
          possiblePathToEnd.push(moveInQuestion[0]);
          depthSearch(
            list[1][i],
            end,
            possiblePathToEnd,
            listOfPathsToEnd
          );
        }
      }
    }
  }
  return listOfPathsToEnd
}

function findShortestPathToTheEnd(
  list,
  end,
  possiblePathToEnd = [list[0]],
  listOfPathsToEnd = []
) {
  let theListOfPathsToTheEndMove = depthSearch(list, end,possiblePathToEnd,listOfPathsToEnd);
  console.log(theListOfPathsToTheEndMove,'x');
  //todo filter out the needs clear from the sub lists in the above list
  //todo then filter it to contain the list with the least amount of elements
  //todo then head back to the main funciton to work on formatting the output
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
//the knight

// let shortestPathToOneTwo = knightMoves([0, 0], [1, 2]); //[[0,0],[1,2]]
// console.log(shortestPathToOneTwo);

let shortestPathToFourThree = knightMoves([3, 3], [4, 3]);
// console.log(shortestPathToFourThree);
