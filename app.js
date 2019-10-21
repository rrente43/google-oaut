const express = require("express");
const app = express();
const authRoutes =require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

app.set('view engine','ejs');

//setting up routes
app.use('/auth', authRoutes);

app.get('/',(req,res) =>{
    res.render('home');
});
app.listen(3000, ()=> {
    console.log('app now listening for request on port 3000');
});