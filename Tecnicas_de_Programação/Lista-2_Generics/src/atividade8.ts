interface Entidade {
  id: number;
}

class Repositorio<T extends Entidade> {
  private dados: T[] = [];

  public adicionar(item: T): void {
    this.dados.push(item);
  }

  public listar(): T[] {
    return this.dados;
  }
}

interface Aluno extends Entidade {
  nome: string;

  curso: string;
}

interface Disciplina extends Entidade {
  descricao: string;

  cargaHoraria: number;
}

const um = new Repositorio<Aluno>();

um.adicionar({
  id: 1,

  nome: "João",

  curso: "ADS",
});

//1-R: A função da interface Entidade, é garantir a atribuição obrigatória do atributo id:number nas classes ou váriaveis que extendem a interface Entidade.

//2- Explique o significado da declaração a seguir: 

//class Repositorio<T extends Entidade> 

//R: A classe Repositorio está extendendo a interface Entidade, ou seja, a classe Repositorio só poderá ser instanciada se o tipo genérico T estender a interface Entidade, garantindo que qualquer tipo passado para o repositório terá a propriedade id obrigatoriamente.

//3- R: A interface Aluno pode ser utilizada como parâmetro genérico, pois a classe Repositório é do tipo genérico, que além de herdar de Entidade, támbem pode receber qualquer tipo que implemente a interface Entidade, e a interface Aluno implementa a interface Entidade, portanto, pode ser utilizada como parâmetro genérico.