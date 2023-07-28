def buscaMenor(arr):
    menor = arr[0]
    menor_índice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_índice = i
    return menor_índice

def ordenaçãoPorSeleção(arr):
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenor(arr)
        novoArr.append(arr.pop(menor))
    return novoArr

print(ordenaçãoPorSeleção([5, 3, 6, 2, 10]))