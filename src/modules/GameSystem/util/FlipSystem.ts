import { BoardType } from "../types/Gamesystem";


//TODO: El caso en que no haya una pieza para poder encerrar a las del rival no esta contemplado.
// Esto implica que, por ejemplo, al principio de la partida si se coloca una pieza roja de forma diagonal las azules van a ser convertidas
// aun que no haya una roja al otro extremo de la diagonal.
export const flipValidPieces = (board: BoardType, rowIndex: number, colIndex: number, currentPlayer: string) => {

    const colorMap: Record<string, string> = {
        'Jugador 1': '0',
        'Jugador 2': '1',
    }

    const opponentColor = currentPlayer === 'Jugador 1' ? '1' : '0';
    const playerColor = colorMap[currentPlayer];

    const toFlip: {row: number, col: number}[] = [];

    //Derecha
    for(let col = colIndex + 1; col < board[rowIndex].length - 1; col++){
        if(board[rowIndex][col] === opponentColor){
            toFlip.push({row: rowIndex, col: col})
        }

        if(board[rowIndex][col] === playerColor){
            break;
        }

        if(board[rowIndex][col] === null){

            break
        }
    }

    //Izquierda
    for(let col = colIndex - 1; col > 0; col--){
        if(board[rowIndex][col] === opponentColor){
            toFlip.push({row: rowIndex, col: col})
        }

        if(board[rowIndex][col] === playerColor){
            break;
        }

        if(board[rowIndex][col] === null){
            break
        }
    }

    //Arriba
    for(let row = rowIndex + 1; row < board.length; row++){
        if(board[row][colIndex] === opponentColor){
            toFlip.push({row: row, col: colIndex})
        }

        if(board[row][colIndex] === playerColor){
            break
        }

        if(board[row][colIndex] === null){
            break
        }
    }

    //Abajo
    for(let row = rowIndex - 1; row > 0; row--){
        if(board[row][colIndex] === opponentColor){
            toFlip.push({row: row, col: colIndex})
        }

        if(board[row][colIndex] === playerColor){
            break
        }

        if(board[row][colIndex] === null){
            break
        }
    }

    //Diagonal superior derecha
    for(let i = 1; rowIndex - i >= 0 && colIndex + i < board[rowIndex].length; i++){
        const row = rowIndex - i;
        const col = colIndex + i;
        
        if(board[row][col] === opponentColor){
            toFlip.push({row: row, col: col})
        }

        if(board[row][col] === playerColor){
            break
        }

        if(board[row][col] === null){
            break
        }
    }

    //Diagonal superior izquierda
    for(let i = 1; rowIndex - i >= 0 && colIndex - i >= 0; i++){
        const row = rowIndex - i;
        const col = colIndex - i;
        
        if(board[row][col] === opponentColor){
            toFlip.push({row: row, col: col})
        }
        
        if(board[row][col] === playerColor){
            break
        }

        if(board[row][col] === null){
            break
        }
    }

    //Diagonal inferior derecha
    for(let i = 1; rowIndex + i >= 0 && colIndex + i < board[rowIndex].length; i++){
        const row = rowIndex + i;
        const col = colIndex + i;
        
        if(board[row][col] === opponentColor){
            toFlip.push({row: row, col: col})
        }

        if(board[row][col] === playerColor){
            break
        }

        if(board[row][col] === null){
            break
        }
    }

    //Diagonal inferior izquierda
    for(let i = 1; rowIndex + i < board.length && colIndex - i >= 0; i++){
        const row = rowIndex + i;
        const col = colIndex - i;
        
        if(board[row][col] === opponentColor){
            toFlip.push({row: row, col: col})
        }
        
        if(board[row][col] === playerColor){
            break
        }

        if(board[row][col] === null){
            break
        }
    }

    console.log(toFlip)

    //Flip
    //TODO: Este tambien
    //@ts-ignore
    const newBoard: BoardType = board.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          (rIndex === rowIndex && cIndex === colIndex) || // Cambia la celda seleccionada
          toFlip.some(({ row, col }) => row === rIndex && col === cIndex)
            ? playerColor // Cambia al color del jugador actual
            : cell
        )
      );

    return newBoard

}