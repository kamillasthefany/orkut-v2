const { Sequelize } = require("sequelize");

//const sequelize = new Sequelize(process.env.DATABASE_URL, {
const sequelize = new Sequelize('postgres://gximzoytciikji:d77d2d583db21d3c641cb5c09c6c2c343b940c34e29cd21c59b7ae74ea708b43@ec2-3-89-0-52.compute-1.amazonaws.com:5432/ddju5l1lr9v7it', {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//check connection (optional)
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;