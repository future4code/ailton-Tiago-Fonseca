// - **Exercício 1**
    
//     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
//     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

    const minhaString : string = "Mario"
    // R: Como foi pre definido um valor de string para a variavel, n pode ser colocado outro tipo, an ser q tiver uma Union Type com o tipo numero junto.
    
//     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
    
const meuNumero : number | string = 13
// R:Temos de usar o tipo Union Type onde podemos colocar mais de um tipo de valor associada.

//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.

enum CoresArcoIres {
    AZUL = "Azul",
    ROSA = "Rosa",
    AMARELO = "Amarelo",
    VERDE = "Verde"
}

type Pessoas = {
    nome : string , 
    idade : number,
    corFavorita : CoresArcoIres 
}

const novaPessoa : Pessoas = {
    nome : "Miguel" , 
    idade : 13,
    corFavorita : CoresArcoIres.AZUL
}
    
//     Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos 
// os objetos tenham os mesmos campos.
const pessoa1  : Pessoas = {
    nome : "Pedro" , 
    idade : 13,
    corFavorita : CoresArcoIres.VERDE
}


const pessoa2 : Pessoas = {
    nome : "Maria" , 
    idade : 15,
    corFavorita : CoresArcoIres.AMARELO
}


const pessoa3 : Pessoas = {
    nome : "Marta" , 
    idade : 15,
    corFavorita : CoresArcoIres.ROSA 
}
    console.table(pessoa1)
    console.table(pessoa2)
    console.table(pessoa3)
//     d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.



