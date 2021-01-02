const express = require('express')
const app = express()

var schedule = require('node-schedule')

schedule.scheduleJob('insert joao ', '0/20 0/1 * * * * ', async (fireDate)=>{
    await knex('users').insert({first_name: "joao",
    last_name: "macena",
    bio: "O maneiro"
})
console.log('insert joao fired');
})

schedule.scheduleJob('insert daniel', '0/15 0/2 * * * *', async(fireDate)=>{
    await knex('users').insert({first_name: "daniel",
    last_name: "macena",
    bio: "O Ranzinza"
})
console.log('insert daniel fired');
})

schedule.scheduleJob('insert well', '0/16 0/3 * * * *', async (firedate)=>{
    await knex('users').insert({first_name: "wellington",
    last_name: "macena",
    bio: "O Grosseiro"
})
console.log('insert wellington fired');
})

const knex = require('./knexConfig')
app.use(express.json())

knex.schema.hasTable('users').then( async function(exists) {
    if (!exists) {
      return await knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('first_name', 100);
        t.string('last_name', 100);
        t.text('bio');
      });
    }
  });


app.get('/users', async (req, res)=>{

    return  res.send( await knex.select('*',).table('users'))
})

app.post('/users', async (req, res) => {
    let{first_name, last_name, bio} = req.body
    console.log(req.body);
   let send =  await knex('users').insert({first_name, last_name, bio})
   console.log(send);
    return res.status(200).json()
})


app.listen(4001, (req, res) => {
    console.log("Server running on port 4001");
})
