const React = require('react');

function Cards({ theme, question, answerOne, answerTwo, answerThree }) {
  return (
  <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`/img/${theme}.jpg`} className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">{question}</p>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><button type="button" id="1" className="btn btn-outline-primary">{answerOne}</button></li>
            <li className="list-group-item"><button type="button" id="2" className="btn btn-outline-primary">{answerTwo}</button></li>
            <li className="list-group-item"><button type="button" id="3" className="btn btn-outline-primary">{answerThree}</button></li>
        </ul>
      </div>
    </div>
  </div>
    </div>
    )
}

module.exports = Cards;