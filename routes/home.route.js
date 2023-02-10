const router = require('express').Router();
const Home = require('../views/Home');
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const themes = await Deck.findAll({ raw: true, attributes: ['theme'] });
    const theme = themes.map((el) => el.theme);
    res.renderComponent(Home, {
      userName: '', themeOne: theme[0], themeTwo: theme[1], themeThree: theme[2],
    });
  })
  
module.exports = router;
