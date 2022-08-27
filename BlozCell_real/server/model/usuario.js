const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  cedula : {type : String},
  firstNames : {type: String},
  lastNames: {type: String},
  rol: {type: String},
  estado: {type: Number},
});

module.exports = model("Usuario", UsuarioSchema);
