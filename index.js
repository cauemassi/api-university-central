require('dotenv').config({path: '.env'});
require('./src/models/index')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes/api');

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.PORT || 3000)