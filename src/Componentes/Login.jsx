import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import Botão from './Botão'
import './Login.css'

const Login = () => {
    const [values, setValues] = useState();
    const handleChangeValues = value =>{
        console.log(values);
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))
  };
    const history = useNavigate();
    const handlelogar= () => {
        axios.post("http://localhost:3001/validarlogin",{
            login: values.login,
            senha: values.senha,
        }).then((response)=>{
            console.log(response)
        });
        
    };
    const handlecadastrar = () => {
        history('/cadastrar')
    }

    return(
        <>
            
            <div className="login-container">
                <h1>Fazer Login</h1>
                <form action="">
                <label>Login: </label>
                <input type="text" name="login"
                className="input"
                placeholder="Login"
                onChange={handleChangeValues}/>
                <label>Senha:</label>
                <input type="password" name="senha"
                className="input"
                placeholder="Senha"
                onChange={handleChangeValues}/>
                <div className="botao-cadastro" onClick={handlelogar}>
                    <Botão>Entrar</Botão>
                </div>
                <div className="botao-login" onClick={handlecadastrar}> 
                    <Botão>Cadastrar</Botão>
                </div>
                </form>
                
            
            </div>
        </>
    );
    
}
export default Login;