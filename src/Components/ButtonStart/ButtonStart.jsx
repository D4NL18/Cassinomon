import Button from '@mui/material/Button';
import './ButtonStart.css'

export default function ButtonStart(props) {
    return (
        <Button className="bet-box-roulette-button" onClick={props.onClick} style={{background: props.color}} >
            <p className="bet-bot-roulette-button-text">Start</p>
        </Button>
    )

}