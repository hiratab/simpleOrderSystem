const proxyquire = require('proxyquire').noCallThru()
const should = require('should')

const getModule = ({
    getUserDB = async () => null
}) => {
    return {
        myModule: proxyquire('../usersService', {
            '../repository/userRepository': { getUserDB }
        })
    }
}

describe('usersSerivce', () => {
    describe('#getUser', () => {
        it('Should successfully get users and add on req.user', async () => {
            const USER_ID = 1
            const FULL_NAME = 'Full Name'
            const CREATED_AT = new Date()
            const RESPONSE_STATUS = 200

            const { myModule } = getModule({
                getUserDB: (userId) => {
                    should(userId).equal(USER_ID)
                    return Promise.resolve({
                        userId: USER_ID,
                        fullName: FULL_NAME,
                        createdAt: CREATED_AT
                    })
                }
            })

            const req = {
                body: {
                    userId: USER_ID
                }
            }
            const res = {
                status: (status) => {
                    should(status).be.equal(RESPONSE_STATUS)
                    return Promise.resolve()
                },
            }
            const next = () => {}

            await myModule.getUser(req, res, next)
        })
        
        it('Should not found user and send response status as 400 and the response should contain an error code related to user not found', async () => {
            const USER_ID = 1
            const RESPONSE_STATUS = 400

            const { myModule } = getModule({
                getUserDB: (userId) => {
                    should(userId).equal(USER_ID)
                    return Promise.resolve()
                }
            })

            const req = {
                body: {
                    userId: USER_ID
                }
            }
            const res = {
                status: function(status) {
                    should(status).be.equal(RESPONSE_STATUS)
                    return this
                },
                json: function() {
                    
                }
            }
            const next = () => {}

            await myModule.getUser(req, res, next)
        })
        
        it('Should fail because userId is undefined and send response status as 400 and code related to User ID Not Included', async () => {
            const USER_ID = 1
            const RESPONSE_STATUS = 400

            const { myModule } = getModule({
                getUserDB: (userId) => {
                    should(userId).equal(USER_ID)
                    return Promise.resolve()
                }
            })

            const req = {
                body: {}
            }
            const res = {
                status: function(status) {
                    should(status).be.equal(RESPONSE_STATUS)
                    return this
                },
                json: function() {}
                   
            }
            const next = () => {}

            await myModule.getUser(req, res, next)
        })
    })
})
