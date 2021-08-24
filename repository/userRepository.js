'use strict'

const User = require('../entities/User')

const knex = require('../config/db')

const getUserDB = async (userId) => {
    return await knex.select(User.dbProperties).from(User.tableName).where(User.dbProperties.userId, userId)
}

module.exports = {
    getUserDB
}
