import './ButtonLoginRegister.css'

export default function ButtonLoginRegister(props) {
    return(
        <>
        <a href={`/${props.type}`} className="entire-button">
            <h4 className="buttonText">{props.text}</h4>
        </a>
        </>
    )
}