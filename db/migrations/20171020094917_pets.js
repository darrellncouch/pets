
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', (table)=>{
    table.increments();
    table.string('name');
    table.string('type');
    table.string('gender');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
