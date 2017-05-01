var test = require('tape')
var presenter = require('../lib/presenter')

test('wecome message', (t) => {
 presenter.welcome((msg) => {
    t.equal(msg, 'Welcome to the ASCII reader', 'returns welcome message')
    t.end()
 })
})

test('file prompt', (t) => {
  presenter.filePrompt(['file-1.txt', 'file-2.txt'], (msg) => {
    t.equal(msg, "1. file-1.txt\n2. file-2.txt", "prompts for correct message")
    t.end()
  })
})

test('enter any key', (t) => {
  presenter.enterAnyKey((msg) => {
    t.equal(msg, "Enter any key to continue.", 'returns correct message')
    t.end()
  })
})
