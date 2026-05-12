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
  const mod = await db.getModuleById(req.params.id);
  res.render('modules/show', { mod: mod[0] });
}

module.exports = {
  modulesGet,
  newModulesGet,
  newModulesPost,
  moduleShow,
};
