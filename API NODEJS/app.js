const express = require('express');
const app = express();
const sound = require('./api/router/sound');
const controlGate = require('./api/router/controlGate');
app.use('/Gate',controlGate);
app.use('/sound',sound);
module.exports = app;