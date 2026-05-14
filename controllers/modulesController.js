const { renderFile } = require('ejs');
const db = require('../db/queries.js');

async function modulesGet(req, res) {
  const modules = await db.getAllModules();
  res.render('modules/index', { modules });
}

function newModulesGet(req, res) {
  res.render('modules/new');
}

async function newModulesPost(req, res) {
  await db.createModule(req.body.name, req.body.description);
  res.redirect('/modules');
}

async function moduleShow(req, res) {
  const moduleId = req.params.id;
  const mod = await db.getModuleById(moduleId);
  const resources = await db.getAllModuleResources(moduleId);
  res.render('modules/show', { mod: mod[0], resources: resources });
}

async function editModuleGet(req, res) {
  const moduleId = req.params.id;
  const mod = await db.getModuleById(moduleId);
  res.render('modules/edit', { mod: mod[0], module });
}

async function editModulePost(req, res) {
  const moduleId = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  await db.updateModule(moduleId, name, description);
  res.redirect(`/modules/${moduleId}`);
}

async function deleteModuleConfirm(req, res) {
  const mod = await db.getModuleById(req.params.id);
  res.render('modules/delete', { mod: mod[0] });
}

async function deleteModule(req, res) {
  if (req.body.adminPassword !== process.env.ADMIN_PASSWORD) {
    const mod = await db.getModuleById(req.params.id);
    return res.render('modules/delete', {
      mod: mod[0],
      error: 'Incorrect password',
    });
  }
  await db.deleteModule(req.params.id);
  res.redirect('/modules');
}
module.exports = {
  modulesGet,
  newModulesGet,
  newModulesPost,
  moduleShow,
  editModuleGet,
  editModulePost,
  deleteModule,
  deleteModuleConfirm,
};
