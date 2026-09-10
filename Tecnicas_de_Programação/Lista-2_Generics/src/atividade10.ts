function criarEstado<T>(valorInicial: T): [() => T, (novoValor: T) => void] {
  let valor = valorInicial;

  function obterValor(): T {
    return valor;
  }

  function atualizar(novoValor: T): void {
    valor = novoValor;
  }

  return [obterValor, atualizar];
}

const [nome, setNome] = criarEstado("Ana");

const [idade, setIdade] = criarEstado(20);

console.log(`Antes: ${nome()}, ${idade()}`);

setNome("Ana Silva");

setIdade(21);

console.log(`Após: ${nome()}, ${idade()}`);

//1-R: A função do parâmetro genérico T na função criarEstado é permitir que a função seja reutilizada com diferentes tipos de dados, garantindo que o tipo do valor inicial e os tipos dos valores retornados pelas funções internas sejam consistentes.

//2-R: O retorno da função foi definida como uma tupla, pois a função criarEstado retorna um array com dois elementos: a primeira função (obterValor) que retorna o valor atual do estado, e a segunda função (atualizar) que permite atualizar o valor do estado. A tupla garante que os tipos dos elementos retornados sejam consistentes com o tipo genérico T.

//3- O tipo inferido para a variável "nome" é () => string, pois a função criarEstado foi chamada com um valor inicial do tipo string ("Ana"), e a função obterValor retorna o valor atual do estado, que é do tipo string. E o tipo inferido para a variável "setNome" é (novoValor: string) => void, pois a função atualizar recebe um novo valor do tipo string e não retorna nenhum valor (void).

//4- O tipo inferido para a variável "idade" é () => number, pois a função criarEstado foi chamada com um valor inicial do tipo number (20), e a função obterValor retorna o valor atual do estado, que é do tipo number. E o tipo inferido para a variável "setIdade" é (novoValor: number) => void, pois a função atualizar recebe um novo valor do tipo number e não retorna nenhum valor (void).

//5-R: As chamadas iniciais ()nome() e idade() são necessárias para obter os valores armazenados, pois as variáveis "nome" e "idade" são funções que retornam os valores atuais do estado. Ao chamar essas funções, obtemos os valores armazenados no estado, permitindo que sejam exibidos no console antes e depois das atualizações.