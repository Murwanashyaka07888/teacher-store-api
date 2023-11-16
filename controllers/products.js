const product = require('../models/products')  //guhamagara models kugirango tuyikoreshe

const getAllproductsStatic = async (req, res) => {
  //throw new Error('testing async error');
  const products = await product.find({})
  //hano niho twandika ibyo dushaka ko tubona{}
  //igihe ushaka gusoma ibyo ushaka gusa
  res.status(200).json(products)
}

const getAllproducts = async (req, res) => {
  const { featured, company, name,rating} = req.query  
  const queryObject = {}
  queryObject.featured = featured === 'true' ? true : false

  if (company) {
    queryObject.company = company    //ushaka kureba niba company irimo
  }
  if (name) {
    queryObject.name = name          //ushaka kureba izina rimwe
  }
  if (rating){
    queryObject,rating = rating
  }
  const products = await product.find(queryObject) 
   //igufasha guhitamo icyo ushaka
  res.status(200).json({products , nHints :product.length})    //mugihe tugiye kureba umubare wizo twanditsemo
}




module.exports = {
  getAllproducts,
  getAllproductsStatic,
}