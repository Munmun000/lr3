const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/db') // для `postgres`
const productmodel = require("../controllers/product.controller.js")


// создание модели для работы с БД пользователей
const History = sequelize.define('history', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
}, {
    timestamps: false   // отключение временной метки
});

// Создание таблицы, которая содержит ключи других таблиц, устанавливая отношение многие-ко-многим
const historyproduct = sequelize.define('historyproduct', {
    id_history: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    id_product: {                    // оценка студента по данному курсу
      type: Sequelize.INTEGER,
      allowNull: false
    }
});

// устанавливаем отношение многие к многим
History.belongsToMany(productmodel, { through: 'historyproduct' });
productmodel.belongsToMany(product, { through: 'historyproduct' });


// методы работы с БД пользователей
// получение всех пользователей
exports.getHistory = () => {
    return new Promise((resolve, reject) =>{
        sequelize.sync().then(result => console.log("Синхранизация прошла успешно"));
        History.findAll()
        .then(product =>{
            product.getproductmodel().then(products=>{
                for(product of products){
                    console.log("name:", product.nameproduct, "price:", product.price);
                }
            });
        })
    })
}

// создание пользователя
exports.createHistory = (nameproduct) => {
    return new Promise((resolve, reject) =>{
        productmodel.findOne({
            where:{
                nameproduct:nameproduct
            }})
            .then(product =>{
                historyproduct.addproductmodel(product, {through:{id_product}})
            })
    })
}


// обновление пользователя
exports.updateUser = (id, data) => {
    return new Promise((resolve, reject) =>{
        User.update(data, {
            where: {
                id : id
            }
        }).then(res => resolve("Данные успешно обновленны"))
    })
}


// удаление польователя
exports.deleteUser = (id) => {
    return new Promise((resolve, reject) =>{
        User.destroy({where:{
            id :id
        }}).then(res => resolve("Данные успешно удалены"))
    })
}

