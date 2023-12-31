const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/db') // для `postgres`

// создание модели для работы с БД пользователей
const Product = sequelize.define('product', {
    nameproduct: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descriptionproduct: {
        type: Sequelize.STRING,
        allowNull: true
    },
    imgpath: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false   // отключение временной метки
});


// методы работы с БД пользователей
// получение всех продуктов
exports.getProducts = () => {
    return new Promise((resolve, reject) =>{
        sequelize.sync().then(result => console.log("Синхранизация прошла успешно"));
        Product.findAll({raw:true}).then(product=>{
            resolve(product);
        })
    })
}

// получение одного продукта
exports.getOneProduct = (id) => {
    return new Promise((resolve, reject) =>{
        sequelize.sync().then(result => console.log("Синхранизация прошла успешно"));
        Product.findOne({
            where: {
              id: id
            }
          }).then(user => {
            resolve(user);
        })
    })
}

// создание продукта
exports.createProduct = (nameproduct, descriptionproduct, imgpath, price) => {
    return new Promise((resolve, reject) =>{
        Product.create({
            nameproduct: nameproduct,
            descriptionproduct: descriptionproduct,
            imgpath: imgpath,
            price: price
        }).then(res => resolve("Данные успешно добавлены"))
    })
}

// обновление продукта
exports.updateProduct = (id, data) => {
    return new Promise((resolve, reject) =>{
        Product.update(data, {
            where: {
                id : id
            }
        }).then(res => resolve("Данные успешно обновленны"))
    })
}

// удаление польователя
exports.deleteProduct = (id) => {
    return new Promise((resolve, reject) =>{
        Product.destroy({where:{
            id :id
        }}).then(res => resolve("Данные успешно удалены"))
    })
}