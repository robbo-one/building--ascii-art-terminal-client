const { isEmpty } = require('../')

test('isEmpty returns true for an empty object', () => {
  const expected = true
  const actual = isEmpty({})
  expect(actual).toBe(expected)
})

test('isEmpty returns false for an object with properties', () => {
  const expected = false
  const actual = isEmpty({ files: { 0: 'wombat.txt' }, currentFile: 0 })
  expect(actual).toBe(expected)
})

test('isEmpty returns true if only the `io` property is present', () => {
  const expected = true
  const actual = isEmpty({ io: {} })
  expect(actual).toBe(expected)
})

test('isEmpty returns false if `io` is present with other properties', () => {
  const expected = false
  const actual = isEmpty({ io: {}, files: { 0: 'wombat.txt' } })
  expect(actual).toBe(expected)
})
