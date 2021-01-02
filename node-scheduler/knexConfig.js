const knex = require('knex')({
    client: 'pg',
    connection:{        
        host: 'localhost',
        user:'postgres' ,
        password: 'docker',
        database: 'knex',
    }
})

module.exports = knex