exports.up = function (knex, Promise) {
  return Promise.all([

    // decisions
    knex.schema.createTable('decision', table => {
      table.increments()
      table.string("title").unique()
      table.text('info')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
      table.timestamps(false, true)
    }),

    // alternatives
    knex.schema.createTable('alternative', table => {
      table.increments()
      table.string('title')
      table.text('info')
      table.int('weight')
      table
        .integer("decision_id")
        .unsigned()
        .references("id")
        .inTable("decision")
        .onDelete("CASCADE")
      table.timestamps(false, true)
    }),

    // evidence
    knex.schema.createTable('evidence', table => {
      table.increments()
      table.string('title')
      table.text('info')
      table.int('type')
      table
        .integer('alternative_id')
        .unsigned()
        .references('id')
        .inTable('alternative')
        .onDelete('CASCADE')
      table.timestamps(false, true)
    }),

    // actions
    knex.schema.createTable('decision_action', table => {
      table.increments()
      table.string('title')
      table.text('info')
      table.text('retro')
      table
        .integer("decision_id")
        .unsigned()
        .references("id")
        .inTable("decision")
        .onDelete("CASCADE")
      table.timestamps(false, true)
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("action"),
    knex.schema.dropTable("evidence"),
    knex.schema.dropTable("alternative"),
    knex.schema.dropTable("decision"),
  ])
}