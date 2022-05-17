// Exercícios de interpretação de código
// 1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
// Ele pede um numero qualquer e depois, transforma o string em numero do prompt, depois coloca a condição se o numero 
// for divisivel por 2 e o resto da divisão for 0, ele passa no teste, caso contrario ele n passa.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// numeros pares divisiveis por 2 que o resto da divisão seja zero.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// qual quer numero impar ou que o resto da divisão seja diferente de 0

// 2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// Serve para imprimir o preços das frutas escolhidas pelo usuaria.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta  Maçã é  R$ 2.35

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
// impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta  Pêra é  R$ 5

// 3.
// const numero1 = Number(prompt("Digite o primeiro número."))

// if(numero1 > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// É pedindo o usuario um numero atraves do "prompt" e depois transformando a "string" impressa no prompt atraves do "Number"

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // Esse número passou no teste. Não informaria nada, daria erro, pois a condição n está sendo feito de maneira correta.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    // Sim, pois a condição está montada de forma incorreta, logo, vai dar erro.

// const numeroo = Number(prompt("Digite o primeiro número."))

// if(numeroo > 0) {
//   console.log("Esse número passou no teste")
	
// }else console.log( "Essa mensagem é secreta!!!")


// Exercícios de escrita de código

// 1.
// Faça um programa que pergunta ao usuário qual a idade dele e imprima no 
// console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let idade = Number(prompt("Qual é a sua idade?"))

// if(idade >= 18) {
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir.")
// }

// 2. 
// Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

// let turno = prompt("Você estuda em qual turno?(M)matutino,(V)vespertino ou (N)norturno?")

// if(turno ==="M"){
//     console.log("Bom Dia!")

// }else if(turno === "V"){
//     console.log("Boa Tarde!")

// }else {
//     console.log("Boa Noite!")
// }

// 3.
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turno = prompt("Você estuda em qual turno?(M)matutino,(V)vespertino ou (N)norturno?")

// switch(turno) {
//     case "M":
//     console.log("Bom Dia!")
//     break
//     case "V":
//     console.log("Boa Tarde!")
//     break
//     default:
//     console.log("Boa Noite!")
//     break
// }

// 4.
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só
// assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre
// o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genero = prompt("Qual o gênero de filme você vai assistir?")
// let preco = Number(prompt("Qual o valor do ingresso?"))

// if (genero === "fantasia" && preco <= 15) {
//     console.log("Bom Filme!")

// }else {
//     console.log ("Escolha outro filme :(")
// }  


// Desafios

// 1.
// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!",
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
// e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] 
// pelo que o usuário colocou no input.

// let genero = prompt("Qual o gênero de filme você vai assistir?")
// let preco = Number(prompt("Qual o valor do ingresso?"))
// let lanche = prompt("Qual lanchinho você vai comer?")

// if (genero === "fantasia" && preco <= 15) {
//     console.log(`Bom Filme! Aproveite o/a seu/sua ${lanche}`)

// }else {
//     console.log ("Escolha outro filme :(")
// }  

// 2.
// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol.
// Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
//     Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem 
//     que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores
//      de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de
//     jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

let nome = prompt("ual o seu nome completo?")
let tipo = prompt("Qual o tipo de jogo vai assistir: (IN)Internacional ou (DO)Doméstico?")
let etapa = prompt("Qual a etapa do jogo vai assistir: (SF)seme-final, (DT)terceiro lugar ou (FI)final?")
let categoria = Number(prompt("Qual categoria vai escolher: 1, 2, 3 ou 4?"))
let quantidade = Number(prompt("Qual a quantidade de ingressos vai querer?"))

// if (etapa === "SF" && categoria === 1) {
//     console.log(`--Dados da compra--- 
//     Nome do cliente: ${nome}
//     Tipo do jogo:  ${tipo}
//     Etapa do jogo:  Seme-Final
//     Categoria:  1 
//     Quantidade de Ingressos:  ${quantidade} 
//     ---Valores--- 
//     Valor do ingresso:  R$ 1320
//     Valor total:  ${quantidade * 1320} `)
// }else if 

