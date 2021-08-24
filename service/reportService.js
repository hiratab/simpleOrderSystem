'use strict'

const { getProductReportDB } = require('../repository/productsRepository')
const { addItem } = require('../service/notionService')

const reportRest = async (req, res, next) => {
    const reportData = await report()
    
    return res.status(200).json(reportData)
}

const report = async () => {
    const reportData = await getProductReportDB();

    let promises = []
    reportData.map(entry => promises.push(addItem(entry)))

    await Promise.all(promises)
    return reportData
}

module.exports = {
    reportRest,
    report
}
