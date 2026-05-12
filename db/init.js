require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE modules(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE resources(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    unit TEXT,
    low_stock_threshold INTEGER,
    module_id INTEGER REFERENCES modules (id)
);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    // for production
    // connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}?sslmode=true`,
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
