const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musica = new Schema ({
        nombre: { type: String, required: true },
        autor: { type: String, required: true },
        genero_musical: { type: String, required: true },
});

module.exports = mongoose.model('musica', musica)
