import '../styles/Gameboard.css'
import { BoardType, GameBoardProps } from '../types/Gameboard';
import Buttonboard from '../components/Buttonboard'

const BOARD = Array(8)
  .fill(null)
  .map((_, rowIndex) =>
    Array(8).fill(null).map((_, colIndex) => {
      if (
        (rowIndex === 3 && colIndex === 3) || // Centro arriba-izquierda
        (rowIndex === 4 && colIndex === 4)    // Centro abajo-derecha
      ) {
        return "red";
      }

      if (
        (rowIndex === 3 && colIndex === 4) || // Centro arriba-derecha
        (rowIndex === 4 && colIndex === 3)  // Centro abajo-izquierda
      ) {
        return "blue";
      }

      return null; // Resto de las celdas vacías
    })
  );

const Board: React.FC<GameBoardProps> = ({currentPlayer, onTurnEnd}) => { 

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
                    initialColor={color} 
                    currentPlayer={currentPlayer}
                    
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
