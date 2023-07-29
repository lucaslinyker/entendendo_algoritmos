def buscaMenor(arr):
    menor = arr[0] #1
    menor_índice = 0 #2
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_índice = i
    return menor_índice

#1 Armazena o menor valor.
#2 Armazena o índice do menor valor.

def ordenaçãoPorSeleção(arr): #1
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenor(arr) #2
        novoArr.append(arr.pop(menor))
    return novoArr

print(ordenaçãoPorSeleção([5, 3, 6, 2, 10]))

#1 Ordenações em um array.
#2 Encontra o menor elemento do array e adiciona ao novo array.