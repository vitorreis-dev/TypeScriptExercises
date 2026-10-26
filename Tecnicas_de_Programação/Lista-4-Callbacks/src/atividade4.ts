type Notificacao = () => void;

function validarAluno(nota: number,frequencia: number,ok: Notificacao,nok: Notificacao, exam: Notificacao) {
  if (frequencia < 0.75 || (nota <= 4)) {
    nok();
  } else if(frequencia >= 0.75 && nota >= 4 && nota <= 6) {
    exam();
  } else{
    ok()
  }
}

function aprovar() {
  console.log("Você está aprovado!");
}
function reprovar() {
  console.log("Você está reprovado!");
}
function emExame() {
  console.log("Você está em exame");
}

validarAluno(5, 0.8, aprovar, reprovar, emExame); // Você está em exame!
validarAluno(6, 0.7, aprovar, reprovar, emExame); // Você está reprovado!
validarAluno(6, 0.8, aprovar, reprovar, emExame); // Você está em exame!
validarAluno(5, 0.7, aprovar, reprovar, emExame); // Você está reprovado!
validarAluno(5, 0.8, aprovar, reprovar, emExame); // Você está em exame!
