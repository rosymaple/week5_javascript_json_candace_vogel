let user = { username: 'clara', password: 'zebra'}

for (let name in user) {
    console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])


let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'clara@minneapolis.edu'
console.log(user)
console.log(user.email)

// add another attribute = even though it's not defined in our object
user.email = 'zoe@zoe.com'

console.log(user.email)     // zoe@zoe.com




