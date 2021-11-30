import './XpMoneyBox.css'
export default function XpMoneyBox(props) {

    const saldo = 10000;
    const xp = 342019

    return(
        <>
        <div className="entire-box">
            <h2 className="textXpMoneyBox">{(props.type === "Saldo") ? `$ ${saldo}` : `Exp ${xp}`}</h2>
        </div>
        </>
    )
}