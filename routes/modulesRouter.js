const { Router } = require('express');

const modulesRouter = Router();
const modulesController = require('../controllers/modulesController');

modulesRouter.get('/', modulesController.modulesGet);
modulesRouter.get('/new', modulesController.newModulesGet);
modulesRouter.get('/:id', modulesController.moduleShow);
modulesRouter.post('/new', modulesController.newModulesPost);

module.exports = modulesRouter;
