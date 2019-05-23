'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Shelf = use('App/Models/Shelf')

class FindShelf {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const shelf = await Shelf.find(id)

    if (!shelf) {
      return response.status(404).json({
        message: 'Estante não encontrada.',
        id
      })
    }

    request.body.shelf = shelf

    await next()
  }
}

module.exports = FindShelf
