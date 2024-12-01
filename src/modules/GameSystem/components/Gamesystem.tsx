import { useState, createContext } from 'react';
import { GameSystemProps, BoardType, PieceState } from '../types/Gamesystem';
import { flipValidPieces } from '../util/FlipSystem';
import usePieceCount from '../hooks/usePieceCount.ts';
import useValidMoves from '../hooks/useValidMove.ts';

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

export const GameContext = createContext<PieceState | undefined>(undefined);

const GameSystem: React.FC<GameSystemProps> = ({ children }) => {

    const [board, setBoard] = useState<BoardType>(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState<string>('Jugador 1');
    const [redCount, blueCount] = usePieceCount(board)
    const validMoves = useValidMoves(board, currentPlayer)

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
        <GameContext.Provider value={{redCount, blueCount}}>

            {children({ 

                currentPlayer, 
                handleTurnChangeAndBoardState,
                board,
                validMoves

            })}

        </GameContext.Provider>
    )
}

export default GameSystem