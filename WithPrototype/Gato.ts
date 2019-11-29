import Animal from './Animal'

export default class Gato implements Animal {
    nome: string
    tamanho: string
    idade: number

    constructor(nome: string, tamanho: string, idade: number) {
        this.nome = nome
        this.tamanho = tamanho
        this.idade = idade
    }

    fazBarulho(): string {
        return 'Miau!'
    }

    anda(): string {
        return 'Andando como gato!'
    }

    come(): string {
        return 'Comendo como gato!'
    }

    toString(): string {
        return `Meu nome é ${this.nome}, sou um gato de porte ${this.tamanho} e tenho ${this.idade} anos!`
    }
}