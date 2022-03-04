const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');


// Comment belongTo Posts
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// Comment belongTo Users
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Post have many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Post belongTo Users
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Users have many Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Users have many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});


module.exports = {Comment, Post, User}