var fs = require('fs')

module.exports = {
  dataFiles,
  readArt
}

function dataFiles(directory, callback) {
  fs.readdir(directory, (err, files) => {
    callback(files)
  })
}

function readArt(file, callback) {
  fs.readFile(file, 'utf8', (err, txt) => {
    callback(txt)
  })
}

