const router = require('express').Router();
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
            //     post_time: Date.now,
            //     user_id: 1,
            // })
            res.status(200).json(Date.now);
        }catch(err){
            console.log(err);
        }
    }else{
        res.status(500).json('no body sent')
    }
})

module.exports = router;