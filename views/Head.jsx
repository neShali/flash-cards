const React = require('react');

function Head({ userName }) {
  return (
    <div className="card" style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100vh',
      }} >
        {userName ? (<>
            <span>{userName}</span>
            <span>home</span>
            <span>logOut</span>
            </>
        ) : (
            <>
            <span>login</span>
            <span>home</span>
            </>
        )
    }
    </div>
  )
}

module.exports = Head;