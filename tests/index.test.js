const fs = require('fs')
const { showListItem } = require('../')

beforeAll(() => {
  // Spy on console.log to test its output:
  global.console = { log: jest.fn() }
})

test('Tests are configured correctly.', () => expect(true).toBe(true))

test('showListItem shows a list item', () => {
  // What I expect to see
  const expected = ' - wombat.txt'

  // What actually happens
  showListItem('wombat.txt')

  // Evaluate: do they match?
  expect(console.log).toHaveBeenCalledWith(expected)
})
