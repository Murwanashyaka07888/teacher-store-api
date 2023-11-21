const express = require('express')
const router = express.Router()


const {getAllproducts,getAllproductsStatic} = require('../products')

router.route('/').get(getAllproducts)
router.route('/static').get(getAllproductsStatic)


module.exports = router