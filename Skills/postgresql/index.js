const { Client } = require('pg');
module.exports = async ({ config, params }) => {
  const client = new Client({ connectionString: config.connectionString });
  await client.connect();
  try {
    const res = await client.query(params.query);
    return res.rows;
  } finally {
    await client.end();
  }
};
