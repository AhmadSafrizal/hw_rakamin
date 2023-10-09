const express = require('express')
const { 
  getMovies, 
  getMovieById, 
  addMovie, 
  updateMovieById, 
  deleteMovie 
} = require('../controller/movieController')
const { 
  authMiddleware
} = require('../middleware/authMiddleware')
const movieRouter = express.Router()

movieRouter.get('/movies', authMiddleware, getMovies)
movieRouter.get('/movies/:id', authMiddleware, getMovieById)
movieRouter.post('/movies', authMiddleware, addMovie)
movieRouter.put('/movies/:id', authMiddleware, updateMovieById)
movieRouter.delete('/movies/:id', authMiddleware, deleteMovie)

module.exports = movieRouter
