const historyModel = require("../models/history.model.js")

//функция для отображения главное страницы?

exports.getProducts = (req, res) =>{
    historyModel.getHistory().then(result => {
        console.log(result);
        res.json(result);
    })
}


exports.createHistory = (req, res) =>{
    let nameproduct = req.body.nameproduct;

    historyModel.createHistory(nameproduct).then(result => {
        console.log(result);
        res.json(result);
    })
}