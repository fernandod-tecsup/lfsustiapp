const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario');

router.get('/', function(req, res){
    usuario.index(req,res);
});

router.post('/addusuario', function(req, res) {
    usuario.create(req,res);
});

router.get('/getusuario', function(req, res) {
    usuario.list(req,res);
});

module.exports = router;
