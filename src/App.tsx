import './App.css'
import Board from './modules/GameBoard/components/Gameboard'
import Player from './modules/Player/components/Player'
import TUKI from '../src/modules/Player/assets/TUKI.webp'
import GameSystem from './modules/GameSystem/components/Gamesystem'

function App() {

  return (

    <GameSystem>

      {({ currentPlayer, handleTurnChange }) => (
          <div id="main-container">

            <div className="left">
              <Player
                playerNumber={1}
                name="Jugador 1"
                image={TUKI}
                color="🔴"
              />
            </div>
      
            <div id="game-container" className="center">
              <Board 

                currentPlayer = {currentPlayer}
                onTurnEnd = {handleTurnChange}
              
              />
            </div>
      
            <div className="right">
              <Player
                playerNumber={2}
                name="Jugador 2"
                image={TUKI}
                color="🔵"
              />
            </div>
            
          </div>
      )}

    </GameSystem>


  )
}

export default App
