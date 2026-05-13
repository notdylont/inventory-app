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

module.exports = {
  newResourceGet,
  newResourcePost,
};
