const router = require('express').Router();
const Login = require('../views/Login')
router.route('/')
  .get((req, res) => {
  res.renderComponent(Login, {});
  });

  module.exports = router;