const express = require("express")
const cors = require("cors")
const app = express()

const userRouter = require("./routes/user.routes.js")
const productRouter = require("./routes/product.routes.js")
// const historyRouter = require("./routes/history.routes.js")

// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger.js'); // Путь к вашему файлу Swagger JSDoc

const PORT = process.env.PORT || 8080

app.use(cors({ 
  origin: 'http://localhost:5173' // Замените на нужный origin
}));


// Далее обработка маршрутов
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json())
app.use("/api", userRouter)
app.use("/api", productRouter)

app.listen(PORT, ()=> console.log('server started on post ' + PORT))