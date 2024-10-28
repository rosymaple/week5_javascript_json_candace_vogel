// let animals = ['lion', 'tiger', 'cheetah', 'walrus', 'zebra']
//
// animals.forEach( function (animal) {
//     console.log(animal.length)
//     let animalLength = animal.length;
//     console.log(animalLength)
// })
//
// console.log(animals.join(' * '))

animals.push('alligator')

let animalNameLength = []

animals.forEach(function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)
