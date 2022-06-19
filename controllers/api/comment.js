const router = require('express').Router();
const moment = require('moment');
const { Post, Comments } = require('../../models')

router.get('/', (req, res) =>{
    res.status(200).json('working')
});

router.post('/:id', async (req, res) => {
    if(req.session.logged_In){
        if(req.body){
            try{
                const commentData = Comments.create({ 
                    comment_body: req.body.comment_body,
                    post_id: req.params.id,
                    user_id: req.session.user_id,
                    comment_time: moment().format('YYYY-MM-DD hh:mm:ss')
                 })
                res.status(200).json(commentData);
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