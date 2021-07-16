const express = require('express');

const UserController = require('./controllers/UserController');
const ScrapbookController = require('./controllers/ScrapbookController');
const CommunityController = require('./controllers/CommunityController');
// const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/scrapbook', ScrapbookController.index);
routes.post('/users/:user_id/scrapbook', ScrapbookController.store);

routes.get('/users/:user_id/community', CommunityController.index);
routes.post('/users/:user_id/community', CommunityController.store);
// routes.delete('/users/:user_id/community', CommunityController.delete);

// routes.get('/report', ReportController.show);

module.exports = routes;