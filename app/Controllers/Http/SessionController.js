'use strict'

const User = use('App/Models/User')

class SessionController {
  async create ({ request, response, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    let user = await User.findBy('email', email)
    await user.load('shelves')

    let token = await auth.generate(user)
    Object.assign(user, token)

    response.status(200).json({
      message: 'Usuário autenticado com sucesso.',
      data: user
    })
  }
}

module.exports = SessionController
