require('@babel/register');
const express = require('express');

const app = express();
const config = require('./config/config');
const mainRouter = require('./routes/main.route');
const homeRouter = require('./routes/home.route');
const loginRouter = require('./routes/login.route');

const PORT = process.env.PORT ?? 3000;

config(app);

// Маршрутизация
app.use('/', mainRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);

// Listener
app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});