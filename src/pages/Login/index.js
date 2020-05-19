import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import apiReq from '../../services/apiReq';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const token = localStorage.getItem('token');


    if(token) {
        alert("Você está logado na sua conta");
        history.push('/explore');
        
    }

    async function handleLogin(e) {
        e.preventDefault(); 
        const data = {email, password};

        try{
            const response = await apiReq.post('/login', data);
            const token = response.data.token;
            console.log(token);
            localStorage.setItem('token', token);
            history.push('/explore');
        } catch(err) {
            alert("Entre com login válido");
        }
    }

    return (
        <div className="login-container">
            <img src={logoImg} alt="Weather Now" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Digite sua senha" />
                <button className="button" type="submit">Acessar</button>
                <Link className="icon-link" to="/signup">
                    <FiLogIn size={18} color="red"/>
                    Criar cadastro
                </Link>
            </form>
            
        </div>
    )
}