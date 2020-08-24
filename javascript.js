let dog = {
  name: 'doki',
  age: 11,
  vacuna: true,
  colors: 'yellow'
}
// mutavilidad y copiado de objetos
let otherdog = dog

let dog2 = Object.assign({},dog) => // sirve para no alterar el objeto original
dog2.orejas = 'largas'
console.log(dog)
