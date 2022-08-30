const Usuario = require("../model/usuario");

const getUserData = async (req, res) => {
      Usuario.findById(req.params.id).then((usuario) => {
        if (!usuario) {
          return res.json({
            mensaje: "No se encontro ningun usuario con esa ID",
          });
        } else {
          const { __v, ...resto } = usuario._doc;
          res.json(resto);
        }
      });
} 
 
  module.exports = getUserData;