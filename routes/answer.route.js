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
    let obj = {
      score: 0,
      status: false,
    }
    const { idAnswer, resultScore } = req.body;
    // const counter = await req.body.counter;
    const answer = [];
    for(let i = 0; i < cards.length; i += 3) {
      let answerRight  = cards[i + 0].answer_r;
      let question = cards[i + 0].question;
      let answerOne = cards[i + 0].answer;
      let answerTwo = cards[i + 1].answer;
      let answerThree = cards[i + 2].answer;
     answer.push([answerRight, question, answerOne, answerTwo, answerThree]);
    }
    console.log(resultScore);
    answer.forEach(el => {
     if (el[0] === idAnswer) {
      obj.score = 1;
      obj.status = true;
     }
    })
    res.json(obj);
  });

module.exports = router;