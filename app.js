require('@babel/register');
const express = require('express');

const app = express();
const config = require('./config/config');
const mainRouter = require('./routes/main.route')

const PORT = process.env.PORT ?? 3000;

config(app);

// Маршрутизация
app.use('/', mainRouter)


// Listener
app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});