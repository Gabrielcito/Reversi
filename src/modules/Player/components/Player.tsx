import '../styles/Player.css'

interface PlayerProps {
    playerNumber: number; // Número del jugador
    name: string; // Nombre del jugador
    image: string; // URL de la imagen del jugador
}


const Player: React.FC<PlayerProps> = ({ playerNumber, name, image }) => {
    return (
      <div className={`player player-${playerNumber}`}>
        <img src={image} alt={`Jugador ${playerNumber}`} />
        <p>{name || `Jugador ${playerNumber}`}</p>
      </div>
    );
  };
  
  export default Player;
