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
  async show ({ request, response }) {
    const { book } = request.post()

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
  async update ({ request, response }) {
    const { isbn, title, subtitle, volume, number_page, author, publishing_company, book } = request.post()
    book.isbn = isbn || book.isbn
    book.title = title || book.title
    book.subtitle = subtitle || book.subtitle
    book.volume = volume || book.volume
    book.number_page = number_page || book.number_page
    book.author = author || book.author
    book.publishing_company = publishing_company || book.publishing_company
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
  async destroy ({ request, response }) {
    const { book } = request.post()
    await book.delete()
    response.status(200).json({
      message: 'Livro excluído com sucesso.',
      deleted: true
    })
  }
}

module.exports = BookController
