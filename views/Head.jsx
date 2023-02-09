const React = require('react');

function Head({ userName }) {
  return (
    <div className="card" style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }} >
        {userName ? (<>
            <span>{userName}</span>
            <a href="/user" style={{textDecoration: 'none'}} >home</a>
            <a href="/home" style={{textDecoration: 'none'}} >logOut</a>
            </>
        ) : (
            <>
            <a href="/login" style={{textDecoration: 'none'}} >login</a>
            <a href="/home" style={{textDecoration: 'none'}} >home</a>
            </>
        )
    }
    </div>
  )
}



module.exports = Head;