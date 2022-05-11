// Exercícios de interpretação de código

// 1.
// let array
// console.log('a. ', array)
// // R:undefined
// array = null
// console.log('b. ', array)
// // R: null
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // R:11
// let i = 0
// console.log('d. ', array[i])
// // R: 3
// array[i+1] = 19
// console.log('e. ', array)
// // R:[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const valor = array[i+6]
// console.log('f. ', valor)
// // R: 9

// 2.   

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // R: SUBI NUM ÔNIBUS EM MIRROCOS 27 

// Exercícios de escrita de código

// 1.
    // const nome = prompt("Qual o seu nome?")
    // const email = prompt("Qual o seu e-mail?")
    // console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)

// 2.

// const comidas = ["Lasanha", "Chocolate", "Bolo", "Supremo", "Frango"]
    
//     // a)
//     console.log(comidas)
//     // b) 
//     console.log(`Essas são as minhas comidas preferidas:
//     ${comidas[0]}
//     ${comidas[1]}
//     ${comidas[2]}
//     ${comidas[3]}
//     ${comidas[4]} `)
//     // c)
//  comidas[1] = prompt("Qual sua comida preferida?")
//  console.log(comidas)

// 3. 
    
    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//    let array
//     let listaDeTarefas = array
    
//     // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//     let listaDeTarefasUsuario1 = prompt("Isira uma Tarefa diária.")
//     let listaDeTarefasUsuario2 = prompt("Isira outra Tarefa diária.")
//     let listaDeTarefasUsuario3 = prompt("Isira mais uma Tarefa diária.")
//     array = [listaDeTarefasUsuario1 , listaDeTarefasUsuario2 , listaDeTarefasUsuario3]

//     // c) Imprima o array no console
//     console.log(array)

//     // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//     let tarefaRealizada = prompt("Qual a tafera que já realizou em índice?")

//     // e) Remova da lista o item de índice que o usuário escolheu.
//     array.splice(0,tarefaRealizada)
    
//     // f) Imprima o array no console
//     console.log(array)

// Desafio

// 1.
// frase = ("Eu como pão todos os dias")
// let array = frase.trim()
// console.log(array)

// 2.
// array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// array.splice(2,1)
// console.log(array)
// console.log(array.length)