class Pessoa {
    private nome:string;
    private idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    print() {
        const temp = "oi";
        console.log(`${this.nome}, ${this.idade}`);
    }

    comparar(pessoa:Pessoa){
        if(this.idade < pessoa.idade){
            console.log("Sou mais novo");
        } else {
            console.log("Me respeita");
        }
    }
}

const prof = new Pessoa("Arley",49);
const aluno = new Pessoa("Jaque",18);


prof.print();
aluno.print();

