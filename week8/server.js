const express = require('express')
const app = express()
const routes = require('./routes')

// middleware
app.use(express.json())

// Route
app.use('/', routes)

const port = 3000

app.listen(port, () => {
  console.log(`Running on port ${port}...`)
})
