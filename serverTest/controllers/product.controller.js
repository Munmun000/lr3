const productModel = require("../models/product.model.js")

//функция для отображения главное страницы?

exports.getProducts = (req, res) =>{
    productModel.getProducts().then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.getOneProduct = (req, res) =>{ 
    let id = req.params.id;
    productModel.getOneProduct(id).then(result => {
        console.log(result);
        res.json(result);
    })
}


exports.createProduct = (req, res) =>{
    let nameproduct = req.body.nameproduct;
    let descriptionproduct = req.body.descriptionproduct;
    let imgpath = req.body.imgpath;
    let price = req.body.price;
    productModel.createProduct(nameproduct, descriptionproduct, imgpath, price).then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.updateProduct = (req, res) =>{ 
    let id = req.body.id;
    let data = {
        nameproduct : req.body.nameproduct,
        descriptionproduct : req.body.descriptionproduct,
        imgpath : req.body.imgpath,
        price : req.body.price,        
    }
    productModel.updateProduct(id, data).then(result => {
        console.log(result);
        res.json(result);
    })
}

exports.deleteProduct = (req, res) =>{    
    let id = req.params.id;
    productModel.deleteProduct(id).then(result => {
        console.log(result);
        res.json(result);
    })
}