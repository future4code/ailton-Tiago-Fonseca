// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0) 
    return numerosPares
    }


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0) 
    const numerosParesElevados = numerosPares.map(numero => numero ** 2)
    return numerosParesElevados
    }
   

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i=0; i<array.length; i++) {
      let elemento = array[i]
      if (elemento > maiorNumero) {
         maiorNumero = elemento
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const numeros = [num1,num2]
  let maiorNumero = Math.max(...numeros); 
  let maiorDivisivelPorMenor = maiorNumero / Math.min(...numeros) === 0;
  let diferenca = 
}
 }


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maiorNum = Math.max(...array);
  let comparador = array[0];
  for(let i = 0; i < array.length; i++) {
    if (array[i > comparador && array[i;] != maiorNum]) {
      comparador = array[i]
    }
  }
  return console.log(comparador);
}
retornaSegundoMaiorESegundoMenor([1,2,3,4,5]);

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}