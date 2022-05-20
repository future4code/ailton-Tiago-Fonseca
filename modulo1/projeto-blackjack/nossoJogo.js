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

   if(confirm("Quer iniciar uma nova rodada?")) {

       console.log("Boas vindas ao jogo de Blackjack!")
    
   } else {
       console.log("O jogo acabou")
    
   }

   const carta = comprarCarta(); 
   let usuario = carta.valor
   let computador = carta.valor

   console.log(`Usuário - cartas: ${carta.texto}  - pontuação ${carta.valor}`)
   console.log(`Computador - cartas: ${carta.texto}  - pontuação ${carta.valor}`)


   if(usuario > computador) {
      console.log("O usuário ganhou!")

   }else if(computador > usuario)  { 
      console.log("O computador ganhou!")

   } else { 
      console.log("Empate!")
   }






    