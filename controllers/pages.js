const router = require('express').Router();
const { Post, User, Comments } = require('../models');

router.get('/', async (req, res) => {
    const posts = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            },
            {
                model: Comments,
                attributes: ['comment_body', 'comment_time', 'user_id'],
                include: [
                    {
                        model: User,
                        attributes: ['name']
                    }
                ]
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

router.get('/dashboard/:id', async (req, res) => {
    const profileData = await Post.findAll({ 
        where: { user_id: req.params.id},
        include: [
            {
                model: User,
                attributes: ['name']
            },
            {
                model: Comments,
                attributes: ['comment_body', 'comment_time', 'user_id'],
                include: [
                    {
                        model: User,
                        attributes: ['name']
                    }
                ]
            }
        ]
    })
    const profile = profileData.map((element) => element.get({plain: true}))
    res.render('profile', {
        profile,
        logged_In: req.session.logged_In
    })
})

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'))

module.exports = router;