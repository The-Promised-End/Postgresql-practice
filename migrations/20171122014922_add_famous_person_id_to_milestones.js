
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('milestones', function(table) {
      table.increments();
      table.string('description');
      table.string('date_archived');
      table.integer(‘famous_person_id’).unsigned()
      table.foreign(‘famous_person_id’).references(‘famous_people.id’)

};

exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTable('milestones')
    ])
};
