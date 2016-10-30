const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public/release')));
app.use(express.static(path.join(__dirname, 'public/img')));

const router = express.Router();
app.use('/', router);
require('./lib/router')(router);

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Listening on ${port}`);
});
