const Usuario = require("../model/usuario");

const updatePassword = async (req,res) => {
    try{
        console.log(password);
        
        const user = await Usuario.findOne({_id : req.params.id})
            user.contraseña = req.body.password;
        
        await user.save()
		res.send(user)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
}

module.exports = updatePassword