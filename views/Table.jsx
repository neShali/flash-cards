const React = require('react');
const Deck = require('./Deck');

function Table({ themeOne, themeTwo, themeThree }) {
  return (
    <div className="table" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
        <Deck theme={themeOne}/>
        <Deck theme={themeTwo}/>
        <Deck theme={themeThree}/>
    </div>
  )
}



module.exports = Table;