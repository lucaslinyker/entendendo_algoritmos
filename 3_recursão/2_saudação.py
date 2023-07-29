def sauda2(nome):
    print('Como vai ' + nome + '?')

def tchau():
    print('Ok, tchau!')

def sauda(nome):
    print('Olá, ' + nome + '!')
    sauda2(nome)
    print('Preparando para dizer tchau...')
    tchau()

print(sauda('Lucas Linyker'))