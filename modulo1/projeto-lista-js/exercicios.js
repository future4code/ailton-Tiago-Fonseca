// // // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
const somDosNumeros = 1 + 2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
// const mensagem = prompt("Escreva uma mensagem.")
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

    const altura = Number(prompt("Qual a altura do triangulo?"))
    const largura = Number(prompt("QUal a largura do triangulo?"))
    const area = altura * largura
    console.log(area)

  }
 

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  const resultado = anoAtual - anoNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  const calculo = peso / (altura * altura)
  return calculo 
  console.log(calculaIMC)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual é a sua idade?")
  const email = prompt("Qual é o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

const corFavorita1 = prompt("Qual sua 1º cor favorita?")
const corFavorita2 = prompt("Qual sua 2º cor favorita?")
const corFavorita3 = prompt("Qual sua 3º cor favorita?")
const coresFavoritas = [corFavorita1,corFavorita2,corFavorita3]

console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

const letraMaiuscula = string.toUpperCase()
return letraMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

const ingressosVendidos = custo / valorIngresso
return ingressosVendidos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  const valor1 = string1.lenght
  const valor2 = string2.lenght
  const mesmoTamanho = valor1 === valor2

  return mesmoTamanho
  // console.log(mesmoTamanho)


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  const retorno = array[0]
  return retorno

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  const retornoUltimo = array[4]
  return retornoUltimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}