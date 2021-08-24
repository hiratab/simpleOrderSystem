'use strict'

const dbProperties = Object.freeze({
    productStatusId: 'PRODUCT_STATUS_ID',
    productStatusName: 'PRODUCT_STATUS_NAME',
    productStatusInitials: 'PRODUCT_STATUS_INITIALS'
})

const tableName = 'DBNAME.PRODUCT_STATUS'

module.exports = {
    dbProperties,
    tableName
}
