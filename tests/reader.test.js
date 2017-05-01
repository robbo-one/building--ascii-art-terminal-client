var test = require('tape')
var reader = require('../lib/reader')

test('list files in dir', (t) => {
  reader.dataFiles(__dirname + '/data', function(files) {
    t.equal(files.length, 2, "reads correct number of files")
    t.equal(files[0], "another-test.txt", "reads file names")
    t.end()
  })
})

test('readArt', (t) => {
  reader.readArt(__dirname + '/data/another-test.txt', (txt) => {
    t.equal(txt, "test data\n", 'sends back the file data')
    t.end()
  })
})
