const somar = array => array.length === 0 ? 0 : array[0] + somar(array.slice(1))

console.log(somar([2, 4, 6]))