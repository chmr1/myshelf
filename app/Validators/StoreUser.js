'use strict'

class StoreUser {
  get rules () {
    return {
      username: 'required|unique:users|min:3|max:120',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return {
      'username.required': 'O nome do usuário é obrigatório.',
      'username.unique': 'Um usuário com este nome já existe.',
      'username.min': 'O nome do usuário deverá ter no mínimo 3 caracteres.',
      'username.max': 'O nome do usuário deverá ter no máximo 120 caracteres.',
      'email.required': 'O e-mail é obrigatório.',
      'email.email': 'Você deve informar um endereço de e-mail válido.',
      'email.unique': 'Um usuário com este endereço de e-mail já existe.',
      'password.required': 'A senha é obrigatória.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = StoreUser
