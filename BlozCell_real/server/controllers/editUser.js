const Usuario = require("../model/usuario");

const editUser = async (req,res) => {
    try{
        const user = await Usuario.findOne({_id : req.params.id})
        if(req.body.cedula){
            user.cedula = req.body.cedula;
        }
        if(req.body.firstNames){
            user.firstNames = req.body.firstNames
        }
        if(req.body.lastNames){
            user.lastNames = req.body.lastNames
        }
        if(req.body.rol){
            user.rol = req.body.rol
        }
        if(req.body.nombre){
            user.nombre = req.body.nombre
        }
        if(req.body.contraseña ){
            user.contraseña = req.body.contraseña
        }
        if(req.body.estado){
            user.estado = req.body.estado
        }
        if(req.body.correo){
            user.correo = req.body.correo
        }
        await user.save()
		res.send(user)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
}

module.exports = editUser