const React = require('react');

function Deck({ theme }) {
  return (
    <div className="card" style="width: 18rem;" id = {theme}>
    <img src={`/img/${theme}`} className="card-img-top" alt={theme} />
    <div className="card-body">
    <h5 className="card-title">{theme}</h5>
    <p className="card-text">Хочешь сыграть в квиз на тему: {theme}? Клацай на кнопку ниже!</p>
    <button type="submit" className="btn btn-primary" id = {theme}>Начать ебанутый опрос</button>
    </div>
    </div>
  )
}

module.exports = Deck;