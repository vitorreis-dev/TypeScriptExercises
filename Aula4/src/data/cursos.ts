import {CursoProps} from "../types/curso" 

export let cursos: CursoProps[] = [
  {
    id: 1,
    nome: "Desenvolvimento Web",
    cargaHoraria: 80,
  },
  {
    id: 2,
    nome: "Banco de Dados",
    cargaHoraria: 60,
  },
  {
    id: 3,
    nome: "Aplicações Móveis",
    cargaHoraria: 80,
  },
];

export function remover(id:number){
    cursos = cursos.filter((item)=>{
        item.id != id
    })
}

export function update(id:number, nome:string, cargaHoraria:number){
  for(let i =0; i < cursos.length; i++){
    if( cursos[i].id == id){
      cursos[i].nome = nome;
      cursos[i].cargaHoraria = cargaHoraria;
    }
  }
}