const { handleChoice, handleComment, reset } = require('../input')

let context, next

beforeEach(() => {
  context = {
    currentPic: 0,
    io: {},
    files: { 0: 'wombat.txt', 1: 'aardvark.txt' }
  }
  next = jest.fn()
})

test('handleComment sets the comment property', () => {
  handleComment('slartibartfast', context, () => {})
  expect(context.comment).toEqual('slartibartfast')
})

test('handleComment resets if <Enter> is pressed', () => {
  const expected = { io: {} }
  handleComment('', context, next)
  expect(next).toHaveBeenCalledWith(expected)
})

test("handleChoice resets when given a choice that doesn't exist", () => {
  const expected = { io: {} }
  handleChoice('99', context, next)
  expect(next).toHaveBeenCalledWith(expected)
})

test("handleChoice resets when given a choice that isn't a number", () => {
  const expected = { io: {} }
  handleChoice('flargleargle', context, next)
  expect(next).toHaveBeenCalledWith(expected)
})

test('handleChoice sets the currentPic property', () => {
  handleChoice('1', context, next)
  expect(context.currentPic).toBe('1')
})

test('reset returns a new object', () => {
  const actual = reset(context)
  expect(actual).not.toBe(context)
})
