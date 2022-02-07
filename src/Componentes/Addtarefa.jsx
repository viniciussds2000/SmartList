import React, { useState } from 'react'

import Botão from './Botão'

import "./Addtarefa.css"
import axios from 'axios'


const Addtarefa = ({handleTarefaAdd}) =>{
    const [inputData,setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        

    };

    const handleAddTarefaClick = () => {
        handleTarefaAdd(inputData);
        setInputData("");
        axios.post("http://localhost:3001/addtarefa",{
            item: inputData,
        }).then((response)=>{
            console.log(response);
        });
        
    };

    return (
    <div className="add-tarefa-container">
        <input
         onChange={handleInputChange}
         value={inputData}
         className="add-tarefa-input" 
         type="text"/>
        

        <div className="add-tarefa-container-botão">
        <Botão onClick={handleAddTarefaClick}>Adicionar</Botão>
        </div>
    </div> 
    );
}

export default Addtarefa;