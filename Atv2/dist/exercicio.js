import promptSync from 'prompt-sync';
const prompt = promptSync();
const palavra1 = prompt("Digite a primeira palavra:");
const palavra2 = prompt("Digite a segunda palavra:");
let numb = 0;
let resultado = 0;
while (numb < palavra1.length && numb < palavra2.length && resultado === 0) {
    const codigo1 = palavra1.charCodeAt(numb);
    const codigo2 = palavra2.charCodeAt(numb);
    if (codigo1 < codigo2) {
        resultado = -1;
    }
    else if (codigo1 > codigo2) {
        resultado = 1;
    }
    numb++;
}
if (resultado === 0) {
    if (palavra1.length < palavra2.length) {
        resultado = -1;
    }
    else if (palavra1.length > palavra2.length) {
        resultado = 1;
    }
}
if (resultado < 0) {
    console.log(palavra1 + " aparece antes de " + palavra2 + " no dicionário.");
}
else if (resultado > 0) {
    console.log(palavra2 + " aparece antes de " + palavra1 + " no dicionário.");
}
else {
    console.log("As duas palavras são iguais.");
}
// import promptSync from 'prompt-sync';
// const prompt = promptSync();
// const palavra1:string = String(prompt('Digite uma palavra: '));
// const palavra2:string = String(prompt('Digite uma palavra: '));
// var pala_1 = palavra1.split("")
// var pala_2 = palavra1.split("")
// if(palavra1.charCodeAt(0) < palavra2.charCodeAt(0)){
// }
//# sourceMappingURL=exercicio.js.map