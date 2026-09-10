function criarPar<T>(valor1: T, valor2: T): T[] {
  return [valor1, valor2];
}

const um = criarPar(10, 20);

const dois = criarPar("João", "Maria");

const tres = criarPar(true, false);

//1-R: O tipo inferido para a variável "um" é number[], pois a função criarPar foi chamada com dois argumentos do tipo number.

//2-R: O tipo inferido para a variável "dois" é string[], pois a função criarPar foi chamada com dois argumentos do tipo string.

//3-R: O tipo inferido para a variável "tres" é boolean[], pois a função criarPar foi chamada com dois argumentos do tipo boolean.

//4-R: O TypeScript determina automaticamente o tipo genérico T com base nos tipos dos argumentos passados para a função criarPar. Ele infere o tipo correto para T com base nos tipos dos valores fornecidos, garantindo que a função seja tipada corretamente sem a necessidade de especificar explicitamente o tipo genérico ao chamar a função.