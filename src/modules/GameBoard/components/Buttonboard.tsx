import '../styles/Buttonboard.css'
import { ButtonboardProps } from '../types/Buttonboard';

const Buttonboard: React.FC<ButtonboardProps> = ({ onTurnEnd, color, row, coll }) => {

    const colorMap: Record<string, string> = {
        '0': 'red',
        '1': 'blue'
    }


    return (
        <>
            <button 
                id="buttonBoard"
                onClick={() => onTurnEnd(row, coll)}
                style={{backgroundColor: colorMap[color]}}
            >

            </button>
        </>
    )
}

export default Buttonboard
