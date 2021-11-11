import React from 'react'
import './Profile.css'

export default function Profile() {

    return (
        <>
            <div className="entire-page">
                <div className="nav" />
                <div className="background">
                    <div className="descricao">
                        <div className="foto-div">
                            <div className="img" />
                        </div>
                        <div className="textos-desc">
                            <h1 className="nome">nomedousuario</h1>
                        <h3 className="biografia">biografia</h3>
                        </div>
                        
                    </div>
                    <div className="destaques-div" >
                        <div className="destaque-pequeno">

                        </div>
                        <div className="destaque-grande">

                        </div>
                        <div className="destaque-pequeno">

                        </div>
                    </div>
                </div>
                <div className="friends-list" />
            </div>
        </>
    )
}