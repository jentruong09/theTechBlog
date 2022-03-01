const { Post } = require('../models')

const postdata = [
    {
        title: 'New MacBook M1',
        post: 'This is a random post 1.',
        user_id: 1
    },
    {
        title: 'Mics',
        post: 'This is a random post 2.',
        user_id: 2
    },
    {
        title: 'Headphone Ratings',
        post: 'This is a random post 3.',
        user_id: 3
    },
    {
        title: 'Node.js hacks',
        post: 'This is a random post 4.',
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;