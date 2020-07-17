const {
  Sequelize
} = require('sequelize');

const sequelize = new Sequelize('db_users', 'appadmin', 'Santiago2015', {
  dialect: 'mysql',
  host: '/cloudsql/backend-angularapp:southamerica-east1:dbangularapp',
  timestamps: false,
  logging: false,
  dialectOptions: {
    socketPath: '/cloudsql/backend-angularapp:southamerica-east1:dbangularapp'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;