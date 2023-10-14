const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const movieRouter = require('./movies')

router.get("/test", (req, res) => {
  res.send("Test route")
})

router.use('/users', userRouter)
router.use('/movies', movieRouter)

module.exports = router