import '../styles/Player.css'
import { PlayerProps } from '../types/Player';


const Player: React.FC<PlayerProps> = ({ playerNumber, name, image, color, isCurrentPlayer }) => {
    return (
      <div className={`player player-${playerNumber}`}>
        <img
          style={{
            border: isCurrentPlayer ? '5px solid rgba(255, 255, 0, 0.8)' : 'none'
          }} 
          src={image} 
          alt={`Jugador ${playerNumber}`} 
        />
        <p>{name || `Jugador ${playerNumber}`}<br/>{color}</p>
      </div>
    );
  };
  
  export default Player;
