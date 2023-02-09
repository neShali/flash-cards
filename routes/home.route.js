const router = require('express').Router();
const Home = require('../views/Home');
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.renderComponent(Home, {
      userName: 'Nikita', themeOne: 'cat', themeTwo: 'krot', themeThree: 'scoth',
    });
  })
  .post(async (req, res) => {
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
    userName: name, themeOne: 'cat', themeTwo: 'krot', themeThree: 'scoth',
    });
  });

module.exports = router;
