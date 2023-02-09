const React = require('react');
const Layout = require('./Layout');

function Login({ }) {
  return (
    <Layout >
     <form method="post" action='login/name' className="inline">
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">NickName</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Go registration</button>
</form>
    </Layout >
  )
}

module.exports = Login;