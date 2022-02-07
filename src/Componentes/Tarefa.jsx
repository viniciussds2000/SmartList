import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg';
import {useNavigate} from "react-router-dom";

import "./Tarefa.css"


const Tarefa = ({tarefa, handleTarefaClick,handleTarefaDel}) => {
    const history = useNavigate();
    
    const handleTarefaInfoClick = () => {
        history('/{tarefa.title}')
    }

   

    return(
        <div
         className="tarefa-conteiner"
         style ={tarefa.completo ? {borderLeft:"6px solid #a74ab5"} : {}}
         >
             <div className ="tarefa-title" onClick={() => handleTarefaClick (tarefa.id)}>
                {tarefa.id}
             </div>
             <div>
                <button className="info-tarefa-botao"  onClick={handleTarefaInfoClick}>
                    
                    <CgInfo/>
                </button>

                <button className="del-tarefa-botao" 
                onClick={() => handleTarefaDel(tarefa.id)}>
                    <CgClose/>
                </button>
                
             </div>
         </div>
    );
    // <div className="tarefa-conteiner">{tarefa.title}</div>
};

export default Tarefa;