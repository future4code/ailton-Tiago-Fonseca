
// - **Exercício 1**
    
//     a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// Primeiramente criamos uma logica com o "process.argv", que é um array onde o processo será executado, depois criamos no script um start para rodar
//  o comando no Node, e por fim colocamos no Terminal o comando npm run start 

//     b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// "Olá, (Nome)! Você tem (sua idade) anos."
const nome = "Tiago"
const idade = 29
const novaIdade = Number(idade + 7)

console.log("Olá," , nome, "! Você tem ", idade , "anos.");

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

console.log("Olá," , nome, "! Você tem ", idade , "anos. Em sete anos você terá",  novaIdade,"anos");
