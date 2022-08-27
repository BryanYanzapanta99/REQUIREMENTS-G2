const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5000;
const EndPointsUsers = require('./api/EndPointsUsers')
const {authUser, authRole} = require('./basicAuth')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users",EndPointsUsers)
app.use("/articles",EndPointsArticles)


mongoose.connect("mongodb+srv://admin:admin@cluster0.uxgwiwo.mongodb.net/BlozCell?retryWrites=true&w=majority",
{useNewUrlParser: true},
(err,res)=>{
    if(err) return console.error(err)
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
}
)