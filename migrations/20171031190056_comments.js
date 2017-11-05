exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', (table) => {
      table.increments()
      table.string('name')
      table.string('comment')
      table.integer('links_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
};
