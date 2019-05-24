'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Hash = use('Hash')
const Database = use('Database')

class UserSeeder {
  static async run () {
    await Database.table('users').insert([
      { id: 1, username: 'admin', email: 'admin@myshelf.com', password: await Hash.make('123456'), created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 2, username: 'demo', email: 'demo@myshelf.com', password: await Hash.make('123456'), created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 3, username: 'fulano', email: 'fulano@myshelf.com', password: await Hash.make('123456'), created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 4, username: 'Beltrano', email: 'beltrano@myshelf.com', password: await Hash.make('123456'), created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 5, username: 'Sicrano', email: 'sicrano@myshelf.com', password: await Hash.make('123456'), created_at: Database.fn.now(), updated_at: Database.fn.now() }
    ])
  }
}

module.exports = UserSeeder
