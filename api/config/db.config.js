const {
  Sequelize
} = require('sequelize');

const host = '/cloudsql/backend-angularapp:southamerica-east1:dbangularapp';

const sequelize = new Sequelize('db_users', 'appadmin', 'Santiago2015', {
  dialect: 'mysql',
  host: host,
  timestamps: false,
  logging: false,
  dialectOptions: {
    socketPath: host
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;