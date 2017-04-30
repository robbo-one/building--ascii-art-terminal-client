var fs = require('fs')

module.exports = {
  start,
  welcome,
  dataFiles
}

function welcome(output) {
  output("Welcome to the ASCII reader")
}

function dataFiles(directory, callback) {
  fs.readdir(directory, (err, files) => {
    callback(files)
  })
}

function start(output, dataDirectory) {
  welcome(output)
  dataFiles(dataDirectory)
}

