'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
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
  async index ({ auth, response }) {
    const user = await User.findBy('id', auth.user.id)
    //const { id } = auth.user
    const shelves = user.shelves().fetch()
    //const shelves = shelf.books().withPivot('shelf_id').fetch()
    return response.status(200).json({
      message: 'Estante retornada com sucesso.',
      data: shelves
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
    const { name, description, customer_id, project, tags } = request.post()

    project.name = name || project.name
    project.description = description || project.description
    project.customer_id = customer_id || project.customer_id

    await project.save()

    if (tags && tags.length > 0) {
      await project.tags().detach()
      await project.tags().attach(tags)
      project.tags = await project.tags().fetch()
    }

    response.status(200).json({
      message: 'Successfully updated this project.',
      data: project
    })
  }
}

module.exports = ShelfController
