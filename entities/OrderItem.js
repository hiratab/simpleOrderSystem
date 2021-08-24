'use strict'

const dbProperties = Object.freeze({
    orderItemsId: 'ORDER_ITEMS_ID',
    orderId: 'ORDER_ID',
    productId: 'PRODUCT_ID',
    quantity: 'QUANTITY'
})

const tableName = 'DBNAME.ORDER_ITEMS'

module.exports = {
    dbProperties,
    tableName
}
