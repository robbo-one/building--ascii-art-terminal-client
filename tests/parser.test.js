var test = require('tape')
var parser = require('../lib/parser')

test('q closes parser', (t) => {
  var fakeRL = {
    close: () =>  {
      t.pass()
      t.end()
    }
  }
  parser.parseInput('q', fakeRL)
})
