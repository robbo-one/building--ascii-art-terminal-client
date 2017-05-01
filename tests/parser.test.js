var test = require('tape')
var parser = require('../lib/parser')

test('q closes parser', (t) => {
  var fakeRL = {
    close: () =>  {
      t.pass()
      t.end()
    }
  }
  parser.parseInput('q', {rl: fakeRL})
})

test('prompts if input is invalid', (t) => {
  t.plan(2)
  var fakePresenter = {
    invalidInput: () => {
      t.pass('invalid input called')
    }
  }
  parser.parseInput('0', {presenter: fakePresenter, files: ['a', 'b']})  
  parser.parseInput('7', {presenter: fakePresenter, files: ['a', 'b']})  
})
