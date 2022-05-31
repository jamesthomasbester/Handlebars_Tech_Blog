const router = require('express').Router();
const moment = require('moment');
const { Post } = require('../../models')

router.get('/', (req, res) =>{
    res.status(200).json('working')
});

router.post('/', async (req, res) => {
    if(req.body){
        try{
            // const postData = await Post.create({
            //     post_title: req.body.post_title,
            //     post_body: req.body.post_body,
            //     post_time: moment().format('YYYY-MM-DD hh:mm:ss'),
            //     user_id: 1,
            // })
            res.status(200).json(moment().format('YYYY-MM-DD hh:mm:ss'));
        }catch(err){
            console.error(err);
        }
    }else{
        res.status(500).json('no body sent')
    }
})

module.exports = router;