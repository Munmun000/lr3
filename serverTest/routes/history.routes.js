const Router = require("express")
const router = new Router()
const historyController = require("../controllers/history.controller.js")

router.post("/history", productController.createProduct)
router.get("/history", productController.getProducts)

module.exports = router