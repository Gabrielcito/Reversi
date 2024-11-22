import '../styles/Gameboard.css'
import { BoardType } from '../types/Gameboard';
const BOARD: BoardType = Array(8)
  .fill(null)
  .map(() => Array(8).fill(null));

function Board() {

  return (
    <>
      <ol id="gameBoard">
        {BOARD.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => <li><button></button></li>)}
            </ol>
          </li>)}
      </ol>
    </>
  )
}

export default Board
