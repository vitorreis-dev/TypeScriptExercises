interface TemNome {
  nome: string;
}

function exibirNome<T extends TemNome> (objeto: T): void {
  console.log(objeto.nome);
}

exibirNome({
  nome: "João",

  idade: 20,
});

exibirNome({
  nome: "Maria",
  cidade: "São Paulo",
});

//1-R: O objetivo da restrição <T extends TemNome> na função "exibirNome" é garantir que o tipo genérico T seja um objeto que possua a propriedade "nome". Isso permite que a função acesse a propriedade "nome" de forma segura, sem causar erros de compilação, pois qualquer objeto passado para a função deve ter essa propriedade obrigatoriamente.

//2-R: As duas chamadas estão corretas porque os objetos possuem a propriedade obrigatória nome: string. Eles também podem possuir outras propriedades, como idade ou cidade, pois T extends TemNome exige que T tenha pelo menos a estrutura definida por TemNome.

// 3- A chamada a seguir está correta ou incorreta? Justifique. 

// exibirNome({ 

//  idade: 30, 

// }); 

//R: A Está incorreta, pois o atributo obrigatório presente na interface (nome: string), não está presente na função exibirNome,isso viola a restrição imposta pelo tipo genérico T, resultando em erro de compilação.