'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShelfBookSchema extends Schema {
  up () {
    this.create('shelf_books', (table) => {
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
    this.drop('shelf_books')
  }
}

module.exports = ShelfBookSchema
