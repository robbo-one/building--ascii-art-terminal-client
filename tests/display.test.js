const { choices, showFile, showComments } = require('../display')

beforeEach(() => {
  // Spy on console.log to test its output:
  global.console = { log: jest.fn() }
})

test('choices displays all filenames provided to it', () => {
  const context = {
    files: {
      0: 'wombat.txt',
      1: 'aardvark.txt',
      2: 'lemur.txt'
    }
  }

  // We don't really care about the `next` function that would normally be
  // provided as the second argument
  choices(context, () => {})

  // These are quite 'fragile' tests because they depend on the output
  // style/layout not changing very often.
  expect(console.log).toHaveBeenCalledWith(' 0. wombat.txt')
  expect(console.log).toHaveBeenCalledWith(' 1. aardvark.txt')
  expect(console.log).toHaveBeenCalledWith(' 2. lemur.txt')
})

test('showFile shows a buffer using utf8 encoding', () => {
  const context = {
    buf: Buffer.from('wombat')
  }
  const expected = '\nwombat'
  showFile(context, () => {})
  expect(console.log).toHaveBeenCalledWith(expected)
})

test('showComments shows the comments', () => {
  const context = {
    commentsBuf: Buffer.from('aardvark')
  }
  const expected = 'aardvark'
  showComments(context, () => {})
  expect(console.log).toHaveBeenCalledWith(expected)
})

test('showComments does not attempt output if no comments present', () => {
  showComments({}, () => {})
  expect(console.log).not.toHaveBeenCalled()
})
