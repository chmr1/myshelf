'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserSeeder = require('./UserSeeder')
const ShelfSeeder = require('./ShelfSeeder')
const BookSeeder = require('./BookSeeder')
const BookShelfSeeder = require('./BookShelfSeeder')

class DatabaseSeeder {
  async run() {
    //await UserSeeder.run()
    //await ShelfSeeder.run()
    //await BookSeeder.run()
    await BookShelfSeeder.run()
  }
}

//adonis seed --files DatabaseSeeder.js
//heroku run ENV_SILENT=true node ace seed --force

module.exports = DatabaseSeeder
