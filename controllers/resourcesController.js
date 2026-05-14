const db = require('../db/queries');

function newResourceGet(req, res) {
  res.render('resources/new', { moduleId: req.query.moduleId });
}

async function newResourcePost(req, res) {
  const { moduleId, name, quantity, unit, low_stock_threshold } = req.body;
  if (quantity < 1 || low_stock_threshold < 1) {
    return res.redirect('back');
  }
  await db.createResource(name, quantity, unit, low_stock_threshold, moduleId);
  res.redirect(`/modules/${moduleId}`);
}

async function updateResourceGet(req, res) {
  const resourceId = req.params.id;
  const resource = await db.getResourceById(resourceId);

  res.render('resources/edit', {
    resource: resource,
    moduleId: resource.module_id,
  });
}

async function updateResourcePost(req, res) {
  const { resourceId, moduleId, name, quantity, unit, low_stock_threshold } =
    req.body;
  console.log(req.body);
  if (quantity < 1 || low_stock_threshold < 1) {
    return res.redirect('back');
  }
  await db.updateResource(
    resourceId,
    name,
    quantity,
    unit,
    low_stock_threshold,
  );
  res.redirect(`/modules/${moduleId}`);
}

async function deleteResource(req, res) {
  const { id } = req.params;
  console.log(id);
  const { moduleId } = req.body;
  await db.deleteResource(id);
  res.redirect(`/modules/${moduleId}`);
}

module.exports = {
  newResourceGet,
  newResourcePost,
  updateResourceGet,
  updateResourcePost,
  deleteResource,
};
