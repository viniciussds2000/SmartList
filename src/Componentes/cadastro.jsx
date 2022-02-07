import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


import Botão from './Botão'
import './cadastro.css'


const Cadastro = () => {
    
    const [values, setValues] = useState();
    const handleChangeValues = value =>{
        console.log(values);
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))
  };
    const history = useNavigate();
    const handlelogin = () => {
        history('/login')
    }
    const handlecadastrar = () => {
            axios.post("http://localhost:3001/register",{
                login: values.login,
                senha: values.senha,
            }).then((response)=>{
                console.log(response);
                
            });
        
    };

    return(
        
        <>
            
            <div className="login-container">
                <h1>Cadastrar</h1>
                <form action="">
                    <label>Login: </label>
                    <input type="text" name="login"
                        className="inputlogin"
                        placeholder="Login"
                        onChange={handleChangeValues}/>
                    <label>Senha:</label>
                    <input type="password" name="senha"
                        className="inputsenha"
                        placeholder="Senha"
                        onChange={handleChangeValues}/>
                    <label>Repita a senha:</label>
                    <input type="password" name="senha2"
                        className="inputsenha2"
                        placeholder="Repetir a senha"
                        onChange={handleChangeValues}/>
                
                    <div className="botao-cadastro" onClick={handlecadastrar}> 
                        <Botão action="/">Cadastrar</Botão>
                    <div className="botao-login" onClick={handlelogin}>
                        <Botão>Fazer Login</Botão>
                    </div>
                    </div>
                </form>
                
            
            </div>
        </>
    );
    
}
export default Cadastro;