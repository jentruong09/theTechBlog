const { User } = require('../models')

const userdata = [
    {
        username: 'jackjack',
        email: 'jack@email.com',
        password: '1234Password'
    },
    {
        username: 'bonbon',
        email: 'bon@email.com',
        password: '5678Password'
    },
    {
        username: 'mimi',
        email: 'mi@email.com',
        password: '2288Password'
    },
    {
        username: 'simon',
        email: 'sim@email.com',
        password: '7891Password'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;