import Buttom from "../Buttom"; 
import React from "react";
import logo from '../images/LoginLogoNuKenzie.png'
import logogrande from "../images/LogoImg.svg"
import '../loginScreen/styles.css'

const LoginScreen = ({ onClick }) => {
    return (
        <main className="loginScreen--main">
            <div className="loginScreen--div--geral">
                <form className="login--form" onSubmit={(event) => event.preventDefault()}>
                    <img className="logoNuKenzie" src={logo}/>
                    <h2 className="loginScreen--h2">Centralize o controle das suas finanças</h2>
                    <h3 className="loginScreen--h3">de forma rápida e segura</h3>
                    <Buttom classe="loginScreen--button" onClick={ onClick }>Iniciar</Buttom>
                </form>
                <aside>
                    <img className="grandeimagem" src={logogrande} alt=""/>
                </aside>
            </div>  
        </main>
        
    )
}

export default LoginScreen;