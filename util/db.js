const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Yogeshwar@1995", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
