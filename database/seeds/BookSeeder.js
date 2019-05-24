'use strict'

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class BookSeeder {
  static async run () {
    await Database.table('books').insert([
      { id: 1, isbn: '9788516062743', title: 'A árvore do Beto', subtitle: '', volume: 1, number_page: 32, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 2, isbn: '9788516062989', title: 'Romeu e Julieta', subtitle: '', volume: 1, number_page: 40, author: 'William Shakespeare', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 3, isbn: '9788516062996', title: 'A escolinha do mar', subtitle: '', volume: 1, number_page: 40, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 4, isbn: '9788516063139', title: 'A fantástica máquina dos bichos', subtitle: '', volume: 1, number_page: 32, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 5, isbn: '9788516063146', title: 'A arca de Noé', subtitle: '', volume: 1, number_page: 40, author: 'Vinicius de Moraes', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 6, isbn: '9788516063177', title: 'O fantástico mistério de Feiurinha', subtitle: '', volume: 3, number_page: 0, author: 'Pedro Bandeira', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 7, isbn: '9788516065331', title: 'A primavera da lagarta', subtitle: '', volume: 1, number_page: 32, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 8, isbn: '9788516066185', title: 'A marca de uma lágrima', subtitle: '', volume: 4, number_page: 184, author: 'Pedro Bandeira', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 9, isbn: '9788516066437', title: 'Lolo Barnabé', subtitle: '', volume: 1, number_page: 32, author: 'Eva Furnari', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 10, isbn: '9788516069094', title: 'Ruth Rocha conta A Ilíada', subtitle: '', volume: 1, number_page: 136, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 11, isbn: '9788516069452', title: 'Camilão, o comilão', subtitle: '', volume: 3, number_page: 32, author: 'Ana Maria Machado', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 12, isbn: '9788516069964', title: 'Adivinhe se puder ', subtitle: '', volume: 3, number_page: 32, author: 'Eva Furnari', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 13, isbn: '9788516069988', title: 'Assim assado', subtitle: '', volume: 3, number_page: 32, author: 'Eva Furnari', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 14, isbn: '9788516070632', title: 'A Cinderela das bonecas', subtitle: '', volume: 1, number_page: 40, author: 'Ruth Rocha', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() },
      { id: 15, isbn: '9788516099978', title: 'Estudar história', subtitle: 'das origens do homem à era digital - 6º ano', volume: 2, number_page: 0, author: 'Patricia Ramos Braick', publishing_company: 'Editora Moderna', created_at: Database.fn.now(), updated_at: Database.fn.now() }
    ])
  }
}

module.exports = BookSeeder
