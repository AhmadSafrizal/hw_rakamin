const express = require('express')
const userRouter = require('./routes/users')
const movieRouter = require('./routes/movies')
const app = express()

app.use(express.json())

// Routes
app.use('/api', userRouter, movieRouter)
// app.use('/', movieRouter)

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

const port = 3000

app.listen(port, () => {
  console.log(`Server run on ${port}`)
})
