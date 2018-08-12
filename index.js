const fs = require('fs')

console.log('Welcome to ASCII Art Reader!')

fs.readdir('data', listFiles)

function listFiles (err, files) {
  if (err) {
    console.log('Sorry, could not read from the data directory.')
    return
  }
  console.log('Here are the available files:')
  files.forEach(showListItem)
}

function showListItem (item) {
  console.log(` - ${item}`)
}
