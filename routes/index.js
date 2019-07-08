const express = require('express');
const router  = express.Router();
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', async (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const salt     = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)

  const users = await User.find({username})

   if(users.length !== 0){
     return res.render('auth/signup', {
       errorMessage: 'User already exists'
     })
   }

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  User.create({
    username,
    password: hashPass
  })
  .then(()=>{
    res.redirect('/')
  })
  .catch(()=>{
    console.log(error)
  })
})

module.exports = router;
