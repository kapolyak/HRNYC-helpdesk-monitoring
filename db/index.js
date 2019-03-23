const { Client } = require('pg')
const config = require('./../config.js')

module.exports = new Client({
  user: config.user,
  password: config.password,
  host: config.host,
  database: config.database,
  port: config.port,
})


