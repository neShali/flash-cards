const React = require('react');
const Layout = require('./Layout');
const Head = require('./Head');
const Table = require('./Table');

function Home({ userName, themeOne, themeTwo, themeThree }) {
  return (
    <Layout >
      <Head userName={userName} />
      <Table themeOne={themeOne} themeTwo={themeTwo} themeThree={themeThree} />

    </Layout >
  )
}

module.exports = Home;