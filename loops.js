let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

// this way of programming a function uses less typing
birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})

// traditional for loop
for ( let x = 0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}


