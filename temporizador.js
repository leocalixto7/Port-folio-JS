const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 2', function(){
    console.log('executando tarefa 1', new Date().getSeconds())
})      


setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa Cancelada')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 20
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})