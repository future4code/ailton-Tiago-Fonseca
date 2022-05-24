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
    const cartaComputador1 = comprarCarta();
 
      //  let usuario = (carta.valor) + (carta1.valor)
   let somaUsuario = 0
   let somaComputador = 0
   
   let sorteioCartas = comprarCarta().valor
   for (let somaUsuario = 0; somaUsuario <= 21; somaUsuario++) {
      somaUsuario = sorteioCartas 
   }

   for (let somaComputador = 0; somaComputador <= 21; somaUsuario++) {
      somaComputador = sorteioCartas 
   }

   // if(somaUsuario <= 21 || somaComputador >21) {
   //    const resultado1 = "O usuário ganhou!"

   // }else if (somaUsuario === somaComputador) {
   //    const resultado2 = "Empate!"

   // }else if (somaUsuario > 21 || somaComputador < 21) {
   //    const resultado3 = "O computador ganhou!"
   // }

   if(confirm(`Bem-vinde ao jogo de Blackjack!
Quer iniciar uma nova rodada?`) ) {

       confirm(`Suas cartãs são ${carta.texto} ${carta1.texto}. A carta revelada do computador é ${cartaComputador.texto}.
Deseja comparar mais uma carta? `)
    
   } else if (( carta.texto && carta1.texto && cartaComputador.texto && cartaComputador1.texto === "A")) {
      
       confirm("É preciso trocar as cartas.")
    
   } else if ("Cancel") {
         confirm("O jogo acabou.")
      }

   // if (usuario <= 21) {
   //    confirm(`Suas cartãs são ${carta.texto} ${carta1.texto}. A carta revelada do computador é ${cartaComputador.texto}.
   //    Deseja comparar mais uma carta? `)
   // }
 
   // console.log(`Usuário - cartas: ${carta.texto}  - pontuação ${carta.valor}`)
   // console.log(`Computador - cartas: ${carta1.texto}  - pontuação ${carta1.valor}`)


   // if(usuario > computador) {
   //    console.log("O usuário ganhou!")

   // }else if(computador > usuario)  { 
   //    console.log("O computador ganhou!")

   // } else { 
   //    console.log("Empate!")
   // }






    