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

  let valor1 = string1.lenght
  let valor2 = string2.lenght
  const mesmoTamanho = valor1 === valor2

  return mesmoTamanho


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  const retorno = array[0]
  return retorno

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  const retornoUltimo = array[array.length - 1]
  return retornoUltimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  const primeiroLista = array.shift()
  const ultimoLista = array.pop ()
  array.unshift(ultimoLista)
  array.push(primeiroLista)

  return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  let primeira = string1.toLowerCase()
  let segunda = string2.toLowerCase()

  const compararStrings = primeira === segunda

  return compararStrings
  // console.log (compararStrings)
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt('Qula é o seu ano de nascimento?'))
  const anoCarteira = Number(prompt("Qual o ano que foi emitido sua carteira identidade?"))

  const menorDe20 = (anoAtual - anoNascimento) <= 20
  const maiorDe20 = (anoAtual - anoNascimento) >= 50
  const maiorDe50 = (anoAtual - anoNascimento) > 50
  const carteira5 = (anoAtual - anoCarteira) >= 5
  const carteira10 = (anoAtual - anoCarteira) >= 10
  const carteira15 = (anoAtual - anoCarteira) >= 15

  console.log(carteira5 , carteira10 , carteira15)


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  let anoBissexto1 = ano % 400 === 0 
  let anoBissexto2 = ano % 4 === 0
  let anoNaoBissexto = ano % 100 != 0
  let resultado = anoBissexto1 || anoBissexto2 || anoNaoBissexto

 console.log(resultado)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  const idade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const positivo = "sim"
  const respostaIdade = idade === positivo
  const respostaEscola = escolaridade === positivo
  const respostaDispo = disponibilidade === positivo

  const resposta = respostaIdade && respostaEscola && respostaDispo

  console.log(resposta)

}