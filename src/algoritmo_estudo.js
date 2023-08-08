//  esse código não valida data 30/02, e
let idade = 0;

function main() {
  let dataNascimento; // new date já esta com a data atual
  dataNascimento = new Date(document.getElementById("datanascimento").value);
  idade = calculoIdade(dataNascimento);
  console.log(idade);
  document.getElementById("idade").value = "Sua idade é: " + idade;
}

function calculoIdade(dataNascimento) {
  console.log(typeof dataNascimento);
  let diferencaAno = Date.now() - dataNascimento.getTime();
  console.log(diferencaAno);
  let dataIdade = new Date(diferencaAno);
  console.log(dataIdade);
  return Math.abs(dataIdade.getUTCFullYear() - 1970); // Objeto sempre letra maiúscula, função e variavél sempre letra minúscula
}
// função para validar se é menor de idade ou maior de idade ?
function validarMaiorIdade() {
  if (idade >= 18) {
    document.getElementById("maiorIdade").value = "você é maior de idade!";
  } else {
    document.getElementById("maiorIdade").value = "você é menor de idade!";
  }
}
