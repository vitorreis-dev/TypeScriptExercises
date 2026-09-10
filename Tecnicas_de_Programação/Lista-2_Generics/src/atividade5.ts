interface Par<K, V> {
  chave: K;

  valor: V;
}

const um: Par<number, string> = {
  chave: 1,

  valor: "João",
};

const dois: Par<string, boolean> = {
  chave: "admin",

  valor: true,
};

//1-R: A função dos parâmetro genéricos K e V, é permitir que a interface "Par" seja instanciada com diferentes tipos de dados para suas propriedades "chave" e "valor".

//2-R: Os tipos das propriedades "chave" e "valor" do objeto "um" são number e string, respectivamente.

//3-R: Já os tipos das propriedades "chave" e "valor" do objeto "dois" são string e boolean, respectivamente.

//4- A declaração a seguir está correta ou incorreta? Justifique. 

// const p3: Par<number, string> = { 

//     chave: "ABC", 
//     valor: "Maria", 

// }; 

//R: A declaração está incorreta, pois a propriedade "chave" foi tipada como number na instância da interface Par<number, string>, mas está sendo atribuída a uma string ("ABC"), o que viola a tipagem definida e resultará em erro de compilação.