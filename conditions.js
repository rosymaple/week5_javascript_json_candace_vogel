// pre-requisites for Android Programming - C# or Java

let takenCSharp = false
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites.')
} else {
    console.log('You must take C# or Java.')
}

// to be a senator, there are 3 requirements:
// you must be at least 30 years old
// you must have been a US citizen for 9 or more years
// you must live in the state you want to represent

let age = 40
let usCitizenTime = 3
let stateOfResidence = 'Minnesota'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('You are eligible to run for senator.')
} else {
    console.log('Sorry, you are not eligible')
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
if (undefined === 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}

