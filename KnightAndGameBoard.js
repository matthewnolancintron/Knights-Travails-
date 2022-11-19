function GameBoardFactory(){
    //y is used for the rows
    let y = 0;
    return {
        //
        gameBoard:Array.from(Array(64).keys(),x=>[x%8===0?++y-1:y-1,x%8]),
    }
}

        
function KnightFactory(){
    return {
        //
        possibleMoves:[]
    }
}


// let GameBoardObject = GameBoardFactory();
// let KnightObject = KnightFactory();
// console.log(KnightObject)
// console.log(GameBoardObject.gameBoard);

export {GameBoardFactory,KnightFactory}