import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header'
import PokeballMenu from "../../components/PokeballMenu";
import './Registro.css'

export default function Registro() {

    const [apelido, setApelido] = useState("");
    const [nasc, setNasc] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory()

    const handleFormsSubmit = (event) => {
        event.preventDefault();
        console.log(`${apelido} ${nasc} ${email} ${senha}`)
        history.push('/Login');
    }

    return (
        <>
            <div className="entire-page">
                <Header color="#011F4B" />
                <div className="backgroundRegistro">
                    <div className="mainRegistro">
                        <h1 className="titleRegistro">Cadastro</h1>
                        <form className="formsRegistro" onSubmit={handleFormsSubmit} >
                            <input className="inputRegistro" type="text" placeholder="Apelido" onChange={(e) => { setApelido(e) }} required />
                            <input className="inputRegistro" type="text" placeholder="Data de Nascimento" onChange={(e) => { setNasc(e) }} required  />
                            <input className="inputRegistro" type="email" placeholder="Email" onChange={(e) => { setEmail(e) }} required  />
                            <input className="inputRegistro" type="password" placeholder="Senha" onChange={(e) => { setSenha(e) }} id="password" required  />
                            <input className="submitRegistro" type="submit" value="Concluir" />
                        </form>
                    </div>
                </div>
                <PokeballMenu/>

            </div>
        </>
    )
}