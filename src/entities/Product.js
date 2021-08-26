'use strict'

const dbProperties = Object.freeze({
    productId: 'PRODUCT_ID',
    productName: 'PRODUCTS_NAME',
    merchantId: 'MERCHANT_ID',
    price: 'PRICE',
    productStatusId: 'PRODUCT_STATUS_ID'
})

const tableName = 'DBNAME.PRODUCTS'

module.exports = {
    dbProperties,
    tableName
}
