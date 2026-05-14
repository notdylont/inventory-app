const { Router } = require('express');
const resourcesController = require('../controllers/resourcesController');

const resourcesRouter = Router();

resourcesRouter.get('/new', resourcesController.newResourceGet);

resourcesRouter.post('/', resourcesController.newResourcePost);

resourcesRouter.get('/:id/edit', resourcesController.updateResourceGet);

resourcesRouter.post('/:id/edit', resourcesController.updateResourcePost);

resourcesRouter.post('/:id/delete', resourcesController.deleteResource);

module.exports = resourcesRouter;
