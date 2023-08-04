const somar = array => {
    var soma = 0
    
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }

    return soma
}

console.log(somar([2, 4, 6]))