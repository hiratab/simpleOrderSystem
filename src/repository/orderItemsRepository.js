'use strict'

const OrderItem = require('../entities/OrderItem')

const knex = require('../config/db')

const createOrderItemsDB = async ({
    orderId,
    productId,
    quantity
}) => {
    let newEntity = {}
    newEntity[OrderItem.dbProperties.orderId] = orderId
    newEntity[OrderItem.dbProperties.productId] = productId
    newEntity[OrderItem.dbProperties.quantity] = quantity

    return knex.insert(newEntity).into(OrderItem.tableName)
}

module.exports = {
    createOrderItemsDB
}
