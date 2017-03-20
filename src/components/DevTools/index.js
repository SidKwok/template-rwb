if (process.env.NODE_ENV === 'production') {
  module.exports = () => null
} else {
  module.exports = require('./DevTools')
}
