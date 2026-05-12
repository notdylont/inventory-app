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

async function getAllResources() {
  const { rows } = await pool.query(`SELECT * FROM resources`);
  return rows;
}

async function createModule(name, desc) {
  await pool.query(`INSERT INTO modules (name, description) VALUES ($1, $2)`, [
    name,
    desc,
  ]);
}

module.exports = {
  getAllModules,
  getModuleById,
  getAllResources,
  createModule,
};
