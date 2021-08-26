const { Router } = require('express')
const router = Router({ mergeParams: true })

const { getProductMiddleware, getProduct, getAllProducts, createProduct } = require('../service/productsService')
const { createOrder, updateOrder } = require('../service/ordersService')
const { getProductStatus } = require('../service/productStatusService')
const { getUser } = require('../service/usersService')
const { reportRest } = require('../service/reportService')

const requestWrapper = (fn) => async (req, res, next) => await fn(req, res, next).catch((error) => {
    console.log(error)
    return res.status(500).send(error)
})

router.get('/products', requestWrapper(getAllProducts))
router.get('/products/:productId', requestWrapper(getProduct))
router.post('/products', 
    requestWrapper(getProductStatus),
    requestWrapper(createProduct)
)

router.get('/report', requestWrapper(reportRest))

router.post('/order', 
    requestWrapper(getUser),
    requestWrapper(getProductMiddleware),
    requestWrapper(createOrder)
)
router.put('/order', 
    requestWrapper(getUser),
    requestWrapper(getProductMiddleware),
    requestWrapper(updateOrder)
)

module.exports = router
