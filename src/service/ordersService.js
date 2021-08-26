'use strict'

const { createOrderDB, updateOrderDB } = require('../repository/ordersRepository')
const { createOrderItems } = require('./orderItemsService')

const createOrder = async (req, res, next) => {
    const { products } = req
    const order = req.body
    const orderId = await createOrderDB(order)
    await createOrderItems(orderId[0], order)

    return res.status(201).send()
}

const updateOrder = async (req, res, next) => {
    const order = req.body
    return res.send(await updateOrderDB(order))
}

module.exports = {
    createOrder,
    updateOrder
}
