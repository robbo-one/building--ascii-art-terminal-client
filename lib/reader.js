var fs = require('fs')

module.exports = {
  dataFiles
}

function dataFiles(directory, callback) {
  fs.readdir(directory, (err, files) => {
    callback(files)
  })
}

