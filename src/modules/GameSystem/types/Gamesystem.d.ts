export interface PieceState {
    redCount: number;
    blueCount: number;
}


export interface GameSystemProps {
    children: (props: {
        currentPlayer: string;
        handleTurnChangeAndBoardState: (rowIndex: number, colIndex: number) => void;
        board: BoardType;
        validMoves: {col: number, row: number}[]
    }) => React.ReactNode;
}

type CellValue = "0" | "1" | null;
export type BoardType = CellValue[][];