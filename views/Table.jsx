const React = require('react');
const Deck = require('./Deck');

function Table({ themeOne, themeTwo, themeThree }) {
  return (
    <div id="table" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh',
      width: '75%',
      margin: 'auto',
    }}>
        <Deck theme={themeOne}/>
        <Deck theme={themeTwo}/>
        <Deck theme={themeThree}/>
    </div>
  )
}



module.exports = Table;