const store = require('./store')

// Quit nicely
module.exports = function quit () {
  // Tidy up our readline interface
  store.closeIOInterface()

  // I'm out
  process.exit(0)
}
