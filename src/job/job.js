const cron = require('node-cron')
const { report } = require('../service/reportService')

const task = cron.schedule('0 7 * * 1', async () => {
    console.log('Running a job at 01:00 at UTC timezone');
    await report()
}, {
    scheduled: true,
    timezone: "Europe/London"
})

task.start()
