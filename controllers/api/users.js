const router = require('express').Router();
const { User } = require('../../models');


router.post('/signup', async (req, res) => {
    try{
        console.log(req.body)
        const userData = await User.create(req.body);
        req.session.save(() =>{
            req.session.user_id = userData.id;
            req.session.logged_In = true;
            res.status(200).json(userData);
        })
    }catch(err){ res.status(400).json(err);} 
});

router.post('/login', async (req, res) => {
    console.log('1');
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log('2');
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log('3');
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_In = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/logout', (req, res) => {
    console.log(req.session.logged_In)
    req.session.logged_in = false;
    if(req.session.logged_In){
        req.session.destroy(() => res.status(200).end());
        
    }else{ res.status(400).end()}
});

module.exports = router;