export interface ButtonboardProps {
    onTurnEnd: (rowIndex: number, colIndex: number) => void,
    color,
    row,
    coll
}