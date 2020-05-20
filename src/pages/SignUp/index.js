import React,{useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';

import apiReq from '../../services/apiReq';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const history = useHistory();
    const token = localStorage.getItem('token');



    if(token) {        
        history.push('/explore');
        
    }


    async function handleSignUp(e){
        e.preventDefault();     
        try{
            if(password !== confPassword) {
                alert("A senha não confere");
                setPassword('');
                setConfPassword('');
                return;
            }        
    
            const data = {email, password};
            console.log(data);
            const response = await apiReq.post('/register', data);
            console.log(response.data);
            history.push('/');
        } catch(err) {
            alert("Erro ao cadastrar, tente novamente");
            setEmail('');
            setPassword('');
            setConfPassword('');
        }
    }

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
                <form onSubmit={handleSignUp}>
                    <Input value={email} onChange={e =>setEmail(e.target.value)} type="email"placeholder="Digite seu e-mail"/>
                    <Input value={password} onChange={e =>setPassword(e.target.value)} type="password" placeholder="Digite a senha" />
                    <Input value={confPassword} onChange={e =>setConfPassword(e.target.value)} type="password" placeholder="Confirme a senha" />
                    <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        </div>

    )
}