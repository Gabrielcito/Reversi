import '../styles/Gameboard.css'
import { GameBoardProps } from '../types/Gameboard';
import Buttonboard from './Buttonboard'

const Board: React.FC<GameBoardProps> = ({currentPlayer, BOARD, validMoves, onTurnEnd}) => { 

  const isValidMove = (row: number, col: number) => validMoves.some(move => move.row === row && move.col === col);


  return (
    <>
      <ol id="gameBoard">
        <div>
          <p id="turn-placeholder">Turno del {currentPlayer}</p>
        </div>
        {BOARD.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((color, colIndex) => (
                <li key={colIndex}>
                  <Buttonboard 
                    onTurnEnd={onTurnEnd} 
                    color={color} 
                    row={rowIndex}
                    col={colIndex}
                    highlight={isValidMove(rowIndex, colIndex)}
                    />
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Board
