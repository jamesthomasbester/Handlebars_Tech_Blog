const router = require('express').Router();
const moment = require('moment');
const { Post } = require('../../models')

router.get('/', (req, res) =>{
    res.status(200).json('working')
});

router.post('/', async (req, res) => {
    if(req.session.logged_In){
        if(req.body){
            try{
                const postData = Post.create({ 
                    post_title: req.body.title,
                    post_body: req.body.body,
                    user_id: req.session.user_id,
                    post_time: moment().format('YYYY-MM-DD hh:mm:ss')
                 })
                res.status(200).json(postData);
            }catch(err){
                console.error(err);
            }
        }else{
            res.status(500).json('no body sent')
        }
    }else{
        res.status(400).json('please login')
    }

})

module.exports = router;