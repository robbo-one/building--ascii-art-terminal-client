const fs = require('fs')

// Out of habit, I separate (by a blank line) the imports for dependencies that
// are npm or Node packages (above) from the ones I or my team have written.
const store = require('./store')

// Notice this takes the `next` function from `index.js` as a parameter, so it
// can move to the next stage when finished. To allow this to work, I've used
// an inline anonymous function (an arrow function in this case) to insert the
// extra parameter.
function loadDirectory (next) {
  fs.readdir('./data', (err, files) => handleFileList(err, files, next))
}

function loadFile (next) {
  fs.readFile(`./data/${store.getCurrentItem()}`, (err, file) => handleFile(err, file, next))
}

function handleFile (err, file, next) {
  if (err) {
    console.log(err)
    throw Error('Sorry, could not load your file.')
  }
  store.setBuffer(file)
  next()
}

function handleFileList (err, files, next) {
  if (err) {
    throw Error('Sorry, could not read from the data directory.')
  }
  store.setList(files)
  next()
}

module.exports = {
  handleFile,
  handleFileList,
  loadDirectory,
  loadFile
}
