const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    id : {type: String},
    cedula : {type:String},
    firstNames : {type: String},
    lastNames: {type: String},
    role: {type: String},
    username: {type: String},
    password: {type: String},
    state: {type: Number},
    email: {type:String},
})

module.exports = User = mongoose.model('User',UserSchema)