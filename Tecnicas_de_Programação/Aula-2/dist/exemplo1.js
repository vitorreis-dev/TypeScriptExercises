"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    a;
    b;
    nome;
    idade;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    print() {
        const temp = "oi";
        console.log(`${this.nome}, ${this.idade}`);
    }
    comparar(pessoa) {
        if (this.idade < pessoa.idade) {
            console.log("Sou mais novo");
        }
        else {
            console.log("Me respeita");
        }
    }
}
const prof = new Pessoa("Arley", 49);
const aluno = new Pessoa("Jaque", 18);
prof.print();
aluno.print();
//# sourceMappingURL=exemplo1.js.map