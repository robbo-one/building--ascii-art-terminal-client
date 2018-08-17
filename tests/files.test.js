const {
  handleCommentFile,
  handleFileList,
  handlePicFile,
  simpleHashMap,
  textFilesOnly
} = require('../files')

const next = () => {}

test('handleCommentFile throws if error present that is _not_ ENOENT', () => {
  // Not really a SystemError, but sufficient for this purpose because we only
  // check the `code`
  const err = Error("You not allowed! Go 'way!")
  err.code = 'EPERM'
  expect(() => handleCommentFile(err)).toThrow()
})

test('handleCommentFile does not throw if error is ENOENT', () => {
  const err = Error("Error: ENOENT: no such file or directory, open './blah'")
  err.code = 'ENOENT'
  expect(() => handleCommentFile(err, '', {}, next)).not.toThrow()
})

test('handleCommentFile sets the commentsBuf property', () => {
  const context = {}
  const expected = { commentsBuf: 'wombat' }
  handleCommentFile(null, 'wombat', context, next)
  expect(context).toEqual(expected)
})

test('handleFileList throws on error', () => {
  expect(() => handleFileList(Error('You goofed.'))).toThrow()
})

test('handleFileList sets the files property correctly', () => {
  const files = [ 'wombat.txt', 'aardvark.txt' ]
  const context = {}
  const expected = { files: { 0: 'wombat.txt', 1: 'aardvark.txt' } }
  handleFileList(null, files, context, next)
  expect(context).toEqual(expected)
})

test('handlePicFile throws on error', () => {
  expect(() => handlePicFile(Error('You goofed.'))).toThrow()
})

test('handlePicFile sets the `buf` property', () => {
  const context = {}
  const expected = { buf: 'aardvarks' }
  handlePicFile(null, 'aardvarks', context, next)
  expect(context).toEqual(expected)
})

test('simpleHashMap adds the correct property to the object', () => {
  const expected = { 1: 'aardvark.txt' }
  const actual = {}
  simpleHashMap(actual, 'aardvark.txt', 1)
  expect(actual).toEqual(expected)
})

test('textFilesOnly returns false if filename does not end in `.txt`', () => {
  expect(textFilesOnly('wombats')).toBe(false)
})

test('textFilesOnly returns true if filename ends in `.txt`', () => {
  expect(textFilesOnly('wombats.txt')).toBe(true)
})
