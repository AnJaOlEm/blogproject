const { Pool } = require('pg');

let pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'test11',
});

module.exports.pool = pool;