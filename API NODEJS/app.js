const express = require('express');
const app = express();
const sound = require('./api/router/sound');
const controlGate = require('./api/router/controlGate');
const getinfo = require('./api/router/getInfo');
app.use('/Getinfo',getinfo);
app.use('/Gate',controlGate);
app.use('/sound',sound);
module.exports = app;