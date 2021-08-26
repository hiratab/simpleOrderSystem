'use strict'

const { getProductStatusDB } = require('../repository/productStatusRepository')

const getProductStatus = async (req, res, next) => {
    const { productStatus: productStatusInitials } = req.body
    if(!productStatusInitials) {
        return res.status(400).send()
    }

    const productStatus = await getProductStatusDB(productStatusInitials)
    if (!productStatus) {
        return res.status(404).send()
    }

    req.productStatus = productStatus[0]

    return next()

}

module.exports = {
    getProductStatus
}
