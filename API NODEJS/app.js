const express = require('express');
const app = express();
const sound = require('./api/router/sound');
app.use('/sound',sound);
module.exports = app;