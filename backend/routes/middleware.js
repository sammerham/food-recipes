const logger = (req, res, next) => {
  console.log(`requesr is ${req.method} to ${req.path}`)
  next()
}

module.exports = {logger}