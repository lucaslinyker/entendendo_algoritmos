function minorSearch(array) {
    let low = array[0]
    let index = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < low) {
            low = array[i]
            index = i
        }
    }

    return index
}

function sortBySelection(array) {
    let newArray = []
    let cont = array.length

    for (let i = 0; i < cont; i++) {
        let index = minorSearch(array)
        newArray.push(array[index])
        array.splice(index, 1)
    }

    return newArray
}

console.log(sortBySelection([5, 3, 6, 2, 10]))