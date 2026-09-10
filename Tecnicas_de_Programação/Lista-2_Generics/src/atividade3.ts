interface Caixa<T> { 
    valor: T; 
} 

const um: Caixa<number> = { 
    valor: 100 
}; 

const dois: Caixa<string> = { 
    valor: "TypeScript" 
}; 

const tres: Caixa<boolean> = { 
    valor: true 
}; 

//1-R: O tipo genérico na interface "Caixa", representa que, toda variavel que herdar da interface, deverá tipa-la com o tipo que será instanciado en sua propriedade. Isso acontece, pois o tipo genérico támbem foi atribuido ao atributo da interface Caixa. 

//2-R: O tipo da propriedade valor do objeto "um" é number, o tipo da propriedade valor do objeto "dois" é string e o tipo da propriedade valor do objeto "tres" é boolean.

//3-R: A mesma interface pode armazenar diferentes tipos de valores, pois o tipo genérico permite que a interface seja instanciada com diferentes tipos, garantindo que cada instância da interface possa ter um tipo específico para sua propriedade valor.

//4- A seguinte declaração está correta ou incorreta? Justifique. 

// const quatro: Caixa<number> = { 
//     valor: "cem" 
// }; 

//R: Não está correta, pois, apesar da presença da tipagem Caixa<number>, o atributo valor está sendo atribuído a uma string, o que não é compatível com o tipo number definido na instância da interface.