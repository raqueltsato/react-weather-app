import React from 'react';
import { FiPower } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Explore() {
    return (

        <div className="explore-container">
            <header>
                <button type="button">
                    <FiPower size={18} color="red" />
                </button>
            </header>

            <h1>Veja o tempo agora ao redor do mundo</h1>
            <form>
                <input placeholder="Nome da cidade"></input>
                <button type="submit">Pesquisar</button>
            </form>



            <ul className="result" id="result">
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/37277518?s=460&u=79c0657fcb6e2077a75c7b8c577b69f75edfa669&v=4" alt="Foto" />
                    <div>
                        <strong>Assai</strong>
                        <p>Nublado</p>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/37277518?s=460&u=79c0657fcb6e2077a75c7b8c577b69f75edfa669&v=4" alt="Foto" />
                    <div>
                        <strong>Assai</strong>
                        <p>Nublado</p>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/37277518?s=460&u=79c0657fcb6e2077a75c7b8c577b69f75edfa669&v=4" alt="Foto" />
                    <div>
                        <strong>Assai</strong>
                        <p>Nublado</p>
                    </div>
                </li>
            </ul>



        </div>
    )
}