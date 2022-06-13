const router = require('express').Router();
const { Post, User } = require('../models');

const list = ['1', '2']

router.get('/', async (req, res) => {
    const posts = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
    const handlePosts = posts.map((element) => element.get({ plain: true }))
    await req.session.save(() =>  {});
    console.log(handlePosts)
    res.render('dashboard', {
        logged_In: req.session.logged_In,
        post: handlePosts,
    })
});

router.get('/dashboard', (req, res) => {
    res.render('profile', )
})

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'))

module.exports = router;