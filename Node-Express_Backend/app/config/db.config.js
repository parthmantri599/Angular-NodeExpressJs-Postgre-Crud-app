const env = require("./env.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  env.DB,
  env.USER,
  env.PASSWORD,
  {
    host: env.HOST,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.Customer = require('../models/customer.model.js')(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin"];

module.exports = db;