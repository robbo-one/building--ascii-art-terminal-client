const fs = require('fs')

// Notice this takes the `next` function from `index.js` as a parameter, so it
// can move to the next stage when finished. To allow this to work, I've used
// an inline anonymous function (an arrow function in this case) to insert the
// extra parameter.
function loadDirectory (context, next) {
  fs.readdir('./data',
    (err, files) => handleFileList(err, files, context, next))
}

function loadFile (context, next) {
  const filename = context.files[context.currentPic]
  fs.readFile(`./data/${filename}`,
    (err, file) => handleFile(err, file, context, next))
}

function handleFile (err, file, context, next) {
  if (err) {
    console.log(err)
    throw Error('Sorry, could not load your file.')
  }
  context.buf = file
  next(context)
}

function handleFileList (err, files, context, next) {
  if (err) {
    throw Error('Sorry, could not read from the data directory.')
  }
  context.files = files
    .filter(textFilesOnly)
    .reduce(simpleHashMap, {})
  next(context)
}

// This helps us ignore directory names, hidden files etc
function textFilesOnly (filename) {
  return filename.endsWith('.txt')
}

// Store a file list as an object (effectively, a _hashmap_)
function simpleHashMap (result, filename, index) {
  result[index] = filename
  return result
}

module.exports = {
  handleFile,
  handleFileList,
  loadDirectory,
  loadFile,
  textFilesOnly
}
