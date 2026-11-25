function MostrarDados() {

    const nome = document.getElementById("Nome").value;
    let idade = document.getElementById("Idade").value;
    let altura = document.getElementById("Altura").value;
    console.log("Dados :", nome, idade, altura);
    document.getElementById("Resultado").innerHTML = "Nome: " + nome + "<br>Idade: " + idade + "<br>Altura: " + altura;

}
function Explicaroperacoes() {
  document.getElementById("Resultado2").innerHTML = `
    <b>"10" + 5 = ${"10" + 5}</b>: O operador de soma (+) junta textos (concatenação).<br><br>
    <b>"10" - 5 = ${"10" - 5}</b>: O operador de subtração (-) força a conversão para número e subtrai.<br><br>
    <b>"10" == 10 = ${"10" == 10}</b>: O operador de igualdade (==) compara só o valor, então dá verdadeiro.<br><br>
    <b>"10" === 10 = ${"10" === 10}</b>: O operador de igualdade estrita (===) compara valor e tipo (texto vs número), então dá falso.
  `;
}
function  Media() {
    let nota = Number(document.getElementById("Nota").value);
    let resultado;
    if (nota >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    console.log(resultado);
    document.getElementById("Resultado3").innerHTML = "Resultado: " + resultado;
}
function mostrarDia(){
  let dia = document.getElementById("Dia").value;
  let resultado;
  switch(dia){
    case "1":
      resultado = "Domingo";
      break;
    case "2":
      resultado = "Segunda-feira";
      break;
    case "3":
      resultado = "Terça-feira";
      break;
    case "4":
      resultado = "Quarta-feira";
      break;
    case "5":
      resultado = "Quinta-feira";
      break;
    case "6":
      resultado = "Sexta-feira";
      break;
    case "7":
      resultado = "Sábado";
      break;
    default:
      resultado = "Dia inválido";
  }
  document.getElementById("Resultado4").innerHTML = "Dia da semana: " + resultado;



}
