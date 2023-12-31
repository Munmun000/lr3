const Router = require("express")
const router = new Router()
const controller = require("../controllers/user.controller.js")

router.post("/user", controller.createUser)
router.get("/user", controller.getUsers)
router.get("/user/:nameuser/:passworduser", controller.getOneUser)
router.put("/user", controller.updateUser)
router.delete("/user/:id", controller.deleteUser)

module.exports = router