switch(etapa,categoria,tipo){
    case "SF", "1", "DO":
        console.log(`--Dados da compra--- 
        //     Nome do cliente: ${nome}
        //     Tipo do jogo:  ${tipo}
        //     Etapa do jogo:  Seme-Final
        //     Categoria:  1 
        //     Quantidade de Ingressos:  ${quantidade} 
        //     ---Valores--- 
        //     Valor do ingresso:  R$ 1320
        //     Valor total:  ${quantidade * 1320}`)
    break
    case "SF","2", "DO":
        console.log(`--Dados da compra--- 
        //     Nome do cliente: ${nome}
        //     Tipo do jogo:  ${tipo}
        //     Etapa do jogo:  Seme-Final
        //     Categoria:  1 
        //     Quantidade de Ingressos:  ${quantidade} 
        //     ---Valores--- 
        //     Valor do ingresso:  R$ 880
        //     Valor total:  ${quantidade * 880}`)
    break
    case "SF","3", "DO":
        console.log(`--Dados da compra--- 
        //     Nome do cliente: ${nome}
        //     Tipo do jogo:  ${tipo}
        //     Etapa do jogo:  Seme-Final
        //     Categoria:  1 
        //     Quantidade de Ingressos:  ${quantidade} 
        //     ---Valores--- 
        //     Valor do ingresso:  R$ 550
        //     Valor total:  ${quantidade * 550}`)
    break
    case "SF","4", "DO":
        console.log(`--Dados da compra--- 
        //     Nome do cliente: ${nome}
        //     Tipo do jogo:  ${tipo}
        //     Etapa do jogo:  Seme-Final
        //     Categoria:  1 
        //     Quantidade de Ingressos:  ${quantidade} 
        //     ---Valores--- 
        //     Valor do ingresso:  R$ 220
        //     Valor total:  ${quantidade * 220}`)
    break
    case "DT","1", "DO":
            console.log(`--Dados da compra--- 
            //     Nome do cliente: ${nome}
            //     Tipo do jogo:  ${tipo}
            //     Etapa do jogo:  Seme-Final
            //     Categoria:  1 
            //     Quantidade de Ingressos:  ${quantidade} 
            //     ---Valores--- 
            //     Valor do ingresso:  R$ 660
            //     Valor total:  ${quantidade * 660}`)  
    break
    case "DT","2", "DO":
                    console.log(`--Dados da compra--- 
                    //     Nome do cliente: ${nome}
                    //     Tipo do jogo:  ${tipo}
                    //     Etapa do jogo:  Seme-Final
                    //     Categoria:  1 
                    //     Quantidade de Ingressos:  ${quantidade} 
                    //     ---Valores--- 
                    //     Valor do ingresso:  R$ 440
                    //     Valor total:  ${quantidade * 440}`)  
    break
    case "DT","3", "DO":
                            console.log(`--Dados da compra--- 
                            //     Nome do cliente: ${nome}
                            //     Tipo do jogo:  ${tipo}
                            //     Etapa do jogo:  Seme-Final
                            //     Categoria:  1 
                            //     Quantidade de Ingressos:  ${quantidade} 
                            //     ---Valores--- 
                            //     Valor do ingresso:  R$ 330
                            //     Valor total:  ${quantidade * 330}`)
    break
    case "DT","4", "DO":
                                    console.log(`--Dados da compra--- 
                                    //     Nome do cliente: ${nome}
                                    //     Tipo do jogo:  ${tipo}
                                    //     Etapa do jogo:  Seme-Final
                                    //     Categoria:  1 
                                    //     Quantidade de Ingressos:  ${quantidade} 
                                    //     ---Valores--- 
                                    //     Valor do ingresso:  R$ 170
                                    //     Valor total:  ${quantidade * 170}`)
    break
    case "FI","1", "DO":
                                            console.log(`--Dados da compra--- 
                                            //     Nome do cliente: ${nome}
                                            //     Tipo do jogo:  ${tipo}
                                            //     Etapa do jogo:  Seme-Final
                                            //     Categoria:  1 
                                            //     Quantidade de Ingressos:  ${quantidade} 
                                            //     ---Valores--- 
                                            //     Valor do ingresso:  R$ 1980
                                            //     Valor total:  ${quantidade * 1980}`) 
    break
    case "FI","2", "DO":
                                                    console.log(`--Dados da compra--- 
                                                    //     Nome do cliente: ${nome}
                                                    //     Tipo do jogo:  ${tipo}
                                                    //     Etapa do jogo:  Seme-Final
                                                    //     Categoria:  1 
                                                    //     Quantidade de Ingressos:  ${quantidade} 
                                                    //     ---Valores--- 
                                                    //     Valor do ingresso:  R$ 1320
                                                    //     Valor total:  ${quantidade * 1320}`)  
    break
    case "FI","3", "DO":
                                                            console.log(`--Dados da compra--- 
                                                            //     Nome do cliente: ${nome}
                                                            //     Tipo do jogo:  ${tipo}
                                                            //     Etapa do jogo:  Seme-Final
                                                            //     Categoria:  1 
                                                            //     Quantidade de Ingressos:  ${quantidade} 
                                                            //     ---Valores--- 
                                                            //     Valor do ingresso:  R$ 880
                                                            //     Valor total:  ${quantidade * 880}`)    
    break
    case "FI","4", "DO":
            console.log(`--Dados da compra--- 
            //     Nome do cliente: ${nome}
            //     Tipo do jogo:  ${tipo}
            //     Etapa do jogo:  Seme-Final
            //     Categoria:  1 
            //     Quantidade de Ingressos:  ${quantidade} 
            //     ---Valores--- 
            //     Valor do ingresso:  R$ 330
            //     Valor total:  ${quantidade * 330}`)                                                                                                                                    
    break                                      
    default:
        console.log("Não consta.")
    break
}