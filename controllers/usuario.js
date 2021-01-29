const path = require('path');
const usuario = require('../models/usuario');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/usuario.html'));
};

exports.create = function (req, res) {
    var newusuario = new usuario(req.body);
    console.log(req.body);
    newusuario.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save delivery db to database');
        } else {
            res.redirect('/usuario/getusuario');
        }
  });
               };

exports.list = function (req, res) {
        usuario.find({}).exec(function (err, usuario) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getusuario', {
                    usuario: usuario
             });
        });
};
