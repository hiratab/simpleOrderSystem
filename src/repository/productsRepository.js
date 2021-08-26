'use strict'

const knex = require('../config/db')

const Product = require('../entities/Product')
const OrderItem = require('../entities/OrderItem')

const ORDER_BY = Object.freeze({
    ID: Product.dbProperties.productId,
    NAME: Product.dbProperties.productName,
    PRODUCT_STATUS: Product.dbProperties.produtctStatusId
})

const ORDER_DIRECTION = Object.freeze({
    ASC: 'ASC',
    DESC: 'DESC'
})

const getAllProductsDB = async (orderBy, orderDirection) => {
    let query = knex.select(Product.dbProperties).from(Product.tableName)

    if (orderBy){
        if (orderDirection) {
            query.orderBy(ORDER_BY[orderBy], ORDER_DIRECTION[orderDirection])
        } else {
            query.orderBy(ORDER_BY[orderBy])
        }
    }

    return await query

}

const createProductDB = async ({
    productName,
    merchantId,
    price,
    productStatusId
}) => {
    let obj = {}
    obj[Product.dbProperties.productName] = productName
    obj[Product.dbProperties.merchantId] = merchantId
    obj[Product.dbProperties.price] = price
    obj[Product.dbProperties.productStatusId] = productStatusId

    return await knex.insert(obj).into(Product.tableName)

}

const getProductDB = async (productId) => {
    return await knex.select(Product.dbProperties).from(Product.tableName).where(Product.dbProperties.productId, productId)
}

const getProductReportDB = async () => {
    let query = knex.select(`${Product.tableName}.${Product.dbProperties.productId} AS Product_Id`, `${Product.tableName}.${Product.dbProperties.productName} AS Product_Name`)
        .sum(`${OrderItem.dbProperties.quantity} AS Sold_count`).from(Product.tableName)
        .innerJoin(OrderItem.tableName, `${Product.tableName}.${Product.dbProperties.productId}`, `${OrderItem.tableName}.${OrderItem.dbProperties.productId}`)
        .groupBy(Product.dbProperties.productId)
    return await query
}

module.exports = {
    getAllProductsDB,
    getProductDB,
    getProductReportDB,
    createProductDB
}

