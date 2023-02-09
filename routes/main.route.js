const router = require('express').Router();

Router.route('/')
  .get((req, res) => {
    res.redirect('/home');
  });

  module.exports = router