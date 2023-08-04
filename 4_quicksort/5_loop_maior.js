const maior = array => {
    let maior = 0

    if (array.length === 0) return maior

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior
}

console.log(maior([1, 0, 3, 5]))