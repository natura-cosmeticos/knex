// TODO: Delete temporary files after getting to a solution
// TODO: docker-compose.yml - make scripts like mssql?
// TODO: src/dryrunner.js - find a better name?
// TODO: Documentation
// TODO: Integration and unit tests

const knex = require('./lib/index');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3',
  },
  useNullAsDefault: true,
};

// npm run babel && npx nodemon  --inspect-brk dryrun.js
async function initKnexProcess() {
  const knexInstance = knex(config);

  debugger;

  const latest = await knexInstance.migrate.latest();
  const rollback = await knexInstance.migrate.rollback();
  console.log(latest, rollback);
  process.exit(0);
}

initKnexProcess();
