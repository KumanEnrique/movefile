const path = require('path')
require('dotenv').config({path:path.join(__dirname,'./.env')})
const CronJob = require('cron').CronJob
const {job} = require('./job')

let isRunning = false
const fileMover = new CronJob(process.env.CRON_TIME,async ()=>{
    if(!isRunning){
        isRunning = true;
        await job()
        isRunning = false
    }else{
        console.log("Already running!!!")
    }
})

fileMover.start()