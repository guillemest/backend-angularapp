const sequelize = require("../config/db.config.js");
const Sequelize = require("sequelize");
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.person = require("./person.model.js")(sequelize, Sequelize);

module.exports = db;