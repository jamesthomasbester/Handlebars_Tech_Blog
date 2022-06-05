const router = require('express').Router();

const list = ['1', '2']

router.get('/', async (req, res) => {
    console.log(req.session.logged_In)
    await req.session.save(() =>  {});
    res.render('dashboard', {
        logged_In: req.session.logged_In,
        list: list
    })
});

router.get('/dashboard', (req, res) => {
    res.render('profile', )
})

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'))

module.exports = router;