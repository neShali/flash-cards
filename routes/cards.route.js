const router = require('express').Router();
const Home = require('../views/Home');
const Cards = require('../views/Cards')
const {
  User, Round, Deck, Card,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    const deck = await Deck.findOne({ raw: true, where: { theme: req.body.deck }, attributes: ['id'] });
    const cards = await Card.findAll({ raw: true, where: { deck_id: deck.id } });
    let j = req.body.counter;
    console.log(req.body);
    const answer = [];
    for(let i = 0; i < cards.length; i += 3) {
      let answerRight  = cards[i + 0].answer_r;
      let question = cards[i + 0].question;
      let answerOne = cards[i + 0].answer;
      let answerTwo = cards[i + 1].answer;
      let answerThree = cards[i + 2].answer;
     answer.push([answerRight, question, answerOne, answerTwo, answerThree]);
    }
    console.log(answer);
    res.renderComponent(Cards, {theme: req.body.deck, question: answer[j][1], answerOne: answer[j][2], answerTwo: answer[j][3], answerThree: answer[j][4]}, {doctype: false});
  });

module.exports = router;


// cards[j + i] = answer.push({cards[j + i].question: cards[j + i].answer_r: {}})