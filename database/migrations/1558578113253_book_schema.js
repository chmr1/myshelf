'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.bigIncrements()
      table.string('isbn', 20)
      table.string('title', 120).notNullable().unique().index()
      table.string('subtitle', 120)
      table.integer('volume')
      table.integer('number_page')
      table.string('author', 120)
      table.string('publishing_company', 120)
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
