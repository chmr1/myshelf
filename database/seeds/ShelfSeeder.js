'use strict'

/*
|--------------------------------------------------------------------------
| ShelfSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class ShelfSeeder {
  static async run () {
    await Database.table('shelves').insert([
      { id: 1, user_id: 1, created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 2, user_id: 2, created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 3, user_id: 3, created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 4, user_id: 4, created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 5, user_id: 5, created_at: Database.fn.now(), updated_at: Database.fn.now() }
    ])
  }
}

module.exports = ShelfSeeder
