const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/application.js"></script>
        <title>flash-cards</title>
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}

module.exports = Layout;