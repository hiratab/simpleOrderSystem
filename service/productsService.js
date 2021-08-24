'use strict'

const { getAllProductsDB, getProductDB, createProductDB } = require('../repository/productsRepository')

// const { getProductMiddleware, getProduct, getAllProducts, createProduct } = require('../service/productsService')

const getProductMiddleware = async (req, res, next) => {
    const { products } = req.body
    if (!products) {
        return res.status(400).send()
    }

    let promises = []
    products.map(product => promises.push(getProductDB(product.productId)))

    const productsInfo = await Promise.all(promises)
    if(!productsInfo) {
        return res.status(404).send()
    }

    req.products = productsInfo.map(productInfo => productInfo[0])

    return next()
}

const getProduct =  async (req, res, next) => {
    const { productId } = req.params
    if (!productId) {
        return res.status(400).send()
    }

    const product = await getProductDB(productId)
    if (!product) {
        return res.status(404).send()
    }

    return res.status(200).json(product)
}

const getAllProducts = async (req, res, next) => {
    const { orderBy, orderDirection } = req.query

    const products = await getAllProductsDB(orderBy, orderDirection)
    return res.status(200).json(products)
}

const createProduct = async (req, res, next) => {
    const { productName, merchantId, price } = req.body
    const { productStatusId } = req.productStatus
    if (!productName || !merchantId || !price || !productStatusId) {
        return res.status(400).send()
    }

    const product = await createProductDB({ productName, merchantId, price, productStatusId })
    return res.status(200).json(product)
}

module.exports = {
    getProductMiddleware,
    getProduct,
    getAllProducts,
    createProduct
}
