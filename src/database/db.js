const { Pool } = require("pg");

const pool = new Pool({
  user: "michaelwhitham",
  host: "localhost",
  database: "gl_project",
  password: "",
  port: 5432,
});

module.exports = pool;
