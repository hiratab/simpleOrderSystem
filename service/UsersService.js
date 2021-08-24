'use strict'

const { getUserDB } = require('../repository/userRepository')

const getUser = async (req, res, next) => {
    const { userId } = req.body
    if(!userId) {
        return res.status(400).send()
    }

    const user = await getUserDB(userId)
    if(!user) {
        return res.status(400).send()
    }

    req.user = user

    return next()
}

module.exports = {
    getUser
}
