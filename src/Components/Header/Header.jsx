import ButtonLoginRegister from '../ButtonLoginRegister/ButtonLoginRegister'
import XpMoneyBox from '../XpMoneyBox/XpMoneyBox'
import './Header.css'

export default function Header(props) {
    return (
        <>
            <div className="entire-header" style={{ backgroundColor: props.color }}>
                <a className="titleHeader" href="/">Cassinomon</a>
                <div className="XpMoneyBox">
                    <XpMoneyBox type="Saldo" />
                    <XpMoneyBox type="xp" />
                </div>
                <div className="ButtonLoginRegisterBox">
                    <ButtonLoginRegister type="Login" text="Login" />
                    <ButtonLoginRegister type="Registro" text="Registre-se" />
                </div>

            </div>
        </>
    )
}