const { Router } = require('express');
const resourcesController = require('../controllers/resourcesController');

const resourcesRouter = Router();

resourcesRouter.get('/new', resourcesController.newResourceGet);

resourcesRouter.post('/', resourcesController.newResourcePost);

module.exports = resourcesRouter;
