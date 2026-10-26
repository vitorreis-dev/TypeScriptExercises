function somar(a: number, b: number): number {
  return a + b;
}
const referencia = somar;
const resultado = somar(2, 3);

console.log(typeof(referencia))
console.log(typeof(resultado))

//a)R: O tipo da variável "referencia" será function, pois a variável apenas armazena a função somar. E a variável resultado armazena um tipo numérico, pois a função foi executada no instanciamento da variável.

//b)R: Atribuiria a função somar novamente, mas atribuindo 4 e 6 para os parâmetros esperados na função.