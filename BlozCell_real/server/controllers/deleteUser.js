const Usuario = require("../model/usuario");

const deleteUser = (req,res) => {
    Usuario.findOneAndDelete({id: req.params.id},(err,cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}
module.exports = deleteUser;