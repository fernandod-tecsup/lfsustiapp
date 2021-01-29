const path = require('path');
const Musica = require('../models/musica');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/musica.html'));
};

exports.create = function (req, res) {
    var newMusica = new Musica(req.body);
    console.log(req.body);
    newMusica.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save delivery db to database');
        } else {
            res.redirect('/musica/getmusica');
        }
  });
               };

exports.list = function (req, res) {
        Musica.find({}).exec(function (err, musica) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getmusica', {
                    musica: musica
             });
        });
};
