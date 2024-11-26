import { useState, useEffect } from 'react';
import { GameSystemProps } from '../types/Gamesystem';


const GameSystem: React.FC<GameSystemProps> = ({ children }) => {

    const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);

    useEffect(() => {
        const storedPlayer = localStorage.getItem('currentPlayer');

        setCurrentPlayer(storedPlayer ?? 'Jugador 1');
    }, []);

    const handleTurnChange = () => {
        const nextPlayer = currentPlayer === 'Jugador 1' ? 'Jugador 2' : 'Jugador 1';
        console.log(nextPlayer)
        setCurrentPlayer(nextPlayer);
        localStorage.setItem('currentPlayer', nextPlayer);
    }

    return(
        <>
            {children({ currentPlayer, handleTurnChange })}
        </>
    )
}

export default GameSystem