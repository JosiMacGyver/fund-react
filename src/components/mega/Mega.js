
function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio)
        ?
        gerarNumeroNaoContido(min, max, array)
        :
        aleatorio
}

function gerarNumero(qtd) {
    //array de 0s com a qtd de numeros
    const numeros = Array(qtd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return [... nums], novoNumero
        }, [])

    return numeros
}


console.log(gerarNumero(7))