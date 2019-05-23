'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Book = use('App/Models/Book')

class FindBook {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, params: { id } }, next) {
    // call next to advance the request
    const book = await Book.find(id)

    if (!book) {
      return response.status(404).json({
        message: 'Livro não encontrado.',
        id
      })
    }

    request.body.book = book

    await next()
  }
}

module.exports = FindBook
