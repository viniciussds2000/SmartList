import React, {useState} from "react";
/*import { useParams } from "react-router-dom";
*/
import axios from "axios";
import Botão from './Botão'
import './Infotarefa.css'
import {useNavigate} from "react-router-dom";

const Infotarefa = () => {
    const [values, setValues] = useState();
    const handleChangeValues = value =>{
        console.log(values);
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,

    }))
  };
  const handleEditButton= () => {
    axios.post("http://localhost:3001/updateinfo",{
       text: values.descinput,
    }).then((response)=>{
        history('/');
        console.log(response);
    });
    
};
    const history = useNavigate();
    const handlevoltar = () => {
        history('/')
    }
    return(
    
        <>
            <div className="botao-voltar" onClick={handlevoltar}>
                <Botão >Voltar</Botão>
            </div>
            <div className="Infotarefa-container">
                <h2>Estudar</h2>
                <p></p>
                <p>
                   Estudar para a prova de quinta feira,
                   Conteudo: Banco de dados, Segurança de informação e React
                </p>
                <textarea name="descinput"
                className="inputedit"
                onChange={handleChangeValues}/>
                <Botão onClick={handleEditButton}>Editar</Botão>

            </div>
        </>
    );
    
}
export default Infotarefa;