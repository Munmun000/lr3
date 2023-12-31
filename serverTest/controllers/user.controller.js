// const productModel = require("../models/product.model")
const userModel = require("../models/user.model.js")

//функция для отображения главное страницы?
exports.getUsers = (req, res) =>{
    userModel.getUsers().then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.getOneUser = (req, res) =>{ 
    let nameuser = req.params.nameuser;
    let passworduser = req.params.passworduser;
    // let passworduser = req.body.passworduser;
    console.log(nameuser)
    console.log(passworduser)
    userModel.getOneUser(nameuser, passworduser).then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.createUser = (req, res) =>{
    let name = req.body.nameuser;
    let password = req.body.passworduser;
    userModel.createUser(name, password).then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.updateUser = (req, res) =>{ 
    let id = req.body.id;
    let data = {
        nameuser : req.body.nameuser,
        passworduser : req.body.passworduser
    }
    console.log(data)
    userModel.updateUser(id, data).then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.deleteUser = (req, res) =>{    
    let id = req.params.id;
    userModel.deleteUser(id).then(result => {
        console.log(result);
        res.json(result);
    })
}