import cron from 'node-cron';

cron.schedule("/*5 * * * * *", () =>{
    let horario = new Date();
    console.log(`Tarefa executada as ${horario}`);
})