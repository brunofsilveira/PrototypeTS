class Cachorro {
    nome: string
    tamanho: string
    idade: number

    constructor(nome: string, tamanho: string, idade: number) {
        this.nome = nome
        this.tamanho = tamanho
        this.idade = idade
    }

    late(): string {
        return 'Au au!'
    }

    corre(): string {
        return 'Andando como cachorro!'
    }

    come(): string {
        return 'Comendo como cachorro!'
    }

    toString(): string {
        return `Meu nome é ${this.nome}, sou um cachorro de porte ${this.tamanho} e tenho ${this.idade} anos!`
    }
}

class Gato {
    nome: string
    tamanho: string
    idade: number

    constructor(nome: string, tamanho: string, idade: number) {
        this.nome = nome
        this.tamanho = tamanho
        this.idade = idade
    }

    mia(): string {
        return 'Miau!'
    }

    caminha(): string {
        return 'Andando como gato!'
    }

    alimenta(): string {
        return 'Comendo como gato!'
    }

    toString(): string {
        return `Meu nome é ${this.nome}, sou um gato de porte ${this.tamanho} e tenho ${this.idade} anos!`
    }
}

let cachorroChico = new Cachorro('Chico', 'médio', 5)

console.log('### Cachorro ###')
console.log(cachorroChico.late)
console.log(cachorroChico.come)
console.log(cachorroChico.corre)
console.log(cachorroChico.toString)

let gatoJose = new Gato('José', 'pequeno', 3)

console.log('### Gato ###')
console.log(gatoJose.caminha)
console.log(gatoJose.alimenta)
console.log(gatoJose.mia)
console.log(gatoJose.toString)
