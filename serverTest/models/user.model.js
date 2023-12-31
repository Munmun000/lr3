const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/db') // для `postgres`

// создание модели для работы с БД пользователей
const User = sequelize.define('user_data', {
    nameuser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passworduser: {
        type: Sequelize.STRING,
        allowNull: false
    }
    //iditem:{
    // 
    // }
}, {
    timestamps: false   // отключение временной метки
});


// методы работы с БД пользователей
// получение всех пользователей
exports.getUsers = () => {
    return new Promise((resolve, reject) =>{
        sequelize.sync().then(result => console.log("Синхранизация прошла успешно"));
        User.findAll({raw:true}).then(users=>{
            resolve(users);
        })
    })
}


// получение одного пользователя
exports.getOneUser = (nameuser, passworduser) => {
    return new Promise((resolve, reject) =>{
        sequelize.sync().then(result => console.log("Синхранизация прошла успешно"));
        User.findOne({
            where: {
              nameuser: nameuser,
              passworduser: passworduser
            }
          }).then(user => {
            resolve(user);
        })
        // User.findByPk(id).then(user => {
        //     resolve(user);
        // })
    })
}

// создание пользователя
exports.createUser = (nameuser, passworduser) => {
    return new Promise((resolve, reject) =>{
        User.create({
            nameuser: nameuser,
            passworduser: passworduser
        }).then(res => resolve("Данные успешно добавлены"))
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

