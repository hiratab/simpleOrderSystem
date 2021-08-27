'use strict'

const { getUserDB } = require('../repository/userRepository')

const Error = require('../enums/errors')

const getUser = async (req, res, next) => {
    const { userId } = req.body
    if(!userId) {
        return res.status(400).json({
            code: Error.USER_ID_NOT_INCLUDED
        })
    }

    const user = await getUserDB(userId)
    if(!user) {
        console.log()
        return res.status(400).json({
            code: Error.USER_NOT_FOUND
        })
    }

    req.user = user

    return next()
}

module.exports = {
    getUser
}
