const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (res, req) => {
    res.status(200).json('sucess');
});

router.post('/', (res, req) => {
    res.status(200).json('sucess')
})