'use strict'

const dbProperties = Object.freeze({
    orderId: 'ORDER_ID',
    userId: 'USER_ID',
    orderStatus: 'ORDER_STATUS'
})

const tableName = 'DBNAME.ORDERS'

module.exports = {
    dbProperties,
    tableName
}
