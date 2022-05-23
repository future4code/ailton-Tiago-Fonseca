/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const carta = comprarCarta(); 
    const carta1 = comprarCarta();
    const cartaComputador = comprarCarta();
 
    let usuario = carta.valor
    let computador = carta1.valor

   if(confirm(`Bem-vinde ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)) {

       confirm(`Suas cartãs são ${carta.texto} ${carta1.texto}. A carta revelada do computador é ${cartaComputador.texto}.
Deseja comparar uma carta? `)
    
   } else {
       confirm("O jogo acabou.")
    
   }

 

   // console.log(`Usuário - cartas: ${carta.texto}  - pontuação ${carta.valor}`)
   // console.log(`Computador - cartas: ${carta1.texto}  - pontuação ${carta1.valor}`)


   // if(usuario > computador) {
   //    console.log("O usuário ganhou!")

   // }else if(computador > usuario)  { 
   //    console.log("O computador ganhou!")

   // } else { 
   //    console.log("Empate!")
   // }






    