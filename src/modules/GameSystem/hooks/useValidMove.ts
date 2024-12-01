import { useEffect, useState } from "react";

const useValidMoves = (board: any, currentPlayer: any) => {

    const [validMoves, setValidMoves] = useState<{row: number, col: number}[]>([]);

    const directions = [
        [-1, 0],  // Arriba
        [1, 0],   // Abajo
        [0, -1],  // Izquierda
        [0, 1],   // Derecha
        [-1, -1], // Arriba-Izquierda
        [-1, 1],  // Arriba-Derecha
        [1, -1],  // Abajo-Izquierda
        [1, 1],   // Abajo-Derecha
    ];

    useEffect(() => {
        const opponentColor = currentPlayer === "Jugador 1" ? "1" : "0";
        const playerColor = currentPlayer === "Jugador 1" ? "0" : "1";

        const isValidMove = (row: number, col: number): boolean => {
            if (board[row][col]) return false; // La celda debe estar vacía

            for (const [dRow, dCol] of directions) {
                let r = row + dRow;
                let c = col + dCol;
                let hasOpponentBetween = false;

                while (r >= 0 && r < board.length && c >= 0 && c < board[r].length) {

                    if (board[r][c] === opponentColor) {
                        hasOpponentBetween = true;
                    } else if (board[r][c] === playerColor) {

                        if (hasOpponentBetween) {
                            return true; // Movimiento válido si flanquea al oponente
                        } else {
                            break;
                        }

                    } else {
                        break; // Encontramos una celda vacía
                    }

                    r += dRow;
                    c += dCol;
                }
            }

            return false; // No se encontró un movimiento válido
        };

        // Recorrer el tablero para encontrar todos los movimientos válidos
        const moves: {col: number, row: number}[] = [];
        board.forEach((row: number[], rowIndex: number) => {
            row.forEach((_, colIndex) => {
                if (isValidMove(rowIndex, colIndex)) {
                    moves.push({ row: rowIndex, col: colIndex });
                }
            });
        });

        setValidMoves(moves);

    }, [board, currentPlayer]);

    return validMoves;
};

export default useValidMoves;