'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelfSchema extends Schema {
  up () {
    this.create('shelves', (table) => {
      table.bigIncrements()
      table.bigInteger('user_id').unsigned().index('user_id')
      table.foreign('user_id').references('users.id').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('shelves')
  }
}

module.exports = ShelfSchema
