'use strict'

const dbProperties = Object.freeze({
    userId: 'USER_ID',
    fullName: 'FULL_NAME',
    createdAt: 'CREATED_AT'
})

const tableName = 'DBNAME.USERS'

module.exports = {
    dbProperties,
    tableName
}
