function cityStateAddress(city, state) {
    // let address = city + ', ' + state.toUpperCase()
    let address = `${city}, ${state.toUpperCase()}`    // mn --> MN
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)

function isMinnesotaZip(code) {
    // all MN zip codes are between 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(65763))
console.log(isMinnesotaZip(-1))


function validGPA(gpa) {
    // if (gpa >= 0 && gpa <= 4) {
    //     return true
    // }
    // else {
    //     return false
    // }
    return gpa >= 0 && gpa <= 4
}

console.log(validGPA(5))
console.log(validGPA(3))
