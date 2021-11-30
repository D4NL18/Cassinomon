import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PokeballMenu from "../../components/PokeballMenu";
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory()

    const handleFormsSubmit = (event) => {
        event.preventDefault();
        console.log(`${email} ${senha}`)
        history.push('/');
    }

    return (
        <>
            <div className="entire-page">
                <Header color="#011F4B" />
                <div className="backgroundLogin">
                    <div className="mainLogin">
                        <h1 className="titleLogin">Login</h1>
                        <div className="boxLogin">
                            <div className="smallBoxLogin">
                                <form className="formLogin" onSubmit={handleFormsSubmit} >
                                    <div className="rowInputSpam">
                                        <spam className="spamLogin">Email</spam>
                                        <div className="rowInput">
                                        <div className="iconBox"><EmailIcon className="icon" /></div>
                                            <input className="inputLogin" type="email" placeholder="Insira seu email" onChange={(e) => {setEmail(e)}} required />
                                        </div>
                                    </div>
                                    <div className="rowInputSpam">
                                        <spam className="spamLogin">Senha</spam>
                                        <div className="rowInput">
                                            <div className="iconBox"><LockIcon className="icon"/></div>
                                            <input className="inputLogin" type="password" placeholder="Insira sua senha"  onChange={(e) => {setSenha(e)}} required />
                                        </div>

                                    </div>
                                    <input type="submit" className="buttonSubmit" value="ENTRAR" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <PokeballMenu/>

            </div>
        </>
    )
}