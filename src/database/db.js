const { Pool } = require('pg');

const pool = new Pool({
    user: 'Michael.Whitham',
    host: 'localhost',
    database: 'glstore',
    password: '',
    port: 5432,
});

module.exports = pool