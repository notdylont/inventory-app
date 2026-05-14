const pool = require('./pool');

async function getAllModules() {
  const { rows } = await pool.query(`SELECT * FROM modules`);
  return rows;
}

async function getModuleById(id) {
  const { rows } = await pool.query(`SELECT * FROM modules WHERE id = $1`, [
    id,
  ]);
  return rows;
}

async function createModule(name, desc) {
  await pool.query(`INSERT INTO modules (name, description) VALUES ($1, $2)`, [
    name,
    desc,
  ]);
}

async function updateModule(id, name, desc) {
  await pool.query(
    `UPDATE modules SET name = $1, description = $2 WHERE id = $3`,
    [name, desc, id],
  );
}

async function deleteModule(id) {
  await pool.query(`DELETE FROM modules WHERE id = $1`, [id]);
}

async function getAllModuleResources(id) {
  const { rows } = await pool.query(
    `SELECT * FROM resources WHERE module_id = $1`,
    [id],
  );
  return rows;
}

async function getResourceById(id) {
  const { rows } = await pool.query(`SELECT * FROM resources WHERE id = $1`, [
    id,
  ]);
  return rows;
}

async function createResource(name, quantity, unit, threshold, moduleId) {
  await pool.query(
    `INSERT INTO resources (name, quantity, unit, low_stock_threshold, module_id) VALUES ($1, $2, $3, $4, $5)`,
    [name, quantity, unit, threshold, moduleId],
  );
}

module.exports = {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getAllModuleResources,
  getResourceById,
  createResource,
};
