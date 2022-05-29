const User = require('./User');
const Post = require('./post');
const Comments = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.hasMany(Comments, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comments };