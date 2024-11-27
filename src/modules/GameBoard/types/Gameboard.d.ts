export type BoardType = (string | null)[][];

export interface GameBoardProps {
    currentPlayer: string | null,
    onTurnEnd: (rowIndex: number, colIndex: number) => void 
    BOARD: BoardType
}