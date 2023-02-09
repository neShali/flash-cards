const React = require('react');
const Layout = require('./Layout');

function Login({ }) {
  return (
    <Layout >
     <form method="post" action="/user" className="inline">
  <div className="mb-3">
    <label form="exampleInputEmail1" className="form-label">NickName</label>
    <input type="text" name="name" className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label form="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Go registration</button>
</form>
    </Layout >
  )
}

module.exports = Login;