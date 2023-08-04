const contador = array => {
    let itens = 0

    if (array.length === 0) {
        return itens
    }

    for (let i = 0; i < array.length; i++) {
        itens += 1
    }

    return itens
}

console.log(contador(['kiwi', 'uva', 'maçã']))