'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

// tags
Route.get('/books', 'BookController.index')
Route.get('books/:id', 'BookController.show').middleware(['findBook'])
Route.post('books', 'BookController.store').validator("StoreBook")
Route.patch('books/:id', 'BookController.update').middleware(['findBook']).validator("UpdateBook")
Route.delete('books/:id', 'BookController.destroy').middleware(['findBook'])

// tags
Route.get('shelves', 'ShelfController.index')
Route.get('shelves/:id', 'ShelfController.show').middleware(['findShelf'])
Route.patch('shelves/:id', 'ShelfController.update').middleware(['findShelf'])
