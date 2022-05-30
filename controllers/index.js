const router = require('express').Router();
const dashboard = require('./dashboard.js');
const api = require('./api');

router.use('/', dashboard);
router.use('/api', api)

module.exports = router;