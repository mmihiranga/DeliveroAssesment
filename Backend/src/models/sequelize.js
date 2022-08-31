const dbConfig = require('../config/Database.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const DatabaseSequelize = {}

DatabaseSequelize.Sequelize = Sequelize
DatabaseSequelize.sequelize = sequelize

DatabaseSequelize.users = require('./User.js')(sequelize, DataTypes)

DatabaseSequelize.sequelize.sync({ force: false })
.then(() => {
    console.log('Sync Completed!')
})


module.exports = DatabaseSequelize