require('dotenv').config({path: '.env'});

const express = require('express');
const app = express();
const routes = require('./src/routes/api');

app.get('/', function(req, res){
  res.send('END POINT INVÁLIDO!');
});

app.use('/api', routes);

app.listen(process.env.PORT || 3000); // faz com que o servidor seja executado na porta 3000 do seu localhost:3000