const router = require('express').Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout')
//auth google
router.ger('/google',(req,res)=>{
    //handle with passport
    res.send('loggin with google');
});