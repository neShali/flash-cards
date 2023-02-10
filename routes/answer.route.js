// const router = require('express').Router();
// const Home = require('../views/Home');
// const Cards = require('../views/Cards')
// const {
//   User, Round, Deck, Card,
// } = require('../db/models');

// router.route('/')
//   .post(async (req, res) => {
//     // const deck = await Deck.findOne({ raw: true, where: { theme: req.body.deck }, attributes: ['id'] });
//     // const cards = await Card.findAll({ raw: true, where: { deck_id: deck.id } });
//     const counter = await req.body.counter;
//     console.log(counter);
//     const answer = [];
//     for(let i = 0; i < cards.length; i += 3) {
//       let answerRight  = cards[i + 0].answer_r;
//       let question = cards[i + 0].question;
//       let answerOne = cards[i + 0].answer;
//       let answerTwo = cards[i + 1].answer;
//       let answerThree = cards[i + 2].answer;
//      answer.push([answerRight, question, answerOne, answerTwo, answerThree]);
//     }
//     res.renderComponent(Cards, {theme: req.body.deck, question: answer[0][1], answerOne: answer[0][2], answerTwo: answer[0][3], answerThree: answer[0][4]}, {doctype: false});
//   });

// module.exports = router;