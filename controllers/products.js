const product = require('./models/products')  //guhamagara models kugirango tuyikoreshe

const getAllproductsStatic = async (req, res) => {

  //throw new Error('testing async error');
  const products = await product.find({})
  .limit(5)
  .skip(2)
     //descending or acsending order
  
  //hano niho twandika ibyo dushaka ko tubona{}
  //igihe ushaka gusoma ibyo ushaka gusa
  res.status(200).json(products)
}

const getAllproducts = async (req, res) => {
  const { featured, company, name,rating,fields,sort} = req.query  
  const queryObject = {}
  queryObject.featured = featured === 'true' ? true : false

  if (company) {
    queryObject.company = company    //ushaka kureba niba company irimo
  }
  if (name) {
    queryObject.name = {$regex:name,$options:'si' } //regular expression when you are searching and what youwhant you search by name      //ushaka kureba izina rimwe
  }
  if (rating){
    queryObject.rating = rating
  }

  let result = product.find(queryObject) 
  if(sort) {
    //products = products.sort()
    const sortList = sort.split(',').join()
    result = result.sort(sortList)
  }
  else{
    result = result.sort('createdAt')
  }
  //selected
  if(fields) {
    console.log(fields)
   const fieldsList = fields.split(',').join(' ')
    result = result.select(fieldsList)
  }
  const page  = Number(req.query.page)  || 1
  const limit = Number(req.query.limit)  || 7
  const skip = (page-1) * limit
  result = result.skip(skip).limit(7)
  const products = await result
   //igufasha guhitamo icyo ushaka
  res.status(200).json({products , nHints :product.length})    //mugihe tugiye kureba umubare wizo twanditsemo
}




module.exports = {
  getAllproducts,
  getAllproductsStatic,
}