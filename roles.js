let user = {
    name: 'clara',
    password: 'zebra',
    email: 'clara@dreamjob.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'M1234',
        telephone: '612123456',
    }
}

user.salary = 12345
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)