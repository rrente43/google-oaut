const router = require('express').Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout', (req,res)=>{
    //handle with passport
    res.send("logging out");
});
//auth google
router.get('/google',(req,res)=>{
    //handle with passport
    res.send('loggin with google');
});
module.exports = router;