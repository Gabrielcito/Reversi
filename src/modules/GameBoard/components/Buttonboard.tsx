import '../styles/Buttonboard.css'
import { ButtonboardProps } from '../types/Buttonboard';

const Buttonboard: React.FC<ButtonboardProps> = ({ onTurnEnd, color, row, col, highlight }) => {

    const colorMap: Record<string, string> = {
        '0': 'red',
        '1': 'blue'
    }

    const handleClick = () => {
        if(!highlight) return

        onTurnEnd(row, col)
    }


    return (
        <>
            <button 
                id="buttonBoard"
                onClick={() => handleClick()}
                style={{backgroundColor: colorMap[color], border: highlight ? "2px solid yellow" : "" }}
            >

            </button>
        </>
    )
}

export default Buttonboard
