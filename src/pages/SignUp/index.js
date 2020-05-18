import React from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function SignUp() {

    return (
        <div className="signup-container">
            <div className="content">
                <section className="">
                  <img src={logoImg} alt="Weather Now"/>
                  <h1>Cadastro</h1>
                  <Link className="icon-link" to="/">
                    <FiArrowLeft size={18} color="red"/>
                    Voltar para a página de Login 
                </Link>
                </section>
                <form>
                    <input type="email"placeholder="Digite seu e-mail"/>
                    <input type="password" placeholder="Digite a senha" />
                    <input type="password" placeholder="Confirme a senha" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    )
}