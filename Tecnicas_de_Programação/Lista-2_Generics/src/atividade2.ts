function primeiro<T>(lista: T[]): T | undefined { 
    return lista[0]; 
} 

const x = primeiro([10, 20, 30]); 

const y = primeiro(["João", "Maria", "Pedro"]); 

const z = primeiro([true, false, true]); 

//1-R: O papel do tipo genérico na função "primeiro", é permitir que a função colete listas de tipo genérico, ou seja, listas de qualquer tipo, e retorne o primeiro elemento da lista, preservando o tipo do elemento retornado.

//2-R: O tipo inferido para a variável "x" é number, para a variável "y" é string e para a variável "z" é boolean.

//3- Reescreva a chamada da função utilizando a especificação explícita do tipo genérico para obter o primeiro elemento da lista de números.  

function primeiro_1<T>(lista: T[]): T | undefined{ 
    
    return lista[0]; 
} 

const a = primeiro<number>([10, 20, 30]); 

const b = primeiro<string>(["João", "Maria", "Pedro"]); 

const c = primeiro<boolean>([true, false, true]); 