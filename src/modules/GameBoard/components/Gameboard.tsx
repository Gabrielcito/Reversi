import '../styles/Gameboard.css'
import { GameBoardProps } from '../types/Gameboard';
import Buttonboard from '../components/Buttonboard'

const Board: React.FC<GameBoardProps> = ({currentPlayer, BOARD, onTurnEnd}) => { 

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
