'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookShelfSchema extends Schema {
  up () {
    this.create('book_shelf', (table) => {
      table
        .bigInteger('shelf_id')
        .unsigned()
        .index('shelf_id')
      table
        .foreign('shelf_id')
        .references('shelves.id')
        .onDelete('set null')
      table
        .bigInteger('book_id')
        .unsigned()
        .index('book_id')
      table
        .foreign('book_id')
        .references('books.id')
        .onDelete('set null')
    })
  }

  down () {
    this.drop('book_shelf')
  }
}

module.exports = BookShelfSchema
