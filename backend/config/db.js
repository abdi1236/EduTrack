require("dotenv").config(); // ✅ Import dotenv correctly at the very top

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db",
  process.env.DB_USER || "default_user",
  process.env.DB_PASSWORD || "default_pass",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false
  }
);

module.exports = sequelize;
