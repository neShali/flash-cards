const router = require('express').Router();
const Home = require('../views/Home');

router.route('/')
  .get((req, res) => {
    res.renderComponent(Home, {
      userName: 'Nikita', themeOne: 'cat', themeTwo: 'krot', themeThree: 'scoth',
    });
  });

module.exports = router;
