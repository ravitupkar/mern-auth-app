require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const error = require('./middleware/Error');
const db = require('./model/index');
const routes = require('./routes');

const app = express();

const port = process.env.PORT  || 4000;

app.use(cors());
app.use(bodyparser.json());

app.get('/', (req, res, next) => {
    res.send({'hello': 'world'});
});

app.use('/api/auth', routes.auth);
app.use('/api/polls', routes.poll);

app.use(error.notfound);
app.use(error.errorHandler);


app.listen(port, console.log('server start on port 3001'));