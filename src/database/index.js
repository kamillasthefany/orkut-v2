const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Scrapbook = require('../models/Scrapbook');
const Community = require('../models/Community');

const connection = new Sequelize(dbConfig);

User.init(connection);
Scrapbook.init(connection);
Community.init(connection);

User.associate(connection.models);
Scrapbook.associate(connection.models);
Community.associate(connection.models);

module.exports = connection;