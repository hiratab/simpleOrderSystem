'use strict'

const { createOrderItemsDB } = require('../repository/orderItemsRepository')

const createOrderItems = async (orderId, order) => {
    let promises = []
    order.products.map(({ productId, quantity }) => promises.push(createOrderItemsDB({
        orderId,
        productId,
        quantity
    })))
    return await Promise.all(promises)
}


module.exports = {
    createOrderItems
}

