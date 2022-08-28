const Usuario = require("../model/usuario");

const deleteUser = (req,res) => {
    console.log(req.params.idToDelete);
    Usuario.findOneAndDelete({_id: req.params.idToDelete},(err,cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}
module.exports = deleteUser;