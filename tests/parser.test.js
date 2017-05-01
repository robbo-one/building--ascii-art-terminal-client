var test = require('tape')
var parser = require('../lib/parser')

test('q closes parser', (t) => {
  var fakeRL = {
    close: () =>  {
      t.pass('rl.close() called successfully')
      t.end()
    }
  }
  parser.parseInput('q', {rl: fakeRL})
})

test('calls presenter.invalidInput() if input is invalid', (t) => {
  t.plan(2)
  var fakePresenter = {
    invalidInput: () => {
      t.pass('invalid input called')
    }
  }
  parser.parseInput('0', {presenter: fakePresenter, files: ['a', 'b']})  
  parser.parseInput('7', {presenter: fakePresenter, files: ['a', 'b']})  
})

test('prints art if valid art is chosen', (t) => {
  t.plan(3)
  var fakePresenter = {
    printArt: (txt, printer) => {
      t.equal(txt, 'fake text from file', 'print art is passed the correct art')
      t.equal(printer, 'fake printer', 'printer is passed in from params')
    }
  }
  var fakeReader = {
    readArt: (fileName, callback) => {
      t.equal(fileName, 'a', 'reader is passed the correct file')
      callback('fake text from file')
    }
  }
  parser.parseInput('1', {
    presenter: fakePresenter,
    reader: fakeReader,
    printer: 'fake printer',
    files: ['a']
  })
})
