// database.config.js

type="module"
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: ' localhost',
  database: 'nutremon_db',
  password: 'P1312829078Vega_m',
  port: 5432,
});

module.exports = pool;