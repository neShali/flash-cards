const React = require('react');

function Head({ userName }) {
  return (
    <div  className="container px-4 text-center mt-5" style={{
      display: 'inline-flex',
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'center',
    }} >
        {userName ? (<>
            <a href="#" style={{textDecoration: 'none', marginLeft: '10px'}} >{userName}</a>
            <a href="#" style={{textDecoration: 'none', marginLeft: '10px'}} >home</a>
            <a href="/home" style={{textDecoration: 'none', marginLeft: '10px'}} >logOut</a>
            </>
        ) : (
            <>
            <a href="/login" style={{textDecoration: 'none', marginLeft: '10px'}} >login</a>
            <a href="/home" style={{textDecoration: 'none', marginLeft: '10px'}} >home</a>
            </>
        )
    }
    </div>
  )
}



module.exports = Head;