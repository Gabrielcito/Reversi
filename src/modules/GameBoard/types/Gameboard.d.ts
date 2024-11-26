export type BoardType = (string | null)[][];

export interface GameBoardProps {
    currentPlayer: string | null,
    onTurnEnd: () => void 
}