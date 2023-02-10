const React = require('react');

function Cards({ theme, question, answerOne, answerTwo, answerThree }) {
  return (
  <div className="card mb-3" style={{maxWidth: '540px', margin: '-7em auto 0 !important'}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`/img/${theme}.jpg`} className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text" style={{paddingLeft: '1.5em', boxSizing: 'border-box'}}>{question}</p>
        <ul className="list-group list-group-flush" data={theme}>
            <li className="list-group-item"><button type="button" id={answerOne} className="btn btn-outline-primary answerButton">{answerOne}</button></li>
            <li className="list-group-item"><button type="button" id={answerTwo} className="btn btn-outline-primary answerButton">{answerTwo}</button></li>
            <li className="list-group-item"><button type="button" id={answerThree} className="btn btn-outline-primary answerButton">{answerThree}</button></li>
        </ul>
      </div>
    </div>
  </div>
    </div>
    )
}
 
module.exports = Cards;