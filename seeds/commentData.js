const { Comment } = require('../models')

const commentdata = [
    {
        comment: 'nice!',
        post_id: 1,
        user_id: 1
    },
    {
        comment: 'thank you!',
        post_id: 2,
        user_id: 2
    },
    {
        comment: 'get the newest one.',
        post_id: 3,
        user_id: 3
    },
    {
        comment: 'great post!',
        post_id: 4,
        user_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;