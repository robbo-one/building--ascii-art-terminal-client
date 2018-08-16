const { getItem, getList, setCurrentItem, setList } = require('../store')

let testStore = null

// This gives us a consistent test object prior to each test fixture running,
// saving us repeating the code and making the state of each test predictable
beforeEach(() => {
  testStore = {
    0: 'wombat.txt',
    1: 'aardvark.txt'
  }
})

test('getList returns a list', () => {
  const expected = [
    '0. wombat.txt',
    '1. aardvark.txt'
  ]
  const actual = getList(testStore)
  expect(actual).toEqual(expected)
})

test('getItem returns the correct item', () => {
  const expected = { 1: 'aardvark.txt' }
  const actual = getItem(1, testStore)
  expect(actual).toEqual(expected)
})

test("getItem throws if the item doesn't exist", () => {
  // Notice we have to wrap the call in an anonymous function to make this
  // assertion work. See the Jest docs:
  // https://jestjs.io/docs/en/expect#tothrowerror
  expect(() => getItem(9, testStore)).toThrow()
})

// A hash table or (hash map) is a rather old term for an efficient way of
// storing key/value pairs. JavaScript objects are a high-level hash table, so
// we have one already with zero effort on our part. All we're really testing
// in the function below is that the array of filenames got properly converted
// to an object with array index keys.
//
// If you want to read more about such data structures, this Stack Overflow
// answer is pretty good:
// https://stackoverflow.com/a/368504/122643
test('setList creates a hashmap', () => {
  // Create a copy of testStore since it exactly matches what we hope to see
  const expected = { ...testStore }

  // Empty testStore so we can fill it up again
  testStore = {}

  const files = [
    'wombat.txt',
    'aardvark.txt'
  ]
  setList(files, testStore)
  expect(testStore).toEqual(expected)
})

test('setCurrentItem creates the currentItem property', () => {
  const expected = {
    ...testStore,
    currentItem: 1
  }
  setCurrentItem(1, testStore)
  expect(testStore).toEqual(expected)
})
