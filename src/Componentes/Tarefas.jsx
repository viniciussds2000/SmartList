import React from "react";

import Tarefa from "./Tarefa";


const Tarefas = ({tarefas,handleTarefaClick,handleTarefaDel}) => {
    return(
        <>
            {tarefas.map((tarefa) => (
                <Tarefa tarefa={tarefa}
                handleTarefaClick = {handleTarefaClick}
                handleTarefaDel = {handleTarefaDel}
                />
                ))}
        </>
    )
    
};

export default Tarefas;