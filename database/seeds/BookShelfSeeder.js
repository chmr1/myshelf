'use strict'

/*
|--------------------------------------------------------------------------
| BookShelfSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class BookShelfSeeder {
  static async run () {
    await Database.table('book_shelf').insert([
      { id: 1, shelf_id: '5', book_id: '9' },
      { id: 2, shelf_id: '1', book_id: '8' },
      { id: 3, shelf_id: '5', book_id: '14' },
      { id: 4, shelf_id: '5', book_id: '5' },
      { id: 5, shelf_id: '2', book_id: '11' },
      { id: 6, shelf_id: '2', book_id: '15' },
      { id: 7, shelf_id: '5', book_id: '13' },
      { id: 8, shelf_id: '2', book_id: '15' },
      { id: 9, shelf_id: '2', book_id: '15' },
      { id: 10, shelf_id: '2', book_id: '11' },
      { id: 11, shelf_id: '2', book_id: '10' },
      { id: 12, shelf_id: '3', book_id: '1' },
      { id: 13, shelf_id: '2', book_id: '13' },
      { id: 14, shelf_id: '5', book_id: '8' },
      { id: 15, shelf_id: '5', book_id: '2' },
      { id: 16, shelf_id: '3', book_id: '7' },
      { id: 17, shelf_id: '5', book_id: '5' },
      { id: 18, shelf_id: '2', book_id: '4' },
      { id: 19, shelf_id: '4', book_id: '4' },
      { id: 20, shelf_id: '3', book_id: '14' },
      { id: 21, shelf_id: '4', book_id: '13' },
      { id: 22, shelf_id: '1', book_id: '8' },
      { id: 23, shelf_id: '5', book_id: '6' }
    ])
  }
}

module.exports = BookShelfSeeder
