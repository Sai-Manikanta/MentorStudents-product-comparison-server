const express = require('express');
const router = express.Router();
const { getProducts, createProduct, getCompareProducts } = require('./../controllers/product')

router.route('/')
    .get(getProducts)
    .post(createProduct)

// products/compare?ids=[]
router.route('/compare')
    .get(getCompareProducts)

module.exports = router;