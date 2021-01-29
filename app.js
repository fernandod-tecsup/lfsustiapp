const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const pedidos = require('./routes/pedidos');
const musica = require('./routes/musica');
const usuario = require('./routes/usuario');
const index = require('./routes/index');

const path = __dirname + '/views/';
const port = 8095;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/pedidos', pedidos);
app.use('/musica', musica);
app.use('/index', index);
app.use('/usuario', usuario);

app.listen(port, function () {
  console.log('Example app listening on port 8089!')
})
