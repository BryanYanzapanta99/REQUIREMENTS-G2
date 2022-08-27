const Usuario = require("../model/usuario");

const getUsers = async (req, res) => {
  
    Usuario.find((err,users) =>{
    err && res.status(500).send(err.message)
    res.status(200).json(users)
})

};

module.exports = getUsers;
