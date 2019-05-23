'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Shelf extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  books () {
    return this.belongsToMany('App/Models/Book')
  }
}

module.exports = Shelf
