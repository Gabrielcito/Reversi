import { useContext } from 'react';
import '../styles/Player.css'
import { PlayerProps } from '../types/Player';
import { GameContext } from '../../GameSystem/components/Gamesystem';



const Player: React.FC<PlayerProps> = ({ playerNumber, name, image, color, isCurrentPlayer }) => {

    //@ts-ignore
    const { redCount, blueCount } = useContext(GameContext);


    return (
      <div className={`player player-${playerNumber}`}>
        <img
          style={{
            border: isCurrentPlayer ? '5px solid rgba(255, 255, 0, 0.8)' : 'none'
          }} 
          src={image} 
          alt={`Jugador ${playerNumber}`} 
        />
        <p>{name || `Jugador ${playerNumber}`}</p>
        <div id='circle' className={color}>{color === 'red' ? redCount : blueCount}</div>
      </div>
    );
};
  
  export default Player;
