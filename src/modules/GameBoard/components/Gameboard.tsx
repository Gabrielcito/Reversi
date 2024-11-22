import '../styles/Gameboard.css'
import { BoardType } from '../types/Gameboard';
import Buttonboard from '../components/Buttonboard'


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
              {row.map((col, colIndex) => <li><Buttonboard/></li>)}
            </ol>
          </li>)}
      </ol>
    </>
  )
}

export default Board
