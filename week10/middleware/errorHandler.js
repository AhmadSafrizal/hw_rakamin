const errorHandler = (err, req, res, next) => {
  console.log(err)

  if(err.name == 'requestBodyError') {
      res.status(400).json({message: "Value must be added"})
  } else if(err.name == 'notFound') {
      res.status(404).json({message: "Not Found"})
  } else {
      res.status(500).json({message: "internal server error"})
  }

}

module.exports = errorHandler