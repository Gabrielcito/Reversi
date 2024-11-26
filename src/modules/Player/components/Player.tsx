import '../styles/Player.css'
import { PlayerProps } from '../types/Player';


const Player: React.FC<PlayerProps> = ({ playerNumber, name, image, color }) => {
    return (
      <div className={`player player-${playerNumber}`}>
        <img src={image} alt={`Jugador ${playerNumber}`} />
        <p>{name || `Jugador ${playerNumber}`}<br/>{color}</p>
      </div>
    );
  };
  
  export default Player;
