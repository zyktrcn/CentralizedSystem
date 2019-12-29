const Sequelize = require('sequelize')
const { SQL_USERNAME, SQL_PASSWORD, SQL_HOST, SQL_PORT } = require('../config/index')

// Connecter
const dbConnect = () => {
  return new Sequelize(
    'sensing',
    SQL_USERNAME,
    SQL_PASSWORD,
    {
      'dialect': 'mysql',
      'dialectOptions': {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
      },
      'host': SQL_HOST,
      'port': SQL_PORT,
      'define': {
        'underscored': true
      }
    }
  )
}

const db = dbConnect()
const Data = db.import('./data')
db.sync()

module.exports = {
  Data
}
