// Exercícios de interpretação de código

// 1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a.
// // 10,5
// // b.
// Estaria somente apresentando o valor do argumentario da função, que seria multiplicado por 5 a mesma ,
// porem sem console.log n apareceria nada no console.

// 2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a.
// A função está colocando o texto em letras minusculas e está analisando no texto se há ou não a palavra cenoura no texto.
// b.Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   true
// ii.  true
// iii. true

// Exercícios de escrita de código

// 1.
// a)
// function imprimirMensagem (dados){
// console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }
// console.log(imprimirMensagem)

// const nomeM = "Tiago"
// const idadeM = 30    
// const cidadeM = "Porto"
// const profissaoM = "estudante"

// function imprimirMinhaMensagem (nome,idade,cidade,profissao){

// }
// console.log(`Eu sou ${nomeM}, tenho ${idadeM} anos, moro em ${cidadeM} e sou ${profissaoM}.`)

// b) 
// function imprimirMensagem (dados){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
//     }
//     console.log(imprimirMensagem)
    
//     let nomeM = prompt("Qual é o seu nome?")
//     let idadeM = prompt("Qual é a sua idade?")    
//     let cidadeM = prompt("Qual é a sua cidade?")
//     let profissaoM = prompt("Qual é a sua profissão?")
    
//     function imprimirMinhaMensagem (nome,idade,cidade,profissao){
        
//     }
//     console.log(`Eu sou ${nomeM}, tenho ${idadeM} anos, moro em ${cidadeM} e sou ${profissaoM}.`)

// 2.
// a)
// let num1 = 5
// let num2 = 2

// let soma = function somaNumeros (numero1,numero2){

//     return numero1 + numero2
// }

// console.log(soma(num1,num2))

// b) 
// const num1 = 5
// const num2 = 2

// const maiorIgual = function igualar (numero1,numero2){
     
//     return numero1 >= numero2
// }

// console.log(maiorIgual(num1,num2))

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// const num1 = 2

// const numeroPar = function conferir (numero){
//     retun numero % 2
// }

// console.log(numeroPar(num1))

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
// juntamente com uma versão dela em letras maiúsculas.

const mensagem = "Eu quero férias."
function juntar (mensagem1){
    const juntando = mensagem1.toUpperCase().length
    return  juntando
}
console.log(juntando(mensagem))
