const router = require('express').Router();
const posts = require('./posts');
const users = require('./users');
const comments = require('./comment');

router.use('/posts', posts);
router.use('/users', users);
router.use('/comments', comments);

module.exports = router;