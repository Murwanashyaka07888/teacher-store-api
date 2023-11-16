// console.log('04 store api running')
require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
 const notFoundMiddleware = require('./middleware/not-found')
 const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'));
app.use(express.json())
//routes
app.get('/', (req, res) => {
   res.send('<h1>store API</h1><a href="/api/v1/products">products route</a>')
});
app.use('/api/v1/products',productsRouter)
//products route

 app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async() => {
   try {
      //connectDB
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`server is listening port ${port}...`))
   } catch (error) {
      console.log(error)

   }
}
start()







//public/postman => app.js(umutima)=>route=>comtroller=>model
//app=>db=>atlas/database