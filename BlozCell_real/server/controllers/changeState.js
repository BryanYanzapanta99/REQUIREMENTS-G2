const Usuario = require("../model/usuario");

const changeState = async (req,res) => {
    try{
        const user = await Usuario.findOne({_id : req.params.id})
        console.log(user);
        console.log(req.body.estado)
        user.estado = req.body.estado;
        console.log(user);
        await user.save()
		res.send(user)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
} 

module.exports = changeState