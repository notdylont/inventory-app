const { Router } = require('express');

const modulesRouter = Router();
const modulesController = require('../controllers/modulesController');

modulesRouter.get('/', modulesController.getModules);

module.exports = modulesRouter;
