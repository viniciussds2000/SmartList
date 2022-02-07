import React from "react";
import {useNavigate} from "react-router-dom";
import './Header.css'

const Header = () =>{
    const history = useNavigate();
    const handlelogin = () => {
        history('/login')
    }
    const handlecadastro = () => {
        history('/cadastrar')
    }
    const handlehome = () => {
        history('/')
    }
    return (
        <div className='header'>
            <h1 className="logo" onClick={handlehome}>SmartList</h1>
            <nav>
                <ul className="nav_links">
                    <li><a onClick={handlelogin}>Entrar</a></li>
                    <li><a onClick={handlecadastro}>Cadastrar</a></li>
                </ul>
            </nav>
        </div>
        );
}

export default Header;