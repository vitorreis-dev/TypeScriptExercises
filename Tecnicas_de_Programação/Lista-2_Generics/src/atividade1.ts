function identidade(valor: any): any { 
    return valor; 
} 

const a = identidade(10); 

const b = identidade("Olá"); 

const c = identidade(true); 

//1-R: O problema da utilização da tipagem any, é o fato de não termos previsibilidade ao decorrer da utilização, pois não é registrado a tipagem do último elemento armazenado. Não existe um checador de tipos com o tipo any, o typeScript não avisará se você tentar acessar uma propriedade que não existe ou chamar um método com o nome errado.

//2- Reescreva a função, na notação arrow function, utilizando um tipo genérico chamado T.  

const identidade_1 = <T>(valor: T):T => {
    return valor
}

const aa = identidade_1(10); 

const bb = identidade_1("Olá"); 

const cc = identidade_1(true); 

//3-R: Após a alteração para o tipo genérico, a cada váriavel será distribuido o tipo relacionado ao valor atribuido a função, ou seja, se na várivel "a" foi atribuido um valor com números, teremos então, a váriavel "a" de tipo Number.

//4-R: A versão genérica é mais segura, pois armazenamos todos os dados com seus respectivos tipos e preservamos o seu rastreamento, o que torna a estrutura do código mais segura e previsivel.