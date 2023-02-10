const router = require('express').Router();
const Home = require('../views/Home');
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const themes = await Deck.findAll({ raw: true, attributes: ['theme'] });
    const theme = themes.map((el) => el.theme);
    const { name, password } = req.body;
    if (name && password) {
      const findLogin = await User.findOne({ where: { name } });
      if (!findLogin) {
        await User.create({
          name,
          password,
        });
      }
    }
    await res.renderComponent(Home, {
      userName: name, themeOne: theme[0], themeTwo: theme[1], themeThree: theme[2],
    });
  });

module.exports = router;
