export type BoardType = number[][];

export interface GameBoardProps {
    currentPlayer: string | null,
    onTurnEnd: () => void 
}