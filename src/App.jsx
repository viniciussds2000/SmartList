import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Header from './Componentes/Header';
import "./App.css";
import Tarefas from './Componentes/Tarefas';
import Addtarefa from './Componentes/Addtarefa';
import Infotarefa from './Componentes/Infotarefa';
import Login from './Componentes/Login';
import Cadastrar from './Componentes/cadastro'
import axios from 'axios';



const App = () => {
  const [lista, setLista] = useState();
  console.log("lista", lista);

  const [tarefas, setTarefas] = useState([  
    lista.map(nome),
  ])
  console.log('dentro', lista);

  const handleTarefaClick = (tarefaId) => {
    const newTarefas = tarefas.map(tarefa =>{
      if (tarefa.id === tarefaId) return {...tarefa, completo: !tarefa.completo }
      return tarefa;
    })
    setTarefas(newTarefas)

  }

    const handleTarefaAdd = (tarefasTitle) => {
        const novastarefas = [...tarefas, 
          {
          title: tarefasTitle,
          id: uuidv4,
          completo: false,
          },
        ];

        setTarefas(novastarefas);
    };
    const handleTarefaDel = (tarefaId) => {
      const newTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
      
        setTarefas(newTarefas);
    }

  
    const getListaTarefas = () => {
      axios.get("http://localhost:3001/getListaTarefas")
        .then(response => {
          const { data: listResult } = response.data
          setLista(listResult)
          console.log('dados do response', response.data)
          console.log('lista da req', listResult)
          console.log('lista dps do setLitsa', lista)
        })
        .catch(err => console.log('error'))
    }
    useEffect(() => {
      getListaTarefas()
    }, [])

  return (
    <Router>
      <Header/>
      <div className="container">
        
            <Routes>
              <Route path="/" element={
                <>
                <div className="borda">
                <Addtarefa handleTarefaAdd ={handleTarefaAdd} />
                
                
                <Tarefas tarefas={tarefas} 
                handleTarefaClick = {handleTarefaClick}
                handleTarefaDel = {handleTarefaDel}
              />
              </div>
              </>
              }/>
             <Route path="/:tarefaTitles" exact element={
               <Infotarefa/>
             }/>
      
             <Route path="/login" exact element={
               <Login/>
             }/>
             <Route path="/cadastrar" exact element={
               <Cadastrar/>
             }/>
            </Routes>
      </div>
    </Router>
  )
}
export default App;