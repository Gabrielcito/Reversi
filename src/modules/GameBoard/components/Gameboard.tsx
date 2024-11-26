import '../styles/Gameboard.css'
import { BoardType, GameBoardProps } from '../types/Gameboard';
import Buttonboard from '../components/Buttonboard'



const BOARD: BoardType = Array(8)
  .fill(null)
  .map(() => Array(8).fill(null));

const Board: React.FC<GameBoardProps> = ({currentPlayer, onTurnEnd}) => { 

  return (
    <>
      <ol id="gameBoard">
        <div>
          <p id="turn-placeholder">Turno del {currentPlayer}</p>
        </div>
        {BOARD.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
              {row.map(() => <li><Buttonboard clickFunction={onTurnEnd}/></li>)}
            </ol>
          </li>)}
      </ol>
    </>
  )
}

export default Board
