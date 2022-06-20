const { Pool } = require('pg')


    const pool = new Pool({
        host: '127.0.0.1',
        port: 5432,
        user: 'hector',
        password: 'admin123',
        database: 'my_store',
    })

module.exports = pool;