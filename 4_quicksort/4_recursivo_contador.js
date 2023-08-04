const contador = (arr, count = 0) => {
    if (count == arr.length) {
        return 0
    } else {
        return 1 + contador(arr.slice(1))
    }
}

console.log(contador(['uva', 'kiwi', 'maçã']))