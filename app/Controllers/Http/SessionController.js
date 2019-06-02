'use strict'

const User = use('App/Models/User')

class SessionController {
  async create ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    let user = await User.findBy('email', email)
    await user.load('shelves')

    let token = await auth.generate(user)
    Object.assign(user, token)

    return user
  }
}

module.exports = SessionController
