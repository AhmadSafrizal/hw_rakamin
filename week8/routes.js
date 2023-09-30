const express = require('express')
const router = express.Router()
const pool = require('./database')

// Menampilkan data film
router.get("/films", async (req, res) => {
  try {
    const allFilms = await pool.query(
      "SELECT * FROM film"
    )

    res.json(allFilms.rows)
  } catch (err) {
    console.log(err.message)
  }
})

// Menampilkan data film
router.get("/films/:id", async (req, res) => {
  try {
    const {id} = req.params

    const film = await pool.query(
      "SELECT * FROM film WHERE film_id = $1",
      [id]
    )

    res.json(film.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// Menampilkan data film berdasarkan kategori
router.get("/films/categories/:id", async (req, res) => {
  try {
    const {id} = req.params

    const film = await pool.query(
      "SELECT * FROM film_category WHERE category_id = $1",
      [id]
    )

    res.json(film.rows)
  } catch (err) {
    console.log(err.message)
  }
})

// Menampilkan list kategori
router.get("/categories", async (req, res) => {
  try {
    const category = await pool.query(
      "SELECT * FROM category"
    )

    res.json(category.rows)
  } catch (err) {
    console.log(err.message)
  }
})

module.exports = router
