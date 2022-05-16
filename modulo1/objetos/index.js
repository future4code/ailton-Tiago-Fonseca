// Exercícios de interpretação de código

// 1.
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) Matheus Nachtergaele      Virginia Cavendish       canal: "Globo", horario: "14h"

// 2.
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
// nome: "Juca",   idade: 3,   raca: "SRD"
// nome: "Juba",   idade: 3,   raca: "SRD"
// nome: "Jubo",   idade: 3,   raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// clona as informações dadas pelo objeto marcado. 

// 3.
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// false    undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// foi impresso false pois era a informação contida e "backender"  undefined porque não há nenhuma informação associada a "altura".

// Exercícios de escrita de código

// 1.
// a)
    const pessoaa = {
         nome: 'Keyla',
         apelidos: ['Keke','Key','Keylinha']
}

    function minhaFuncao(obj) {
        const nomeEApelido = {
            ...obj,
            nome: "Keyla",
            apelidos: ['Keke','Key','Keylinha']
            
        }

        console.log(`Eu sou ${nomeEApelido.nome}, mas pode me chamar de: ${nomeEApelido.apelidos[0]},
         ${nomeEApelido.apelidos[1]} ou ${nomeEApelido.apelidos[2]}`)
    }
    minhaFuncao(pessoaa);

    // b)
    // Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
    // mas com uma nova lista de três apelidos.
    //  Depois, chame a função feita no item anterior passando como argumento o novo objeto
    const novosApelidos = {
        ...pessoaa,
        apelidos: ["Keyl","Ke","KeKa"]
        
    }
    console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos[0]},
    ${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]}`)

    // 2.
    // a) Crie dois objetos 
    // diferentes com as seguintes propriedades: nome, idade e profissão.
    const pessoa1 = {
        nome: "Mario",
        idade: 40 ,
        profissao: "Advogado"
    }
    const pessoa2 = {
        nome: "José",
        idade: 42 ,
        profissao: "Médico"
    }

    // b)
    function resultado (nome){
        return([nome.nome, nome.nome.length, nome.idade, nome.profissao, nome.profissao.length])
        }
    
        resultado(pessoa1)
        resultado(pessoa2)

    // 3.
    // a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    const carrinho = []
    // b) Crie três novos objetos que representem frutas de um sacolão.
    //  Eles devem ter as seguintes propriedades: nome (string) e disponibilidade 
    //  (boolean - devem começar como true)
    const obj1 = {
        fruta: "melão",
        disponivel: true
    }
    const obj2 = {
        fruta: "abacaxi",
        disponivel: true
    }
    const obj3 = {
        fruta: "maçã",
        disponivel: true
    }
    // c) Crie uma função que receba um objeto fruta por parâmetro e
    // coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
    function receber (array){
        console.log(carrinho.push(obj1), carrinho.push(obj2),carrinho.push(obj3))
    }

    receber(carrinho)
    // d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
    console.log(carrinho)

    // Desafios

    // 1.Crie um função que pergunte ao usuário seu nome,
    // sua idade e sua profissão e depois imprima no console um objeto com essas propriedades.
    // Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

    // const nome = prompt("Qual é o seu nome?")
    // const idade = prompt("Qual é a sua idade?")
    // const profissao = prompt("Qual é a sua profissão?")

    // function receber (nome,idade,profissao)
    // console.log(nome,idade,profissao)

    // const novoObj = {
    //     nome: nome,
    //     idade: idade,
    //     profissao: profissao
    // }
    // console.log(novoObj)

//    2. Crie uma função que receba dois objetos que representam filmes.
//    Eles devem ter as propriedades: ano de lançamento e nome.
//    A função deve retornar uma mensagem no seguinte modelo:
const filme1 = {
    nome: "As Panteras",
    ano: 2004
}
const filme2 = {
    nome: "As Panteras Detonando",
    ano: 2006
}

function comparar(filmeAno1,filmeAno2){
    const antes = filmeAno1.ano < filmeAno2.ano
    const mesmo = filmeAno1.ano === filmeAno2.ano
    const pergunta1 = "O primeiro filme foi lançado antes do segundo?"
    const pergunta2 = "O primeiro filme foi lançado no mesmo ano do segundo?"
    console.log(pergunta1 + antes)
    console.log(pergunta2 + mesmo)

}
comparar (filme1,filme2)

// 3. Crie uma função a mais pro exercício 3 de escrita de código.
// Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber
// por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade
// disponibilidade com o valor invertido. 

