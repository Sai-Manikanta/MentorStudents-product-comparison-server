const Product = require('./../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: 'success',
            products: products
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
};

const createProduct = async (req, res) => {
    const { name, price, ratings } = req.body;

    try {
        const product = new Product({
            name,
            price,
            ratings
        });

        await product.save();

        res.status(200).json({
            status: 'success',
            product: product
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            error: err.message
        })
    }
};

const getCompareProducts = async (req, res) => {
    try {
        const { product1ID, product2ID } = req.query;

        const products = await Product.find().or([{ _id: product1ID }, { _id: product2ID }]);

        res.status(200).json({
            status: 'success',
            compareProducts: {
                product1: products[0],
                product2: products[1]
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            error: err.message
        })
    }
}

module.exports = { getProducts, createProduct, getCompareProducts }

