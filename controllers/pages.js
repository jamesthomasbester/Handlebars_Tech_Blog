const router = require('express').Router();

router.get('/', async (req, res) => {
    await req.session.save(() =>  {req.session.logged_In = false});
    
    res.render('dashboard', {
        logged_In: req.session.logged_In
    })
});
router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'))

module.exports = router;