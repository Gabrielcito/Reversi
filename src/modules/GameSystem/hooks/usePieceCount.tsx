import { useState, useEffect } from "react";
import { BoardType } from '../types/Gamesystem';


const usePieceCount = (board: BoardType) => {

    const [redCount, setRedCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);

    const countPieces = (board: BoardType) => {
        let red = 0;
        let blue = 0;

        board.forEach(row => {
            row.forEach(cell => {
                if (cell === '0') red++;  
                if (cell === '1') blue++;
            });
        });

        setRedCount(red);
        setBlueCount(blue);
    };


    useEffect(() => {
        countPieces(board)
    }, [board])

    return [redCount, blueCount]
}

export default usePieceCount
