const router = require('express').Router();
const Home = require('../views/Home');
// const User = require('../db/models/User')

router.route('/')
  .get((req, res) => {
    res.renderComponent(Home, {
      userName: 'Nikita', themeOne: 'cat', themeTwo: 'krot', themeThree: 'scoth',
    });
  })
  .post(async (req, res) => {
    if (req.body.name && req.body.password) {
      const findLogin = await User.findOne({ where: { name: req.body.name } });
      if (!findLogin) {
        await User.create({
          name: req.body.name,
          password: req.body.password,
        });
      } 
    }
    res.renderComponent(Home, {
      userName: req.body.name, themeOne: 'cat', themeTwo: 'krot', themeThree: 'scoth',
    });
  });

module.exports = router;
