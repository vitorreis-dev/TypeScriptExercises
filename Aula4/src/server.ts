import express, {type Request, type Response} from "express";
import {cursos, remover, update} from "./data/cursos";
import { CursoProps } from "./types/curso";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/cursos", function(_req:Request, res:Response<CursoProps[]>){
  res.json(cursos);
});

app.post("/cursos", function(req:Request,res:Response){
  const {nome,cargaHoraria} = req.body;
  const nextId = cursos[cursos.length-1].id + 1;
  const curso:CursoProps = {id:nextId, nome, cargaHoraria};
  cursos.push(curso);
  res.json(curso);
});

app.delete("/cursos/:id", function(req:Request,res:Response){
  const id = Number(req.params.id);
  remover(id);
  res.json({msg:id});
});

app.patch("/cursos/:id", function(req:Request,res:Response){
  const id = Number(req.params.id);
  const {nome,cargaHoraria} = req.body;
  update(id, nome, cargaHoraria);
  res.json({msg:"ok"});
});


app.listen(PORT, function(){
  console.log(`Servidor disponível em http://localhost:${PORT}`);
});

