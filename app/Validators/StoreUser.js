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
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password'
    }
  }
}

module.exports = StoreUser
