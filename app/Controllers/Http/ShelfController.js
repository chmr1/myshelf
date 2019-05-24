'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Shelf = use('App/Models/Shelf')

/**
 * Resourceful controller for interacting with books
 */
class ShelfController {
  /**
   * Show a list of all books.
   * GET books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const shelf = await Shelf.all()
    return response.status(200).json({
      message: 'Estante retornada com sucesso.',
      data: shelf
    })
  }

  /**
   * Display a single book.
   * GET books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    const shelf = await Shelf.findOrFail(params.id)
    await shelf.load('books')
    return response.status(200).json({
      message: 'Estante encontrada com sucesso.',
      data: shelf
    })
  }

  /**
   * Update book details.
   * PUT or PATCH books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, response }) {
    const { user_id, shelf, books } = request.post()

    shelf.user_id = user_id || shelf.user_id

    await shelf.save()

    if (books && books.length > 0) {
      await shelf.books().detach()
      await shelf.books().attach(books)
      shelf.books = await shelf.books().fetch()
    }

    response.status(200).json({
      message: 'Estante atualizada com sucesso.',
      data: shelf
    })
  }

  /**
   * Delete a shelf with id.
   * DELETE shelves/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const shelf = await Shelf.findOrFail(params.id)
    await shelf.delete()
    response.status(200).json({
      message: 'Estante exclu�da com sucesso.',
      deleted: true
    })
  }
}

module.exports = ShelfController
