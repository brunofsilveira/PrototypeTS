import Animal from './Animal'

export default class Cachorro implements Animal {
    nome: string
    tamanho: string
    idade: number

    constructor(nome: string, tamanho: string, idade: number) {
        this.nome = nome
        this.tamanho = tamanho
        this.idade = idade
    }

    fazBarulho(): string {
        return 'Au au!'
    }

    anda(): string {
        return 'Andando como cachorro!'
    }

    come(): string {
        return 'Comendo como cachorro!'
    }

    toString(): string {
        return `Meu nome é ${this.nome}, sou um cachorro de porte ${this.tamanho} e tenho ${this.idade} anos!`
    }
}