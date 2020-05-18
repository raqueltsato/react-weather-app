import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login() {
    return (
        <div className="login-container">
            <img src={logoImg} alt="Weather Now" />
            <form>
                <h1>Faça seu login</h1>
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Digite sua senha" />
                <button className="button" type="submit">Acessar</button>
                <Link className="icon-link" to="/signup">
                    <FiLogIn size={18} color="red"/>
                    Criar cadastro
                </Link>
            </form>
            
        </div>
    )
}