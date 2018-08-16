const mongoose = require('mongoose');

// IMPORTAR LA PROPIEDAD ESQUEMA DE LA BIBLIOTECA MONGOOSE
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    number: String
});

// EXPORTAR EL ESQUEMA
module.exports = mongoose.model('user', userSchema);