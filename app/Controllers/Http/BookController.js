'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Book = use('App/Models/Book')
const { validate } = use('Validator')

/**
 * Resourceful controller for interacting with books
 */
class BookController {
  /**
   * Show a list of all books.
   * GET books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const books = await Book.all()
    return response.status(200).json({
      message: 'Livros retornados com sucesso.',
      data: books
    })
  }

  /**
   * Create/save a new book.
   * POST books
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = await request.only(['isbn', 'title', 'subtitle', 'volume', 'number_page', 'author', 'publishing_company'])
    const book = await Book.create(data)

    return response.status(201).json({
      message: 'Livro cadastrado com sucesso.',
      data: book
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
    const book = await Book.findOrFail(params.id)
    return response.status(200).json({
      message: 'Livro encontrado com sucesso.',
      data: book
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
  async update ({ params, request, response }) {
    const book = await Book.findOrFail(params.id)
    const data = request.only(['isbn', 'title', 'subtitle', 'volume', 'number_page', 'author', 'publishing_company'])

    book.merge(data)
    await book.save()
    response.status(200).json({
      message: 'Livro atualizado com sucesso.',
      data: book
    })
  }

  /**
   * Delete a book with id.
   * DELETE books/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    response.status(200).json({
      message: 'Livro excluído com sucesso.',
      deleted: true
    })
  }
}

module.exports = BookController
