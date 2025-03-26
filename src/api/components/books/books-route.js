const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books
  route.get('/', booksController.getBooks);

  // Create a new book
  route.post('/', booksController.createBook);

  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
  app.get('/api/book?offset=25&limit=10', (request, response) => {
    const offset = request.query.offset || 0;
    const limit = request.query.limit || 20;
    response.send(`offset:${offset}; limit:${limit}`);
  });

};
