import './LobbyButton.css'

export default function LobbyButton(props) {
    return (
        <>
            <a href={`/${props.route}`} className="entire-component">
                <div className="backgroundButton">
                    <div className="imgBox">
                        <img src={props.img} width={176} height={176} alt="img" />
                    </div>
                    <div className="titleDiv" style={{backgroundColor: props.color}}>
                        <h2 className="titleText">{props.title}</h2>
                    </div>
                </div>
            </a>
        </>
    )
}