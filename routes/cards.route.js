const router = require('express').Router();
const Home = require('../views/Home');
const Cards = require('../views/Cards')
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const deck = await Deck.findOne({ raw: true, where: { theme: req.body.deck }, attributes: ['id'] });
    const cards = await Card.findAll({ raw: true, where: { deck_id: deck.id } });
    console.log(cards);

    res.renderComponent(Cards, { }, {doctype: false});
  });

module.exports = router;
