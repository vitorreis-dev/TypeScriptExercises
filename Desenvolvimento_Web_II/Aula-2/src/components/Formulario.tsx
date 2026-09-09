import { useState } from "react"

type formularioProps = {
    adicionar: (nome:string) => void
}

export default function Formulario(props:formularioProps){

    const [name, setName] = useState("")

    return( 
    <div>
        <label htmlFor="Nome">Nome</label>
        <input type="text" id="Nome" value={name} 
        onChange={e => setName(e.target.value)}/>
        <button onClick={() => props.adicionar(name)}>Salvar</button>
    </div>
    )
}