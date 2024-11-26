import { useState, useEffect } from 'react';
import { GameSystemProps } from '../types/Gamesystem';


const GameSystem: React.FC<GameSystemProps> = ({ children }) => {

    const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);

    useEffect(() => {
        const storedPlayer = localStorage.getItem('currentPlayer');

        setCurrentPlayer(storedPlayer ?? 'Player 1');
    }, []);

    const handleTurnChange = () => {
        const nextPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
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