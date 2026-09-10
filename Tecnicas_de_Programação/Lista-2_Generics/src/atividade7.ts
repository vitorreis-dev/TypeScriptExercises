class Caixa<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  public obterValor(): T {
    return this.valor;
  }
}

interface Pessoa {
  nome: string;

  idade: number;
}

interface Produto {
  codigo: number;

  descricao: string;
}

const um = new Caixa<Pessoa>({
  nome: "Ana",
  idade: 21,
});

const dois = new Caixa<Produto>({
  codigo: 12,
  descricao: "PC",
});

//1-R: A função do parâmetro genérico T na classe caixa, é permitir armazenar qualquer tipo de valor no atributo valor: T, pois o tipo genérico T é definido no momento da instanciação da classe, permitindo que a classe seja reutilizada com diferentes tipos de dados.

//2-R: O tipo do valor armazenado no objeto "um" é Pessoa, pois a instância da classe Caixa foi tipada como Caixa<Pessoa>.

//3-R: O tipo do valor armazenado no objeto "dois" é Produto, pois a instância da classe Caixa foi tipada como Caixa<Produto>.

//4- A declaração a seguir está correta ou incorreta? Justifique.

const quatro = new Caixa<number>(100); 

//R: A declaração está correta, pois a instância da classe Caixa foi tipada como Caixa<number>, e o valor 100 é do tipo number, o que é compatível com a tipagem definida.

//5-R: Complete o código a seguir para satisfazer as restrições do tipo T.

const cinco = new Caixa<{ status: "ok" | "nok" } & { valid: boolean }>( { status: "ok", valid: true }); 