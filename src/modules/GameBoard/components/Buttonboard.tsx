import { useState } from 'react';
import '../styles/Buttonboard.css'

function Buttonboard() {

    const backgroundButtonColor: string[] = ["initial", "red", "blue"];

    const [colorIndex, setColorIndex] = useState(0);

    const changePiece = () => {
        setColorIndex((colorIndex + 1) % backgroundButtonColor.length);
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
