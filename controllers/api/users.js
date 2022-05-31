const router = require('express').Router();
const res = require('express/lib/response');
const { User } = require('../../models');

router.get('/', (res, req) => {
    res.status(200).json('sucess');
});

router.post('/', (res, req) => {
    res.status(200).json('sucess')
})