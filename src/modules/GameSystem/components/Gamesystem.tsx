import { useState } from 'react';
import { GameSystemProps, BoardType } from '../types/Gamesystem';
import { flipValidPieces } from '../util/FlipSystem';

const initialBoard: BoardType = Array(8)
    .fill(null)
    .map((_, rowIndex) =>
        Array(8).fill(null).map((_, colIndex) => {
            if ((rowIndex === 3 && colIndex === 3) || (rowIndex === 4 && colIndex === 4)) {
            //red
            return "0";
            }
            if ((rowIndex === 3 && colIndex === 4) || (rowIndex === 4 && colIndex === 3)) {
            //blue
            return "1";
            }
            return null;
        })
    );


const GameSystem: React.FC<GameSystemProps> = ({ children }) => {

    const [board, setBoard] = useState<BoardType>(initialBoard);
    //const [lastMove, setLastMove] = useState<{ row: number; col: number }>({ row: 0, col: 0});
    const [currentPlayer, setCurrentPlayer] = useState<string>('Jugador 1');

    const handleTurnChangeAndBoardState = (rowIndex: number, colIndex: number) => {

        if (board[rowIndex][colIndex]) {
            return; 
        }

        const flippedBoard = flipValidPieces(board, rowIndex, colIndex, currentPlayer);

        setBoard(flippedBoard)

        const nextPlayer = currentPlayer === 'Jugador 1' ? 'Jugador 2' : 'Jugador 1';
        setCurrentPlayer(nextPlayer);
        localStorage.setItem('currentPlayer', nextPlayer);
    }

    return(
        <>
            {children({ 

                currentPlayer, 
                handleTurnChangeAndBoardState,
                board

            })}
        </>
    )
}

export default GameSystem