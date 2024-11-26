import { useState } from 'react';
import '../styles/Buttonboard.css'
import { ButtonboardProps } from '../types/Buttonboard';

const Buttonboard: React.FC<ButtonboardProps> = ({onTurnEnd, currentPlayer, initialColor = "initial"}) => {

    const backgroundButtonColor: string[] = ["initial", "red", "blue"];

    const initialIndex = backgroundButtonColor.indexOf(initialColor);
    const [colorIndex, setColorIndex] = useState<number>(initialIndex >= 0 ? initialIndex : 0);

    const changePiece = () => {

        const playerPieceColor: Record<string, number> = {
            'Jugador 1': 1,
            'Jugador 2': 2
        }

        setColorIndex(playerPieceColor[currentPlayer]);

        
        //setColorIndex((colorIndex + 1) % backgroundButtonColor.length);
        onTurnEnd();
    };

    return (
        <>
            <button 
                id="buttonBoard"
                onClick={() => changePiece()}
                style={{backgroundColor: backgroundButtonColor[colorIndex]}}
            >

            </button>
        </>
    )
}

export default Buttonboard
