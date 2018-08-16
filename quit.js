// Quit nicely
module.exports = function quit (context) {
  // Tidy up our readline interface
  context.io.close()

  // I'm out
  process.exit(0)
}
