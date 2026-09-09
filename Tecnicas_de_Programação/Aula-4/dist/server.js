"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cursos_1 = require("./data/cursos");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
app.get("/cursos", (_req, res) => {
    res.json(cursos_1.cursos);
});
app.delete("/cursos/:id", (req, res) => {
});
app.post("/cursos", (req, res) => {
    const { nome, cargaHoraria } = req.body;
    const nextId = cursos_1.cursos[cursos_1.cursos.length - 1].id;
    const curso = { id: nextId, nome, cargaHoraria };
    cursos_1.cursos.push(curso);
    res.json({ curso });
});
//# sourceMappingURL=server.js.map