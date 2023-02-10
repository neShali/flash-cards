const React = require('react');

function Deck({ theme }) {
  return (
    <div className="card" style={{width: '18rem'}} data = {theme}>
    <div style = {{height: '170px', overflow: 'hidden'}}>
    <img src={`/img/${theme}.jpg`} className="card-img-top" alt={theme} />
    </div>
    <div className="card-body">
    <h5 className="card-title">{theme}</h5>
    <p className="card-text">Хочешь сыграть в квиз на тему: {theme}? Клацай на кнопку ниже!</p>
    <button type="submit" className="btn btn-primary chooseDeck" data = {theme}>Начать ебанутый опрос</button>
    </div>
    </div>
  )
}
 
module.exports = Deck;