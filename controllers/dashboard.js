const router = require('express').Router();
const { User , Post, Comments} = require('../models');

router.get('/', async (req, res) => {
    res.render('dashboard');
});

module.exports = router;