'use strict'

const knex = require('../config/db')

const ProductStatus = require('../entities/ProductStatus')

const PRODUCT_STATUS = Object.freeze({
    OUT_OF_STOCK: 'OUT_OF_STOCK',
    ON_STOCK: 'ON_STOCK'
})

const getProductStatusDB = async (productStatusInitials) => {
    return knex.select(ProductStatus.dbProperties).from(ProductStatus.tableName).where(ProductStatus.dbProperties.productStatusInitials, PRODUCT_STATUS[productStatusInitials])
}

module.exports = {
    getProductStatusDB
}
