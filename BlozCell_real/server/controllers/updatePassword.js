const Usuario = require("../model/usuario");
const bcrypt = require("bcrypt");

const updatePassword = async (req,res) => {
    try{
        console.log(req.body);
        const constraseñaHasehada = await bcrypt.hash(req.body.password, 10);
        console.log(constraseñaHasehada);
            const user = await Usuario.findOne({_id : req.params.id})
            user.contraseña = constraseñaHasehada;
            await user.save();
            res.send(user);
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
}

module.exports = updatePassword