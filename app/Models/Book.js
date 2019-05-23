'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  shelves () {
    return this.belongsToMany('App/Models/Shelf')
  }
}

module.exports = Book
