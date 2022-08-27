const User = require('../model/User')

const createUser = (req,res) =>{
    let user = new User({
        id :req.body.id ,
        cedula: req.body.cedula,
        firstNames :req.body.firstNames,
        lastNames: req.body.lastNames,
        role:req.body.role,
        username: req.body.username,
        password: req.body.password,
        state: req.body.state,
        email: req.body.email
    })
    // encryptedpassword = bcrypt(req.body.password)
    // user.password = encryptedpassword
    user.save((err, cli) => {
        err && res.status(500).json(err.message)
        res.status(200).json(cli)
    })
}

const getUsers = (req,res) => {
    User.find((err,users) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(users)
    })
}
const getUserById = (req,res) =>{
    try{
        User.findOne({id: req.params.id }, (err,user) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(user)
        })
    }catch(error){
        res.status(404).send({Error : "User not found"})
    }

}
const updateUserId = (req,res) =>{
try{
    User.findOneAndUpdate({id : req.params.id},
         { id : req.body.id}, (err,cli) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(`New id of ${req.params.id} : ${req.body.id} `)
        })
    }catch(error){
        res.status(404).send({Error : "User not found"})
    }   
}

const updateUser = async (req,res) =>{
    try{
        const user = await User.findOne({id : req.params.id})
        if(req.body.cedula){
            user.cedula = req.body.cedula;
        }
        if(req.body.firstNames){
            user.firstNames = req.body.firstNames
        }
        if(req.body.lastNames){
            user.lastNames = req.body.lastNames
        }
        if(req.body.role){
            user.role = req.body.role
        }
        if(req.body.username){
            user.username = req.body.username
        }
        if(req.body.password ){
            user.password = req.body.password
        }
        if(req.body.state){
            user.state = req.body.state
        }
        if(req.body.email){
            user.email = req.body.email
        }
        await user.save()
		res.send(user)
        }catch(error){
            console.log(error)
            res.status(404).send({Error : "User not found"})
        }   
    }

const deleteUser = (req,res) => {
    User.findOneAndDelete({id: req.params.id},(err, cli) =>{
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}

const logUser = (req,res,next) => {
    try{
        const user = await User.findOne({id : req.params.username})
        if (user.username === req.params.username &&
        user.password === req.params.password)
        {
            next();
            res.send({status : 1 ,message: "Logged Successfully"});
        }
        else{
            next();
            res.send({status : 0 ,message: "Incorrect Password or Username"});
        }
    }catch(error){
        res.status(404).send({Error : "User not found"})
    }

}

module.exports = {createUser, getUsers, getUserById, updateUserId, updateUser,deleteUser, logUser}