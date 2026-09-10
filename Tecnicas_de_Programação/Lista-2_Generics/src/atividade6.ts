interface RespostaApi<T> {
  sucesso: boolean;

  dados: T;
}

interface Usuario {
  id: number;

  nome: string;
}

interface Produto {
  codigo: number;

  descricao: string;
}

const um: RespostaApi<Usuario> = {
  sucesso: true,

  dados: {
    id: 1,

    nome: "João",
  },
};

const dois: RespostaApi<Produto> = {
  sucesso: true,

  dados: {
    codigo: 100,

    descricao: "Notebook",
  },
};

//1-R: A função do tipo genérico T na interface "RespostaApi", é permitir que a interface seja instanciada com diferentes tipos de dados para sua propriedade "dados".

//2-R: O tipo da propriedade "dados" do objeto "um" é Usuario, pois a instância da interface RespostaApi foi tipada como RespostaApi<Usuario>.

//3-R: O tipo da propriedade "dados" do objeto "dois" é Produto, pois a instância da interface RespostaApi foi tipada como RespostaApi<Produto>.

//4- A declaração a seguir está correta ou incorreta? Justifique.

// const quatro: RespostaApi<Usuario> = {
//   sucesso: true,

//   dados: {
//     codigo: 10,

//     descricao: "Mouse",
//   },
// }; 

//R: A declaração está incorreta, pois a propriedade "dados" foi tipada como Usuario na instância da interface RespostaApi<Usuario>, mas está sendo atribuída a um objeto que possui as propriedades "codigo" e "descricao", que pertencem à interface Produto. Isso viola a tipagem definida e resultará em erro de compilação.

//5- Forneça o objeto na propriedade dados de forma a tornar a atribuição correta. 

const cinco: RespostaApi<{ ra: number }> = {
  sucesso: true,

  dados: { ra: 14124 },
}; 

//6- Forneça o objeto na propriedade dados de forma a tornar a atribuição correta. 

const seis: RespostaApi<{ status: "ok" | "nok" } | { valid: boolean }> = {
  sucesso: true,

  dados: { status: "ok" },
}; 

//7- Forneça o objeto na propriedade dados de forma a tornar a atribuição correta.

const sete: RespostaApi<{ status: "ok" | "nok" } & { valid: boolean }> = {
  sucesso: true,

  dados: { status: "ok", valid: true },
}; 