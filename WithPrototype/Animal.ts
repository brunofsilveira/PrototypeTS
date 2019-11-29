export default interface Animal {
    nome: string
    tamanho: string
    idade: number

    fazBarulho(): string
    anda(): string
    come(): string
    toString(): string
}