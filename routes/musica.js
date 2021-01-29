const express = require('express');
const router = express.Router();
const musica = require('../controllers/musica');

router.get('/', function(req, res){
    musica.index(req,res);
});

router.post('/addmusica', function(req, res) {
    musica.create(req,res);
});

router.get('/getmusica', function(req, res) {
    musica.list(req,res);
});

module.exports = router;
