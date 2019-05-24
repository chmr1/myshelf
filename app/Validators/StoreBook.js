'use strict'

class StoreBook {
  get rules() {
    const bookId = this.ctx.params.id
    return {
      isbn: 'number',
      title: `required|unique:books,title,id,${bookId}|min:3|max:120`,
      subtitle: 'max:120',
      volume: 'integer',
      number_page: 'integer',
      author: 'required|min:3|max:120',
      publishing_company: 'required|min:3|max:120'
    };
  }

  get messages () {
    return {
      'isbn.number': 'Apenas números inteiros são permitidos no campo ISBN.',
      'title.required': 'Título do livro é obrigatório.',
      'title.unique': 'Um livro com este título já existe.',
      'title.min': 'O título do livro deverá ter no mínimo 3 caracteres.',
      'title.max': 'O título do livro deverá ter no máximo 120 caracteres.',
      'subtitle.max': 'O subtítulo do livro deverá ter no máximo 120 caracteres.',
      'volume.integer': 'Apenas números inteiros são permitidos no campo volume.',
      'number_page.integer': 'Apenas números inteiros são permitidos no campo número de páginas.',
      'author.required': 'O nome do autor é obrigatório.',
      'author.min': 'O nome do autor deverá ter no mínimo 3 caracteres.',
      'author.max': 'O nome do autor deverá ter no máximo 120 caracteres.',
      'publishing_company.required': 'Nome da editora é obrigatório',
      'publishing_company.min': 'O nome da editora deverá ter no mínimo 3 caracteres.',
      'publishing_company.max': 'O nome da editora deverá ter no máximo 120 caracteres.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = StoreBook
