function GameBoardFactory(){
    let y = 0;
    return {
        gameBoard:Array.from(Array(64).keys(),x=>[x%8===0?++y-1:y-1,x%8]);
    }
}

        
function KnightFactory(){
    
}


let GameBoardObject = GameBoardFactory();
console.log(GameBoardObject.gameBoard);