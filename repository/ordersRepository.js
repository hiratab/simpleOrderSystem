'use strict'

const Order = require('../entities/Order')

const knex = require('../config/db')

const ORDER_STATUS = Object.freeze({
    OPEN: 'OPEN',
    CLOSED: 'CLOSED',
    CANCELLED_BY_USER: 'CANCELLED_BY_USER',
    ERROR: 'ERROR',
    EXCLUDED: 'EXCLUDED'
})

const createOrderDB = async ({
    userId
}) => {
    let obj = {}
    obj[Order.dbProperties.userId] = userId
    obj[Order.dbProperties.orderStatus] = ORDER_STATUS.OPEN

    return await knex.insert(obj).into(Order.tableName)
}

const updateOrderDB = async ({
    userId,
    productId,
    quantity,
    orderStatus
}) => {
    return Promise.resolve({
        id: 1,
        userId,
        productId, // REFERENCIA NAO SERA UTILIZADA
        quantity, // REFERENCIA NAO SERA UTILIZADA
        orderStatus: ORDER_STATUS.OPEN,
        createdAt: new Date()
    })
}

module.exports = {
    createOrderDB,
    updateOrderDB
}
