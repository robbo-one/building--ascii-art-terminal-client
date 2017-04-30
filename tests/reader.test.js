var test = require('tape')
var reader = require('../lib/reader')

test('wecome message', (t) => {
 reader.welcome((msg) => {
    t.equal(msg, 'Welcome to the ASCII reader', 'returns welcome message')
    t.end()
 })
})

test('list files in dir', (t) => {
  reader.dataFiles(__dirname + '/data', function(files) {
    t.equal(files.length, 2, "reads correct number of files")
    t.end()
  })
})
