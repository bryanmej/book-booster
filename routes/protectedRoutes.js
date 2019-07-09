const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login")
const Book = require('../models/Book')

//Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

//Profile
router.get('/profile', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('protected/profile', { user: req.user})
})

router.post('/profile', (req, res, next) => {
  const { title, author, review, rating, image } = req.body;
  const newBook = new Book({ title, author, review, rating, image})
  newBook.save()
  .then((book) => {
    res.redirect('/library');
  })
  .catch((error) => {
    console.log(error);
  })
})

//Library
router.get('/library', ensureLogin.ensureLoggedIn(), (req, res) => {
  Book.find()
    .then(allTheBooksFromDB => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('protected/library', { books: allTheBooksFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
})

module.exports = router;