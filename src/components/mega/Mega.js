//gera um número aleatório e adiciona no array se ele já não estiver contido
function gerarNumeroNaoContido(min, max, array) {
    //num aleatório, se ele estiver no array, gera outro, se não, adiciona ele mesmo.
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
}

function gerarNumeros(qtde) {
    const numeros = Array(qtde)
    //constroi um array com zeros
        .fill(0)  
        //opera no reduce para adicionar numero
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        //ordena em ordem crescente
        .sort((n1, n2) => n1 - n2)
    return numeros
}
