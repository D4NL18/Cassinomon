import React from 'react'
import CoinflipImg from '../../Images/coinflip.png'
import './Profile.css'

export default function Profile() {

    return (
        <>
            <div className="entire-page">
                <div className="nav" />
                <div className="background-profile">
                    <div className="descricao">
                        <div className="foto-div">
                            <div className="img" />
                        </div>
                        <div className="textos-desc">
                            <h1 className="nome">nomedousuario</h1>
                            <h3 className="biografia">biografia aaaaaaaa aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa</h3>
                        </div>

                    </div>
                    <div className="destaques-div" >
                        <div className="destaque-pequeno" style={{ backgroundColor: "#60A848" }}>
                            <img className="pokemon" src={CoinflipImg} />
                        </div>
                        <div className="destaque-grande" style={{ backgroundColor: "#F86000" }}>
                            <img className="pokemon" src={CoinflipImg} />
                        </div>
                        <div className="destaque-pequeno" style={{ backgroundColor: "#94D5FF" }}>
                            <img className="pokemon" src={CoinflipImg} />
                        </div>
                    </div>
                </div>
                <div className="friends-list" />
            </div>
        </>
    )
}