import './App.css'
import Board from './modules/GameBoard/components/Gameboard'
import Player from './modules/Player/components/Player'
import TUKI from '../src/modules/Player/assets/TUKI.webp'
function App() {

  return (
    <div id="main-container">

      <div className="left">
        <Player
          playerNumber={1}
          name="Jugador 1"
          image={TUKI}
        />
      </div>

      <div id="game-container" className="center">
        <Board />
      </div>

      <div className="right">
        <Player
          playerNumber={2}
          name="Jugador 2"
          image={TUKI}
        />
      </div>
      
    </div>
  )
}

export default App
