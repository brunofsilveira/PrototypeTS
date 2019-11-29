import Gato from './Gato'
import Cachorro from './Cachorro'

let cachorroChico = new Cachorro('Chico', 'médio', 5)

console.log('### Cachorro ###')
console.log(cachorroChico.anda)
console.log(cachorroChico.come)
console.log(cachorroChico.fazBarulho)
console.log(cachorroChico.toString)

let gatoJose = new Gato('José', 'pequeno', 3)

console.log('### Gato ###')
console.log(gatoJose.anda)
console.log(gatoJose.come)
console.log(gatoJose.fazBarulho)
console.log(gatoJose.toString)
