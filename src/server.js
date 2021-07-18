const express = require('express');
const routes = require('./routes');
require('dotenv').config();

require('./database');

const app = express();
const port = process.env.PORT || 3333;

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.use(express.json());
app.use(routes);

app.listen(port);