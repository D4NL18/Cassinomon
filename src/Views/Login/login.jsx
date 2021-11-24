import React from 'react'
import Header from '../../Components/Header/Header'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './Login.css'

export default function Login() {
    return (
        <>
            <div className="entire-page">
                <Header color="#011F4B" />
                <div className="backgroundLogin">
                    <div className="mainLogin">
                        <h1 className="titleLogin">Login</h1>
                        <div className="boxLogin">
                            <div className="smallBoxLogin">
                                <form className="formLogin">
                                    <div className="rowInputSpam">
                                        <spam className="spamLogin">Email</spam>
                                        <div className="rowInput">
                                        <div className="iconBox"><EmailIcon className="icon" /></div>
                                            <input className="inputLogin" type="email" placeholder="Insira seu email" />
                                        </div>
                                    </div>
                                    <div className="rowInputSpam">
                                        <spam className="spamLogin">Senha</spam>
                                        <div className="rowInput">
                                            <div className="iconBox"><LockIcon className="icon"/></div>
                                            <input className="inputLogin" type="password" placeholder="Insira sua senha" />
                                        </div>

                                    </div>
                                    <input type="submit" className="buttonSubmit" value="ENTRAR" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}