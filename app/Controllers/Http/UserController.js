'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ response }) {
    const users = await User.all()
    return response.status(200).json({
      message: 'Usuários retornados com sucesso.',
      data: users
    })
  }

  async create ({ request, response }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)
    await user.shelves().create({ user_id: user.id });
    response.status(201).json({
      message: 'Usuário cadastrado com sucesso.',
      data: user
    })
  }
}

module.exports = UserController
