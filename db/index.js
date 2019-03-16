const { Client } = require('pg')

module.exports = new Client({
  user: 'postgres',
  password: 'docker',
  host: '104.196.210.28',
  database: 'hrnycapp',
  port: 5432,
})


