const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseoriginal');
const dbHeroku = require('../database/sequilize');

const User = require('../models/User');
const Scrapbook = require('../models/Scrapbook');
const Community = require('../models/Community');

const banco = 'postgres://gximzoytciikji:d77d2d583db21d3c641cb5c09c6c2c343b940c34e29cd21c59b7ae74ea708b43@ec2-3-89-0-52.compute-1.amazonaws.com:5432/ddju5l1lr9v7it';

const connection = new Sequelize(dbConfig);

// const connection = new Sequelize(banco, {
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
// });

User.init(connection);
Scrapbook.init(connection);
Community.init(connection);

User.associate(connection.models);
Scrapbook.associate(connection.models);
Community.associate(connection.models);

module.exports = connection;