```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    const quantidadeNumeros = arrayDeNumeros.map((numeroEscolhido)
    => {
      if (numeroEscolhido === 4){
        return `O número ${numeroEscolhido} parece ${quantidadeNumeros.length}x`
      }else if(numeroEscolhido === 3){
        return `Número não encotrado`
      }
    })
    }
```