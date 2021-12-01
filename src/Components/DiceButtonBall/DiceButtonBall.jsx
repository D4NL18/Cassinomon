import './DiceButtonBall.css'

export default function DiceButtonBall(props) {

    return (
        <div className="ball"
            onClick={props.onClick}
            style={{ backgroundColor: (props.selected) ? 'yellow' : 'white' }}
        >{props.number}</div>
    )

}