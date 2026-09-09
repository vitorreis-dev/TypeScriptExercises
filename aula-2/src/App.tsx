import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {

  const [nomes, setNomes] = useState(["Ana", "Maria"])

  function add(nome){
    const temp=[...nomes,nome];
    setNomes(temp)
  }

  return (
    <>
    <Lista items={nomes}/>
    <Formulario adicionar={add}/>
    </>
  )
}

export default App
