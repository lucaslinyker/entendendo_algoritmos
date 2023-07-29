def regressiva(i):
    print(i)
    if i == 1: #1
        return
    else: #2
        regressiva(i - 1)

print(regressiva(5))

#1 Caso-base.
#2 Caso recursivo.