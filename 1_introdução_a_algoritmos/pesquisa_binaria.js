function pesquisa_binaria(lista, item) {
    etapa = 0
    var baixo = 0
    var alto = lista.length - 1

    while (baixo <= alto) {
        etapa += 1
        let meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]

        if (chute == item) {
            return meio
        } else if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
    }

    return null
}

var etapa
const minha_lista = [1, 3, 5, 7, 9]
console.log(Math.log2(5))
console.log(Math.log2(4_000_000_000))

console.log(pesquisa_binaria(minha_lista, 3), `Etapas: ${etapa}`)
console.log(pesquisa_binaria(minha_lista, 7), `Etapas: ${etapa}`)
console.log(pesquisa_binaria(minha_lista, 0), `Etapas: ${etapa}`)