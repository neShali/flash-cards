const router = require('express').Router();
const Home = require('../views/Home');
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const deck = await Deck.findOne({ raw: true, where: { theme: req.body.deck }, attributes: ['id'] });
    const cards = await Card.findAll({ raw: true, where: { deck_id: deck.id } });
    console.log(cards);

    res.json();
  });

module.exports = router;
