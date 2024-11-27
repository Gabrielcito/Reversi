import { useState, useEffect } from 'react';
import { GameSystemProps, BoardType } from '../types/Gamesystem';

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
    const [currentPlayer, setCurrentPlayer] = useState<string>('Jugador 1');


    // TODO: Logica principal del juego
    useEffect(() => {
        console.log('Cambio el tablero')
    }, [board]);

    

    const handleTurnChangeAndBoardState = (rowIndex: number, colIndex: number) => {

        if (board[rowIndex][colIndex]) {
            return; 
        }

        const playerColors: Record<string, string> = {
            'Jugador 1': '0',
            'Jugador 2': '1',
        };

        // TODO: Quitar este ignore
        // @ts-ignore
        const newBoard: BoardType = board.map((row, rIndex) =>
            row.map((cell, cellIndex) =>
                rIndex === rowIndex && cellIndex === colIndex ? playerColors[currentPlayer] : cell
            )
        );

        setBoard(newBoard);

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