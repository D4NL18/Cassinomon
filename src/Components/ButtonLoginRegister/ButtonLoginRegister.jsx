import { getThemeProps } from '@material-ui/system'
import './ButtonLoginRegister.css'

export default function(props) {
    return(
        <>
        <a href={`/${props.type}`} className="entire-button">
            <h4 className="buttonText">{props.text}</h4>
        </a>
        </>
    )
}