// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    database: "test",
    user: "usuariotest",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
