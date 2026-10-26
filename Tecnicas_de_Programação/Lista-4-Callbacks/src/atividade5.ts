type Operacao = (valor: number) => number;

function aplicarDesconto(valorInicial:number): number{
    valorInicial = valorInicial - (valorInicial * 0.10)
    console.log(`Valor da compra após o desconto: ${valorInicial}`)
    return valorInicial
}

function adicionarFrete(valorInicial:number){
    valorInicial += 20
    console.log(`Valor da compra após adição do valor do frete ${valorInicial}`)
    return valorInicial
}

function aplicarImposto(valorInicial:number){
    valorInicial = valorInicial + (valorInicial * 0.05)
    console.log(`Valor da compra após imposto ${valorInicial}`)
    return valorInicial
}

function calcularValorFinal(valorInicial: number,operacoes: Operacao[],): string {

    let valor = 0
    let valorAtribu = valorInicial

    for (let i = 0; i < operacoes.length; i++) {
        let funcao = operacoes[i]
        const valorFinal = funcao!(valorAtribu) 

        valorAtribu = valorFinal

        valor = valorFinal
    }

    return valor.toFixed(2)
}

console.log("Valor final da compra: " + calcularValorFinal(200, [aplicarDesconto, adicionarFrete, aplicarImposto, (valorInicial)=>{valorInicial -= 15; return valorInicial}]))